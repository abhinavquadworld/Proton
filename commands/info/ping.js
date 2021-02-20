module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
// client.uptime is in millseconds
      // this is just maths, I won't explain much of it
      // % is modulo, AKA the remainder of a division
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      
        const { MessageEmbed } = require("discord.js")
    let embed = new MessageEmbed()
    .setColor(0x663399)
    .setTitle('Bots Latency')
    .setAuthor('made by .Abhinav#1630')
    .setDescription(`🏓 | Latency is: **${Date.now() - message.createdTimestamp}ms.** `)
    .setThumbnail('https://www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/img/menu/menu-realms.gif')
    //.setURL('https://discord.js.org/')
    .setTimestamp()
    .addFields(
		{ name: 'Hosted in ', value: '🇮🇳' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'uptime', value: `__Uptime:__\n${days}d ${hours}h ${minutes}m ${seconds}s`, inline: true },
		{ name: 'requested by  ', value: `${message.author}`, inline: true },
	)
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
 
    message.channel.send(embed)
  }
};
