
const Event = require("../Structures/Event.js");
const mongoose = require("mongoose")
const { DBURL } = require('../Data/config.json')

module.exports = new Event("ready", (client) => {

      if(!DBURL) return;
      
      mongoose.connect(DBURL, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        

      }).then(() => {

        console.log("I Am Now Connected To DB!")

        

      }).catch((err) => {
        console.log(err);
        console.log(mongoose.connections[0].readyState);
      })
      setTimeout(async () => {

        await new testSchema({

          message: 'test'

        }).save()

      }, 1000)


    

   
    
      client.user.setActivity(`help | ${client.guilds.cache.size} servers`, { type: 'WATCHING' });



     
    })


   




