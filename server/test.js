import { ChatOpenAI } from "@langchain/openai"
import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser"

let messages = []
let chat

const model = new ChatOpenAI({
    temperature: 0.0,
    azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY,
    azureOpenAIApiVersion: process.env.OPENAI_API_VERSION,
    azureOpenAIApiInstanceName: process.env.INSTANCE_NAME,
    azureOpenAIApiDeploymentName: process.env.ENGINE_NAME,
})

async function plantAnswer(plantProblem) {

    fetch("https://api.weatherapi.com/v1/current.json?q=rotterdam&key=7cbed8cfabf0422c8de120835240803")

    const weatherInfo = await fetch("https://api.weatherapi.com/v1/current.json?q=rotterdam&key=7cbed8cfabf0422c8de120835240803");
    const weatherInfoText = await weatherInfo.text();

    let prompt = plantProblem

    if (messages.length > 0) {
        messages.push(
            ["ai", "they are beneficial to your health"], 
            ["human", prompt] 
        );
    } else {
        messages = [
            ["system", `you are a plant expert, you answer questions as helpful as you can, you must include the current weather to give more detailed advice on how it affects the plant in question: ${weatherInfoText}`],
            ["human", "What is the purpose of keeping plants?"], 
            ["ai", "they are beneficial to your health, today the sun shines bright so they will produce more oxygen!"], 
            ["human", prompt] 
        ];
    }
     
    chat = await model.invoke(messages);

    return chat.content;
}

var app = express();
app.use(cors());
app.use(bodyParser.json())

app.post('/plant', async function (req, res) {
    console.log(req.body.question)
    let plantProblem = req.body.question;
    let a = await plantAnswer(plantProblem)
    res.send(a);
});

app.listen(3000);