const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"

client.on("ready", () => {
    console.log(`${client.user.username} is online`)
    client.user.setActivity("$ is my prefix", {
        type: "STREAMING",
        url: "https://www.twitch.tv/charistn567"
    })
});

client.on("message", async message => {
    if(message.content.startsWith(`${prefix}ping`)) {
    const aA = await message.channel.send(`Pinging....`);

    aA.edit(`Pong!
    latency is ${Math.floor(aA.createdTimestamp - message.createdTimestamp)}ms
    Api Latency is ${Math.round(client.ping)}ms`);
    }
})

client.on("message", async message => {
    if(message.content.startsWith(`${prefix}hello`)) {
        message.channel.send(`Hello ${message.author.username}`)
    }
})

client.on("message", async message => {
    if(message.content.startsWith(`${prefix}how are you`)) {
        message.channel.send(`I'm fine thank you! And you?`)
    }
})

client.login("token")