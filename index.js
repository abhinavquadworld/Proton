const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const keepAlive = require('./server');

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    //client.user.setPresence({
        //status: "online",
        //game: {
          //  name: "wannacry.exe btw consider /ping ",
        //    type: "PLAYING"
       // }
    //}); 
})

// i tried
const activities_list = [
    " /help || sub2pewdipie", 
    "/help || Made By Abhinav",
    "/help || sub2pewdipie ", 
    "/help || subscribe on yt : korryisgaming"
    
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});











client.on("message", async message => {
    const prefix = "/";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

keepAlive();
client.login(process.env.TOKEN);

//anti spam

