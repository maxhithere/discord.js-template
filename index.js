/** @format */


const Client = require("./Structures/Client.js");



const config = require("./Data/config.json");



const client = new Client()


//client.on("guildBanRemove", ban => {
   
  //  ban.guild.members.ban(ban.user.id, {reason: ban.reason})
  //  });





client.start(config.token);





