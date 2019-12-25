const Discord = require('discord.js');
console.log('Require discord.js');
const client = new Discord.Client();
console.log('Connect to discord client');

client.once('ready', () =>{
  console.log('Ready!');
});

client.login('');
console.log('Token Accepted');
