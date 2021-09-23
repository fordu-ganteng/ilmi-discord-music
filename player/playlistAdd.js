module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} sudah dimasukin ke playlist (**${playlist.tracks.length}** songs) !`);
};