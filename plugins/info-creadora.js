import fs from 'fs'
function handler(m, { conn }) {
let text = `
*𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 | 𝘾𝙤𝙣𝙩𝙖𝙘𝙩* 
*Wa.me/50495086382 (NO BOT)*
*Wa.me/50498965677 (BOT)*
*Wa.me/525573031859 (NO BOT)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝘕𝘌𝘒𝘖𝘉𝘖𝘛-𝘔𝘋| 𝘌𝘙𝘐𝘒𝘈𝘉𝘖𝘛-𝘔𝘋',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫𝐚😎| 𝐂𝐫𝐞𝐚𝐭𝐨𝐫😎',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/50495086382`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*\n💜 *That's the contacts for you.*`

conn.sendHydrated(m.chat, str, wm, pp, '', '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', null, null, [
['🔮 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣 | 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣', '.infobot'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['📲 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩', '/menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
