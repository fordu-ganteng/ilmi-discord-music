module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Musik di stop karena tidak ada yang join voice channel !`);
};