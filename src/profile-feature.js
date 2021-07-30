const discord = require("discord.js");
const { default: fetch } = require("node-fetch");
require("dotenv").config();


let profile = async (message) => {
    let query = message.content.split(" ");
    query.shift();
    query.join(/(\t\n\r)/g);
  
    try {
      let url = `https://dev.to/api/articles?username=${query.join("")}`;
      let response = await fetch(url);
      const data = await response.json();
      console.log(response.status);
      
      const person = new discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle(data[0].title)
        .setURL(data[0].url)
        .setAuthor(data[0].user.name, data[0].user.profile_image_90)
        .setDescription(data[0].description)
        .setImage(data[0].cover_image)
        .setFooter(
          `Reading Time⌚ : ${data[0].reading_time_minutes}mins`,
          "https://i.ibb.co/DMTV1jK/dev-black.png"
        );
        message.channel.send(
          `Hey folks 👋🏻, \nNew blog is out! Do check it out 👇🏻`
        );
      message.channel.send(person);
    } catch (err) {
      message.channel.send("Sorry cheif 😅, there is no such username!");
      console.log(err);
    }
  }

module.exports = profile;