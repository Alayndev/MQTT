const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883/", {
  username: "backend",
  password: "mqtt-backend-password",
});

client.on("connect", function () {
  console.log("Connected to MQTT broker");
  client.subscribe("$share/group1/value", { qos: 2 }, (err) => {
    if (err) {
      console.error("Error subscribing:", err);
    } else {
      console.log("Subscribed to topic");
    }
  });
});

client.on("message", function (topic, message) {
  console.log(topic + " - " + message);
  const messageObj = JSON.parse(message);

  const messageValue = messageObj.message;
  const alertValue = messageObj.alert;

  if (messageValue > alertValue) {
    console.log("Send Alert email");

    publishMessage("send-alert", "true");
  } else {
    publishMessage("send-alert", "false");
  }
});

function publishMessage(topic, message) {
  client.publish(topic, message, { qos: 2 }, (err) => {
    if (err) {
      console.error("Error publishing message :", err);
    } else {
      console.log(`Message published successfully to topic ${topic}`);
    }
  });
}

client.on("reconnect", () => {
  console.error("Trying to reconnect");
});
