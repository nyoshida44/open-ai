import express from "express";
import 'dotenv/config';
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

  let prompt = req.body.prompt;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  async function generate() {
    const response = await openai.createCompletion("text-davinci-002", {
      prompt: `You: ${prompt}`,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    })
    let promptMessage = JSON.parse(response.config.data);
    res.status(200).json({ prompt: promptMessage.prompt, result: response.data.choices[0].text });
  }
  generate();
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});