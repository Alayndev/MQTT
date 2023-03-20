const mqtt = require("mqtt");
const client = mqtt.connect("ws://test.mosquitto.org:8080/mqtt");

client.on("connect", function () {
  console.log("Connected to MQTT broker");
  client.subscribe("application-iot-device-simulator", () => {
    console.log("Subscribed to topic");
  });
});

client.on("message", function (topic, message) {
  console.log(topic + " - " + message);
  const messageObj = JSON.parse(message);

  const messageValue = messageObj.message;
  const alertValue = messageObj.alert;

  if (messageValue > alertValue) {
    console.log("Send Alert email");
  }
});

client.on("reconnect", () => {
  console.error("Trying to reconnect");
});
