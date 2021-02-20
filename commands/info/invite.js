module.exports = {
    name: "invite",
    category: "info",
    description: "invite the bot to your server",
    run: async (client, message, args) => {


      
        const { MessageEmbed } = require("discord.js")
    let op = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('INVITE ME BY CLICKING ME')
    .setAuthor('made by .Abhinav#1630')
    .setDescription(`invite fast and tell your friends too......`)
    .setThumbnail('https://i.pinimg.com/originals/a9/e5/06/a9e506364ae6b6892e6a126a2f021206.gif')
    .setURL('https://abhinavquadworld.github.io/bots.html')
    .setTimestamp()
    
 
    message.channel.send(op)
  }
};
