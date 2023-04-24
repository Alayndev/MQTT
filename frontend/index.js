const client = mqtt.connect("ws://localhost:8083/mqtt", {
  username: "frontend",
  password: "mqtt-frontend-password",
});

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe("$share/group2/send-alert", { qos: 2 }, (err) => {
    if (err) {
      console.error("Error subscribing:", err);
    } else {
      console.log("Subscribed to topic");
    }
  });
});

function main() {
  client.on("message", (topic, message) => {
    console.log(topic, "-", JSON.parse(message));

    if (JSON.parse(message))
      document.querySelector(".show_alert").style.display = "block";
    else document.querySelector(".show_alert").style.display = "none";
  });

  const sendForm = document.querySelector(".form");

  sendForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = document.querySelector(".form__message-input").value;
    const alert = document.querySelector(".form__alert-input").value;

    const data = {
      message,
      alert,
    };

    if (client.connected) {
      client.publish(
        "value",
        JSON.stringify(data),
        { qos: 2 },
        (err) => {
          if (err) {
            console.error("Error publishing message:", err);
          } else {
            console.log("Message published successfully");
            e.target.reset();
          }
        }
      );
    } else {
      console.error("Client not connected to broker");
    }
  });
}

main();
