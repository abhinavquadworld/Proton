module.exports = {
    name: "serverinfo",
    category: "extras",
    description: "get information of current server :",
    run: async (client, message, args) => {


      
        const { MessageEmbed } = require("discord.js")
    let tupu = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('SERVER INFO xD')
    .setAuthor('made by .Abhinav#1630')
    .setDescription(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
    .setThumbnail('https://media.tenor.com/images/43f63fde032302c1049c992d95822438/tenor.gif')
    //.setURL('https://discord.js.org/')
    .setTimestamp()
    
 
    message.channel.send(tupu)
  }
};
