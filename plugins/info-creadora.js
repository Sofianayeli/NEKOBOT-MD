import fs from 'fs'
function handler(m, { conn }) {
let text = `
*๐พ๐ค๐ฃ๐ฉ๐๐๐ฉ๐ค | ๐พ๐ค๐ฃ๐ฉ๐๐๐ฉ* 
*Wa.me/50495086382 (NO BOT)*
*Wa.me/50498965677 (BOT)*
*Wa.me/525573031859 (NO BOT)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐๐๐๐๐๐-๐๐| ๐๐๐๐๐๐๐๐-๐๐',
body: '๐๐ซ๐๐๐๐จ๐ซ๐๐| ๐๐ซ๐๐๐ญ๐จ๐ซ๐',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/50495086382`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `๐งก *Eso son los contactos para ti.*\n๐ *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, '', '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', null, null, [
['๐ฎ ๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ | ๐๐ฃ๐๐ค๐ง๐ข๐๐ฉ๐๐ค๐ฃ', '.infobot'],
['๐ ๐ฟ๐ค๐ฃ๐๐ง | ๐ฟ๐ค๐ฃ๐๐ฉ๐', '.donar'],
['๐ฒ ๐๐ง ๐๐ก ๐๐ฃ๐๐๐๐ค | ๐๐ค ๐ฉ๐ค ๐จ๐ฉ๐๐ง๐ฉ', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueรฑo|dueรฑa|propietaria|dueรฑo|creadora|creador)$/i
export default handler
