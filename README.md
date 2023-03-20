# MQTT

## Description:

MQTT stands for Message Queuing Telemetry Transport, and it is a lightweight messaging protocol designed for constrained devices and low-bandwidth, high-latency or unreliable networks. MQTT is often used in Internet of Things (IoT) scenarios, where it enables devices to communicate with each other and with central servers or cloud platforms.

MQTT is based on a publish/subscribe messaging pattern, where devices or applications can publish messages to topics, and other devices or applications can subscribe to those topics to receive the messages. MQTT also supports Quality of Service (QoS) levels to ensure reliable message delivery, and it includes features such as last will and testament (LWT) messages to notify subscribers of device disconnections or failures.

Overall, MQTT is a simple and efficient protocol that has become a popular choice for IoT and other low-power, low-bandwidth applications that require reliable messaging.

This example shows how it works with WebSocket and the browser in order to emulate a device report. 

As you can see, ws://test.mosquitto.org:8080/mqtt is the address of an MQTT broker that we can connect to using the WebSocket transport protocol because the mqtt.js library supports various transport protocols such as TCP, WebSocket, and Secure WebSocket. 

<br/>

## Getting Started

If you want to run it locally, follow these steps. <br/>

First, clone the repository:

```bash
git clone git@github.com:Alayndev/MQTT.git
```
You now have a new directory called 'MQTT'. Let’s 'cd' into it:

```bash
cd MQTT/
```

Install dependencies for the backend:

```bash
cd backend/ && npm install
```

Run the development server:

```bash
npm run start
```

Run the frontend with live server.

Open [http://localhost:5500/frontend/index.html](http://localhost:5500/frontend/index.html) with your browser to see the result.
