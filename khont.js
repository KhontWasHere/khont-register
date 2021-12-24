const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const db = require("quick.db")
const chalk = require("chalk")///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 
require('./util/Loader.js')(client)///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd ///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})
///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 
///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 
///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 

client.on('message', msg => {
  if (msg.content === '.tag') {
    msg.channel.send(`${ayarlar.tag}`);
  }
});

client.on('message', msg => {
  if (msg.content === 'tag') {
    msg.channel.send(`${ayarlar.tag}`);
  }
});

client.on('message', msg => {
  if (msg.content === 'TAG') {
    msg.channel.send(`${ayarlar.tag}`);
  }
});



client.on("guildMemberAdd", member => {
  var userSize = member.guild.members.cache.size.toString().replace(/ /g, "    ")
  var uS = userSize.match(/([0-9])/g)
  userSize = userSize.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(uS) {
    userSize = userSize.replace(/([0-9])/g, o => {
      return {
        '0': "<a:sifir:921830098393518080>",
        '1': "<a:bir:921828914303762532>",
        '2': "<a:iki:921828958218117200>",
        '3': "<a:uc:921828996516307005>",
        '4': "<a:dort:921829037893103707>",
        '5': "<a:bes:921829079425122314>",
        '6': "<a:alti:921829109842194542>",
        '7': "<a:yedi:921829137914667078>",
        '8': "<a:sekiz:921829197830291496>",
        '9': "<a:dokuz:921829234786312262>"}[o];})
      }
  require("moment-duration-format")
  let replies = ["https://media.discordapp.net/attachments/697505578972348436/806507415268622376/17.gif","https://media.discordapp.net/attachments/697505578972348436/801486319032205382/81f4a429035e1c8faec2078257a2eb7f.gif","https://media.discordapp.net/attachments/697505578972348436/806475926120300575/adf7d5b4c4df14d3638dfa07ba8c62fd.gif","https://media.discordapp.net/attachments/697505578972348436/803617905765777438/72f4b75d0d2a7d2314c25d3a5d687164.gif","https://media.discordapp.net/attachments/697505578972348436/807894209339195402/EL_HERUE_OSCURO.gif","https://media.discordapp.net/attachments/697505578972348436/807894365330472960/You_like_it_when_I_am_Crazy_Kurumi_x_Male_Reader.gif","https://media.discordapp.net/attachments/697505578972348436/807894194143494144/FOREVER_SAILOR_MOON.gif","https://media.discordapp.net/attachments/697505578972348436/807892907927273522/eacadb211638f1552be1a8c17d4680b0-1.gif"];
  let result = Math.floor((Math.random() * replies.length));
  const reynemb = new Discord.MessageEmbed().setAuthor(client.username , "https://cdn.discordapp.com/avatars/760162970793410580/a_5f61b759f6e083abceda9b52f49af521.gif?size=128").setFooter("Durum")
  let reyn = client.users.cache.get(member.id);
  let zaman = new Date().getTime() - reyn.createdAt.getTime();  
  const HGzaman = moment.duration(zaman).format(` YY **[Yıl]** MM **[Ay]** DD **[Gün]**`)
  const kanal = member.guild.channels.cache.find(r => r.id === "kayıt kanal");
  const sKanal = member.guild.channels.cache.find(r => r.id === "Sohbet Kanal İd");
  var kontrol;
  if(member.user.username.includes("TAG")){member.roles.add("Tag Rol")}
  moment.locale("tr");
  if (zaman < 1296000000){
    kontrol = `Güvenli Değilsin.`
    member.roles.add("Şüptheli Hesap Rol İd")
    member.setNickname("Yeni Hesap")
    sKanal.send(`<a:immoetiket:923249751812603934> **__ İmmortal'a hoş geldin__** <@`+ member + `> \n\n   <a:immoetiket:923249751812603934> Hesabın \`` + HGzaman + `\` önce oluşturulmuş. Bence **\`` + kontrol + `\`**\n\n <a:immoetiket:923249751812603934>   Sunucu kurallarımız <#921443100772151440> kanalında bulunmaktadır. Sunucu içerisindeki cezai işlemlerin kuralları okuduğun varsayılarak gerçekleştirilecektir.\n\n <a:immoetiket:923249751812603934> Seninle beraber `+userSize+ ` kişiye ulaştık. Maalesef. Hesabın yeni olduğu için kayıt olamıyorsun bir **yetkiliyle iletişime geç.**`).catch(err => console.error(err));
  }else{
    kontrol = `Güvenlisin.`
    member.roles.add("Kayıtsız Rol");
    member.roles.add("İkinci Kayıtsız ROl Yoksa boş bırak!");
    member.setNickname("İsim | Yaş!") 
    kanal.send(`<a:immoetiket:923249751812603934> **__ İmmortal'a hoş geldin__** <@`+ member + `> \n\n   <a:immoetiket:923249751812603934> Hesabın \`` + HGzaman + `\` önce oluşturulmuş. Bence **\`` + kontrol + `\`**\n\n <a:immoetiket:923249751812603934>   Sunucu kurallarımız <#921443100772151440> kanalında bulunmaktadır. Sunucu içerisindeki cezai işlemlerin kuralları okuduğun varsayılarak gerçekleştirilecektir.\n\n <a:immoetiket:923249751812603934> Seninle beraber `+userSize+ ` kişiye ulaştık. Sol tarafta bulunan \`V.Confirmed\` kanallarından birine girerek kayıt işlemini gerçekleştirebilirsin! İyi eğlenceler.`).catch(err => console.error(err));
  }
}); ///discord.gg/immortalxd
///discord.gg/immortalxd Benim Sunucum!
///discord.gg/immortalxd 
   

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });

client.login(ayarlar.token)
