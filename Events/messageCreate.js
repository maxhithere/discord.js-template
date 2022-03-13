const Event = require("../Structures/Event.js")
const Discord = require("discord.js")
const User = require('../Commands/schemas/User')
const db = require('../Commands/models/cmds')
const ccschema = require('../Commands/models/cc.js')
const cschema = require('../Commands/models/afkdb.js')
const { Collection } = require('discord.js')
module.exports = new Event("messageCreate", async (client, message) => {
	

    if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;
	if (message.content ===`<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
		return message.channel.send(
		  `Hello, You mentioned me! My prefix is \`;\`\n\nTo get a list of commands, type \`;help\``
		);
	  }

	const args = message.content.substring(client.prefix.length).split(/ +/);


	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return //message.reply(`${args[0]} is not a valid command!`);
	
	
	const embed3 = new Discord.MessageEmbed()
	.setColor("RED");
		embed3.setDescription((`<:errorx:916919739756978186> You do not have the permissions to run this command!`))


		const embed4 = new Discord.MessageEmbed()
	.setColor("RED");
		embed4.setDescription((`<:errorx:916919739756978186> I do not have the permissions to run this command!`))


    const permission = message.member.permissions.has(command.permission, true);
	const botpermission = message.guild.me.permissions.has(command.permission, true);
	if(!botpermission) return;
	if(!permission) return message.reply({ embeds: [embed3] });
	
	

   
	args.slice(0)

	const check = await db.findOne({ Guild: message.guild.id })
if (check) {
   if (check.Cmds.includes(command.name)) return message.reply("This command is disabled!")
   command.run(client, message, args)
} else {
	
		command.run(client, message, args)
}

	})
   
	








//const loggedInGuilds = client.guilds.cache.map(e => { return e.name; }).sort();