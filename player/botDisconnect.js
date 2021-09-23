module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musik di stop karena aku di disconnect !`);
};