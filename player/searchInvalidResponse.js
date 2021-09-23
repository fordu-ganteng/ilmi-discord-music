module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Ini sudah di cancel **cancelled** !`);
    } else message.channel.send(`${client.emotes.error} - Pilih nomor antara **1** and **${tracks.length}** !`);
};