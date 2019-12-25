//Require Discord.js for content
//Require config.json for settings and configuration, gives security
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
//Connect bot to a client.
const client = new Discord.Client();

//Say ready in console when bot is online and connected.
client.once('ready', () => {
  console.log('Ready!');
});

//Repeat any message the bot sees to the console.
client.on('message', message => {
  console.log(message.content);
})

//require token to send all requests.
client.login(token);
