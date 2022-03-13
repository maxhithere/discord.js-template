
const Event = require("../Structures/Event.js");
const mongoose = require("mongoose")
const testSchema = require('../Data/test-schema.js')
const { DBURL } = require('../Data/config.json')
const User = require('../Commands/schemas/User.js')

module.exports = new Event("ready", (client) => {

      if(!DBURL) return;
      
      mongoose.connect(DBURL, {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        

      }).then(() => {

        console.log("Hazed Is Now Connected To DB!")

        

      }).catch((err) => {
        console.log(err);
        console.log(mongoose.connections[0].readyState);
      })
      setTimeout(async () => {

        await new testSchema({

          message: 'wassup'

        }).save()

      }, 1000)


     // const users = User.find();
     // for (let user of users) {
     // client.userSettings.set(user.Id, user);
    //  }
    
      // require the premium handler
    //  require("../Structures/premuim")(client);

   
    
      client.user.setActivity(`;help | ${client.guilds.cache.size} servers`, { type: 'WATCHING' });
      //console.log(client.guilds.cache)


     
    })


   




