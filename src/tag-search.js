const discord = require("discord.js");
const { default: fetch } = require("node-fetch");
require("dotenv").config();
let tags = async (message) => {
  setTimeout(async () => {
    let query = message.content.split(" ");
    let url = `https://dev.to/api/articles?tag=${query[1]}`;
    let response = await fetch(url);
    const data = await response.json();
    if (response.status == 200) {
     
      try {
        message.channel.send(`Here you go Cheif!!📫, these are the top 3 blogs I found on DEV 👇🏻\n`);
        
        for (let i = 0; i <= 2; i++) {
          let random = Math.floor(Math.random() * data.length);
          const person = new discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(data[random].title)
            .setURL(data[random].url)
            .setAuthor(
              data[random].user.name,
              data[random].user.profile_image_90
            )
            .setDescription(data[random].description);
          message.channel.send(person);
        }
      } catch (err) {
        message.channel.send(
          `Sorry cheif 😅, there is no such tag!\nTo check out tags, head on to : https://dev-tags-website.shreyazz.repl.co/`
        );
        console.log("error occured in searching for tag");
      }
    } else {
      message.channel.send(
        `Sorry cheif 😅, there is no such tag!\nTo check out tags, head on to :`
      );
    }
  }, 770);
};

module.exports = tags;
