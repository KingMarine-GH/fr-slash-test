const Discord = require("discord.js"),
    client = new Discord.Client(),
    axios = require("axios").default.create({
        baseURL: "https://discord.com/api/v8",
        headers: {
            authorization: "Bot " + process.env.TOKEN
        }
    });

client.on("raw", ({ op, d: rawData, s: seq, t: eventName }) => {
    if (eventName === "INTERACTION_CREATE") {
        const slashData = rawData.data;
        switch (slashData.name) {
            case "ping": {
                break;
            }
            case "inrole": {
                axios.get("")
                break;
            }
        }
    }
});

client.login(process.env.TOKEN);