# plantChatter
This is a chatbot which can answer all your questions about your plants and will even use the weather report to see what a plant needs during that days weather.
Currently it only uses the current weather in Rotterdam, Netherlands so if you're from a different city/country the bot sadly won't be the one for you (yet).
it is currently only usable on pc

just enter your question into the input field, press the button and advice on how to care for your plant will be given back to you.

## Installing
To be able to use the chatbot you'll have to follow the following instructions:
```
npm init
npm install
npm install langchain
npm install @langchain/openai
```
The next step is to create an .env file, here you store your OpenAI key. your .env file should then be added to your .gitignore so you dont accidentally
post your key on your github repository.
After this you'll want to go to your package.json file to add in the following:
```
  "scripts": {
    "start": "node --env-file=.env test.js"
  },
```
Now you'll be able to run the server using this command:
```
npm start
```
now you'll be able to run your front end and enter your questions!
