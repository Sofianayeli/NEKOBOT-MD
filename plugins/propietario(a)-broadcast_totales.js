import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
conn.sendButton(id, `*ā­āā[ š¾šššššš¾š¼šæš | ššššš¾š ]āāāā¬£*\n*ā*\n*āš* ${text}\n*ā*\n*ā°āāāāāāāāāāāāāāāāāāā¬£*`, 'ā *š¾šššššš¾š¼šæš šššš¾šš¼š*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['š šš£šš¤ ššššššš”', '.cuentasnb'],['š® ššš£šŖ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'š”ššš¢šš¢š§-š š | š”š²šøš¼ šš¼š',
body: 'Super Bot WhatsApp', 
sourceUrl: `h`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ā *El mensaje fue enviado a ${chatsall.length} Chats Totales*\n*Es posible que no se haya enviado a todos los Chats Totales. Disculpe.*\n\nā *The message was sent to ${chatsall.length} Totals Chats*\n*May not have been sent to all Totals Chats. Excuse me.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.exp = 500
export default handler
