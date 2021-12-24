const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Yetkililer İçin Yardım Menüm!')
    .addField('.isim', 'Kullanıcının İsmini Değiştirir!', true)
    .addField('.vip', 'Kullanıcıya VIP Rolü Verir!', true)
    .addField('.e', '@Etiketlenen Kişi İsim Yaş(Erkekler İçin)', true)
    .addField('.k', '@Etiketlenen Kişi İsim Yaş(Kadınlar İçin)', true)
    .addField('.taglı', 'Taglı Rolünü Vermek İçin Kullanabilirsiniz!', true)
    .addField('.kayıtsız', 'Kişiyi Kayıtsıza Atar!', true)
   

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
