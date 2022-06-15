const wsUrl = "wss://echo-ws-service.herokuapp.com";

const result = document.querySelector("#result");
const btnConnect = document.querySelector("#connect");
const btnDisconnect = document.querySelector("#close");
const btnSend = document.querySelector("#send");
const btnClear = document.querySelector("#clear");
const btnGeo = document.querySelector("#geo");

let ws;
//создаем функции вывода сообщения
function writeToScreen(message) {
  const pre = document.createElement("p");
  pre.classList.add("my-msg");
  pre.classList.add("msg-style");
  pre.innerHTML = message;
  result.appendChild(pre);
}
function writeToScreenResponse(message) {
  const pre = document.createElement("p");
  pre.classList.add("response-msg");
  pre.classList.add("msg-style");
  pre.innerHTML = message;
  result.appendChild(pre);
}
function writeGeoTag(message) {
  const pre = document.createElement("a");
  pre.innerHTML =
    '<a href="' + message + ' "target="_blank">' + "My Geo Tag" + "</a>";
  pre.classList.add("geo-link");
  pre.classList.add("msg-style");
  result.appendChild(pre);
}
//кнопка подключения
btnConnect.addEventListener("click", () => {
  ws = new WebSocket(wsUrl);
  ws.onopen = function (e) {
    writeToScreenResponse("Connected");
  };
  ws.onclose = function (e) {
    writeToScreenResponse("Disconnected");
  };
  ws.onmessage = function (e) {
    writeToScreenResponse(e.data);
  };
  ws.onerror = function (e) {
    writeToScreenResponse("Error: " + e.data);
  };
});
//кнопка отключения
btnDisconnect.addEventListener("click", () => {
  ws.close();
  ws = null;
});
//кнопка отправки сообщения
btnSend.addEventListener("click", () => {
  const message = document.querySelector("#msg").value;
  writeToScreen("Sending: " + message);
  ws.send(message);
});
//кнопка очистки чата
btnClear.addEventListener("click", () => {
  result.innerHTML = "";
});
//кнопка отправки геотега
btnGeo.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    writeGeoTag(
      `https://www.openstreetmap.org/#map=10/${coords.latitude}/${coords.longitude}`
    );
  });
});

