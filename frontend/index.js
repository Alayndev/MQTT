const client = mqtt.connect("ws://test.mosquitto.org:8080/mqtt");

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

function main() {
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
        "application-iot-device-simulator",
        JSON.stringify(data),
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