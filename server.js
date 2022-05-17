import express from "express";
import { Configuration, OpenAIApi } from "openai";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();
const PORT = 8080; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render('index');
});

app.post("/generate", (req, res) => {
  console.log(req.body);
  res.json();
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });
  // const openai = new OpenAIApi(configuration);
  // const response = openai.createCompletion("text-davinci-002", {
  //   prompt: "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:",
  //   temperature: 0.5,
  //   max_tokens: 60,
  //   top_p: 1.0,
  //   frequency_penalty: 0.5,
  //   presence_penalty: 0.0,
  //   stop: ["You:"],
  // });
  // res.status(200).json({ result: response.data.choices[0].text });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});