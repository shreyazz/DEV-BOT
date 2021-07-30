const discord = require("discord.js");
const { response } = require("express");
const { default: fetch } = require("node-fetch");
const help = require("./help");
const profile = require("./profile-feature");
const tags = require("./tag-search");
const client = new discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`${client.user.tag} is Up and Ready 🔥`);
});


client.on("message", async (message) => {
  const devPattern = /-devprof/g;
  const devtag = /-devtag/g;
  const devhelp = /-devhelp/g;
  if(devhelp.test(message.content)){
    help(message);
  }
  else if (devPattern.test(message.content)) {
   profile(message);
  }
  else if (devtag.test(message.content)) {
      tags(message)
  }
  
});

try {
  client.login(process.env.TOKEN);
} catch (err) {
  console.log(`Error in Logging in the bot 🤖 Error is -> ${err}`);
}
