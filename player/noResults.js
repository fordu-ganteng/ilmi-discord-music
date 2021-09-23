module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Sorry gak dapet lagunya ${query} !`);
};