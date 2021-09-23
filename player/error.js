module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Gak ada musik yang ke play di server ini !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Kamu belum masuk voice channel!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Aku gak bisa masuk voice channel kamu. coba cek permission channel !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} gak ada di tempat mu...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Sedang memulai... Mohon ditunggu!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Ada sesuatu kesalahan ... Error : ${error}`);
    };
};
