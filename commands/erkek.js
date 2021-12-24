const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(arwww => message.member.roles.cache.has(arwww)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.no} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
  
    const etiketlenen = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenen) return message.channel.send(`${ayarlar.noemoji} **Kaydetmek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.noemoji)))
  
const isim = args[1];
const yaş = args[2];
if(!isim) return message.channel.send(`${ayarlar.noemoji} **Kaydetmek için bir isim belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.noemoji)))
if(!yaş) return message.channel.send(`${ayarlar.noemoji} **Kaydetmek için bir yaş belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.noemoji)))
if(isNaN(yaş)) return message.channel.send(`${ayarlar.noemoji} **Belirttiğin yaş rakamlardan oluşmalı!**`).then(message.react(client.emojis.cache.get(ayarlar.noemoji)))
  
etiketlenen.roles.add(ayarlar.erkekRol1)
etiketlenen.roles.add(ayarlar.erkekRol2)
etiketlenen.roles.remove(ayarlar.kayıtsızRol)
etiketlenen.setNickname(`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}`)

message.react(ayarlar.yes)

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Kullanıcının ismi \`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}\` olarak değiştirildi       
<a:krkr:921679287227134003> Erkek rolleri verildi! Yetkiliye +1 Teyit puanı daha Yazıldı!`)
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})) //Youtube Matthe
.setTimestamp()

message.channel.send(arwEmbed)

db.push(`isimler.${etiketlenen.id}`, {
İsim: isim,
Yaş: yaş,
Yetkili: message.author.id
})

db.add(`erkekTeyit.${message.member.id}`, `1`)
db.add(`toplamTeyit.${message.member.id}`, `1`)

client.channels.cache.get(ayarlar.chat).send(`<a:krkr:921679287227134003> ${etiketlenen} **kaydolarak sunucuya giriş yaptı hoşgeldin.** <#921771656500899921> **Kanalından Rollerini Alabilirsin!**`)
  
}
exports.config = {
    name: "erkek",
    guildOnly: true,
    aliases: ["e", "male"]
}
