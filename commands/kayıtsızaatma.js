const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.noemoji} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenen = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenen) return message.channel.send(`${ayarlar.noemoji} **Kayıtsıza atmak için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.noemoji)))

if(message.member.roles.highest.position <= etiketlenenKişi.roles.highest.position) return message.channel.send(`${ayarlar.noemoji} **Senden üstte/aynı pozisyonda bir kişiyi kayıtsıza atamazsın!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

etiketlenen.roles.set([ayarlar.kayıtsızRol])
etiketlenen.setNickname(`${ayarlar.tag} İsim ${ayarlar.sembol} Yaş`)

message.react(ayarlar.yes)

message.channel.send(arwEmbed.setDescription(` Kullanıcı başarıyla kayıtsıza (<@&${ayarlar.kayıtsızRol}>) atıldı!`))//Youtube Matthe

}
exports.config = {
    name: "kayıtsız",
    guildOnly: true,
    aliases: ["unregistered", "kayitsiz", "unreg", "unregister"]
}
