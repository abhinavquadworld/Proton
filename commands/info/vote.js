module.exports = {
    name: "vote",
    category: "info",
    description: "vote the bot :D",
    run: async (client, message, args) => {


      
        const { MessageEmbed } = require("discord.js")
    let op = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('Vote me on top.gg please')
    .setAuthor('made by <@735091895818125314> ')
    .setDescription(`vote fast and daily :D`)
    .setThumbnail('https://i.pinimg.com/originals/a9/e5/06/a9e506364ae6b6892e6a126a2f021206.gif')
    .setURL('https://top.gg/bot/765119548466135060')
    .setTimestamp()
    
 
    message.channel.send(op)
  }
};
