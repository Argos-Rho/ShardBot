//Require Discord.js for content
//Require config.json for settings and configuration, gives security
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
console.log('Required Files Loaded.');

//Connect bot to a client.
const client = new Discord.Client();
console.log('Connected to new discord client.');

//Say ready in console when bot is online and connected.
client.once('ready', () => {
  console.log('Ready!');
});

//Say pong to notify bot is online
client.on('message', message => {
  if (message.content.startsWith(`${prefix}ping`)){
    message.channel.send('Pong.');
  }
});

//require token to send all requests.
client.login(token);
