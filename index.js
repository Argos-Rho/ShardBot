// Require Discord.js for content
// Require config.json for settings and configuration, gives security
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
console.log('Required Files Loaded.');

// Connect bot to a client.
const client = new Discord.Client();
client.commands = new Discord.Collection();
console.log('Connected to new discord client.');

// Use the Given filre service to search for a file called commands.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Say ready in console when bot is online and connected.
client.once('ready', () => {
	console.log('Ready!');
});

// Say pong to notify bot is online
client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	}
});

// require token to send all requests.
client.login(token);
