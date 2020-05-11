#include <Arduino.h>
#include <Wire.h>

#include <ESP8266WiFi.h>
#include <WiFiClient.h>

#include <ESP8266HTTPClient.h>

#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

HTTPClient http;
WiFiClient client;
Adafruit_BME280 bme; // I2C

const char* ssid = "DIR-615T-1666";
const char* password = "13234003";
const String host = "http://api.thingspeak.com/update";
const String apiKey = "1DPM55BZC50VTL3M";
const unsigned int frequencySendingData = 300000; // 5 minutes

void setup() {
  Serial.begin(9600);

  while (!Serial); // time to get serial running

  // Connecting to WiFi network
  WiFi.mode(WIFI_STA); // Set ESP8266 to be a WiFi-client
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  // Initialization and availability check BME280
  const boolean sensorStatus = bme.begin();

  if (!sensorStatus) {
    Serial.println("Could not find a valid BME280 sensor, check wiring, address, sensor ID!");

    while (1) delay(1000);
  }

  Serial.println("");
  Serial.println("BME280 connected");
}


void loop() {
  float temperature = bme.readTemperature(); // °C
  float humidity = bme.readHumidity(); // %
  float pressure = bme.readPressure() / 100.0F; // hPa

  sendData(temperature, humidity, pressure);

  delay(frequencySendingData);
}

void sendData(float temperature, float humidity, float pressure) {
  String apiKeyParameter = "?api_key=" + apiKey;
  String temperatureParameter = "&field1=" + String(temperature);
  String humidityParameter = "&field2=" + String(humidity);
  String pressureParameter = "&field3=" + String(pressure);

  String url = host + apiKeyParameter + temperatureParameter + humidityParameter + pressureParameter;

  Serial.print("Requesting URL: ");
  Serial.println(url);

  http.begin(client, url);

  int httpCode = http.GET();

  Serial.print("HTTP CODE = ");
  Serial.println(httpCode);
  Serial.println();

  if (httpCode) {
    if (httpCode == 200) {
      String payload = http.getString();
      Serial.println("Response: ");
      Serial.println(payload);
    }
  }

  Serial.println("closing connection");
  http.end();
}
