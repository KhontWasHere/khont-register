const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(arwww => message.member.roles.cache.has(arwww)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.noemoji} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenen = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenen) return message.channel.send(`${ayarlar.noemoji} **Tag rolü vermek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.noemoji)))

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

if(etiketlenen.roles.cache.has(ayarlar.tagRol)) return message.channel.send(arwEmbed.setDescription(`Kullanıcıdan başarıyla taglı <@&${ayarlar.tagRol}> rolü alındı!`)).then(etiketlenenKişi.roles.remove(ayarlar.tagRol))

etiketlenen.roles.add(ayarlar.tagRol)



message.channel.send(arwEmbed.setDescription(`Kullanıcıya başarıyla taglı rolü verildi!`))//Youtube Matthe
message.react(ayarlar.yes)
}
exports.config = {
    name: "tagges",
    guildOnly: true,
    aliases: ["tagrol", "taglırol", "taglirol"]
}
