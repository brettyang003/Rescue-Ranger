const express = require("express");
const request = require("request");
const https = require("follow-redirects").https;
const fs = require("fs");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let options = {
  method: "POST",
  hostname: "api.estuary.tech",
  path: "/content/add",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    Authorization: "Bearer EST8b75a1f3-aeda-46e4-bfd2-fc985e418845ARY",
  },
  maxRedirects: 20,
};
const path = "./detections/detected.png";

async function uploadImage() {
  const req = https.request(options, (res) => {
    let chunks = [];

    res.on("data", (chunk) => {
      chunks.push(chunk);
    });

    res.on("end", (chunk) => {
      let body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", (error) => {
      console.error(error);
    });
  });

  let postData =
    '------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="data"; filename="file"\r\nContent-Type: "{Insert_File_Content_Type}"\r\n\r\n' +
    fs.readFileSync("./detections/detected.png") +
    '\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name="filename"\r\n\r\nfile\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--';

  req.setHeader(
    "content-type",
    "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
  );

  req.write(postData);

  req.end();
}
function upload() {
  var myHeaders = new fetch.Headers();
  myHeaders.append("Content-Type", "multipart/form-data");
  myHeaders.append("Accept", "application/json");

  var formdata = new fetch.FormData();
  formdata.append("data", "./detected.png", "file");
  formdata.append("filename", "file");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://api.estuary.tech/content/add", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

// request(options, function (error, response) {});

fs.watch("./detections", (eventType, fileName) => {
  if (fs.existsSync(`${path}`)) {
    uploadImage();
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
