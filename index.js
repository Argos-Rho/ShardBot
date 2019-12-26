// Required files to start the program are delcared here.
const fs = require('fs');
const Discord = require('discord.js');
// eslint-disable-next-line no-unused-vars
const { prefix, token } = require('./config.json');
console.log('Dependencies Loaded.');

// Connect bot to discord
const client = new Discord.Client();
client.commands = new Discord.Collection();
console.log('Connecting to discord.');

// Use the file service to search for a folder called commands.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Allows any correctly formated and delcared commands to be loaded and requested anytime.
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Say ready in console when bot is online and connected.
client.once('ready', () => {
	console.log('Ready!');
});

// put something here later.
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;

	const command = client.command.get(commandName);

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// require token to send all requests.
client.login(token);
