const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(arwww => message.member.roles.cache.has(arwww)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${ayarlar.no} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenen = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenen) return message.channel.send(`${ayarlar.no} **İsim değiştirmek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const isim = args[1];
const yaş = args[2];
if(!isim) return message.channel.send(`${ayarlar.no} **İsim değiştirmek için bir isim belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
if(!yaş) return message.channel.send(`${ayarlar.no} **İsim değiştirmek için için bir yaş belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
if(isNaN(yaş)) return message.channel.send(`${ayarlar.no} **Belirttiğin yaş rakamlardan oluşmalı!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

etiketlenen.setNickname(`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}`)

message.react(ayarlar.yes)

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Kullanıcının ismi \`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}\` olarak değiştirildi!`)//Youtube Matthe
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(arwEmbed)

db.push(`isimler.${etiketlenen.id}`, {
İsim: isim,
Yaş: yaş,
Yetkili: message.author.id
})

}
exports.config = {
    name: "isim",
    guildOnly: true,
    aliases: ["i", "nick
