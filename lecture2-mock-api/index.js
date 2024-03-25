const port = process.env.PORT || 3000;
const errorProbability = process.env.ERROR_PROBABILITY || 0.1;

const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const http = require("http");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname)));

function getJson(fileName, folder = "") {
  const jsonPath = folder
    ? `./jsons/${folder}/${fileName}.json`
    : `./jsons/${fileName}.json`;
  let res = null;
  try {
    res = fs.readFileSync(path.join(__dirname, jsonPath), "utf8");
  } catch (e) {
    res = null;
  }
  return res;
}

function sendAnswer(res, json) {
  if (!json) {
    send404Error(res);
  } else {
    setTimeout(() => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(json);
    }, 300);
  }
}

app.get("/api_frontend/blue", (req, res) => {
  const json = getJson("blue");
  sendAnswer(res, json);
});

app.get("/api_frontend/green", (req, res) => {
  const json = getJson("green");
  sendAnswer(res, json);
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log("listening on *:" + port);
  console.log("error probability: " + errorProbability);
});
