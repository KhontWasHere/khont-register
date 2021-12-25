const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Yetkili Menüm!')
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)
    .addField('-yardım', 'yardım menüsü', true)

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};
