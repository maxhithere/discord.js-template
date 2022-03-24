# discord.js-template

A simple template with permission handling to help get your bot started!

### Setting up

Go to `config.json` and replace the words with the stuff it tells you to do

You are now set up! Happy bot making

## Important

Make a folder called `src` and add all the folders into it

To actually make commands, make a folder called `Commands` inside src 

How to setup a command:

const Command = require('../Structures/Command')

`module.exports = {

    name: "cmd name",
    description: "cmd description",
    permission: "SEND_MESSAGES",  //you can put any permission you want here
    
    async run(client, message, args) {
    
        //put your code here
    
    
    }
    }
