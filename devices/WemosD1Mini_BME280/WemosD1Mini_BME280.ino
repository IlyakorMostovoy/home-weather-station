#include <Arduino.h>
#include <Wire.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#include "Settings.h"

WiFiClient client;
HTTPClient http;
Adafruit_BME280 bme; // I2C

void setup() {
  Serial.begin(9600);

  while (!Serial);

  // Connecting to WiFi network
  WiFi.mode(WIFI_STA); // Set ESP8266 to be a WiFi-client
  WiFi.begin(SSID, PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("WiFi connected, IP address: ");
  Serial.println(WiFi.localIP());

  // Connecting and availability check BME280 sensor
  const boolean sensorStatus = bme.begin();

  if (!sensorStatus) {
    Serial.println("Could not find a valid BME280 sensor, check wiring, address, sensor ID!");

    while (1) delay(1000);
  }

  Serial.println("");
  Serial.println("BME280 connected");
  Serial.println("");
}


void loop() {
  float temperature = bme.readTemperature(); // °C
  float humidity = bme.readHumidity(); // %
  float pressure = bme.readPressure() / 100.0F; // hPa

  sendDataToThingSpeak(temperature, humidity, pressure);

  delay(FREQUENCY_SENDING_DATA);
}

void sendDataToThingSpeak(float temperature, float humidity, float pressure) {
  String apiHost = "http://api.thingspeak.com/update";
  String apiKeyParameter = "?api_key=" + API_KEY;
  String temperatureParameter = "&field1=" + String(temperature);
  String humidityParameter = "&field2=" + String(humidity);
  String pressureParameter = "&field3=" + String(pressure);
  String url = apiHost + apiKeyParameter + temperatureParameter + humidityParameter + pressureParameter;

  Serial.println("");
  Serial.print("Requesting URL: ");
  Serial.println(url);
  Serial.println("Starting HTTP connection");

  http.begin(client, url); // Configure HTTP Request

  int httpCode = http.GET();

  if (httpCode) {
    if (httpCode == 200) {
      String payload = http.getString();

      Serial.print("Successful sending. Channel Entries: ");
      Serial.println(payload);
    }
  }

  http.end();

  Serial.println("Closing HTTP connection");
}
