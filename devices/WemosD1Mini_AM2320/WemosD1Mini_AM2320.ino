#include <Arduino.h>
#include <Wire.h>

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

#include <Adafruit_Sensor.h>
#include <Adafruit_AM2320.h>

#include "settings.h"

WiFiClient client;
HTTPClient http;
Adafruit_AM2320 am2320 = Adafruit_AM2320(); // I2C

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

  // Connecting to AM2320 sensor
  am2320.begin();
}


void loop() {
  float temperature = am2320.readTemperature(); // °C
  float humidity = am2320.readHumidity(); // %

  sendDataToThingSpeak(temperature, humidity);

  delay(FREQUENCY_OF_SENDING_DATA);
}

void sendDataToThingSpeak(float temperature, float humidity) {
  String apiHost = "http://api.thingspeak.com/update";
  String apiKeyParameter = "?api_key=" + API_KEY;
  String temperatureParameter = "&field1=" + String(temperature);
  String humidityParameter = "&field2=" + String(humidity);
  String url = apiHost + apiKeyParameter + temperatureParameter + humidityParameter;

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
