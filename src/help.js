const discord = require("discord.js");
const { default: fetch } = require("node-fetch");
require("dotenv").config();


let help = async (message) => {
   let helpDesc = '1.)  Use `-devtag <tag>` to search for the top 3 blogs on DEV.to for a particular topic. To see the various tags head on to :  https://dev-tags-website.shreyazz.repl.co/ \n2.)  `-devprof <username-on-dev>` to see the latest blog published by the user. ```NOTE: Not all the tags are on the website so, you can just type the topic you want for eg: typescript or rust...try your luck, if the tag does not exist, the bot will tell you!```';
   const helpMes = new discord.MessageEmbed()
   .setColor("#0099ff")
   .setTitle('DEV-BOT HELP')
   .addFields(
		{ name: '1.)', value: '  Use `-devtag <tag>` to search for the top 3 blogs on DEV.to for a particular topic. To see the various tags head on to :  https://dev-tags-website.shreyazz.repl.co/ ' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '2.) ', value: '`-devprof <username-on-dev>` to see the latest blog published by the user.', inline: true },
	)
   .setFooter(
     `Help Section`,
     "https://i.ibb.co/DMTV1jK/dev-black.png"
   )

   message.channel.send(helpMes);
}

module.exports = help;