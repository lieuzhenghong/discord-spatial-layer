import Discord from 'discord.js';

const client = new Discord.Client();

client.once("ready", () => console.log('ready!'));

const printGuildMembers = guild => {
    guild.members.cache.each(mem => console.log(`${mem.displayName} (ID: ${mem.user.id})`));
}

// For some reason this `presenceUpdate` even isn't propogating to the client...
client.on("presenceUpdate", (_, presence) => {
    console.log("presence update received.");
    printGuildMembers(presence.guild)
});

client.on("message", msg => console.log(`msg received: ${msg.content}`));

client.login(process.env.DISCORD_TOKEN);
