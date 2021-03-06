import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
/*
const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ | πΏπππ-πΏπππ ππππ`,
rows: [
{title: "π πππ£πͺ ππ§ππ£πππ₯ππ‘ |  πΏππ¨πππ€ππ§π ποΈ", description: null, rowId: `${usedPrefix}menu`},
{title: "ποΈ πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ π", description: null, rowId: `${usedPrefix}allmenu`},
{title: "π πππ‘π€πππππ | πππ£π π", description: null, rowId: `${usedPrefix}ping`}, 
{title: "πΈ πΌππ©πͺππ‘ππ―ππ§ | ππ₯πππ©π πΈ", description: "πΌπΎπππΌππππΌπ πΌ ππΌ ππππππΌ πππππππ\nπππΏπΌππ ππ πππ ππΌππππ πππππππ", rowId: `${usedPrefix}update`},
{title: "πΈ ππππ£πππππ§ | πππ¨π©ππ§π© πΈ", description: "ππππππΎππΌπ ππΌ πππππππΌπ\nπππππΌππ πππ πππππππΌπ", rowId: `${usedPrefix}reiniciar`},
{title: "πΈ π½π€π§π§ππ§π©π’π₯ | πΎπ‘πππ§π©π’π₯ πΈ", description: "π½ππππΌπ πΌππΎπππππ πΏπ πΎππππππ\nπΏπππππ πΎππππππππππ πππππ", rowId: `${usedPrefix}clear`},
{title: "πΈ π½ππ£πππ§ πΎπππ© | π½ππ£ πΎπππ© πΈ", description: "ππππππ πππ πΏπ π‘πππ’ππ’π§-ππΏ ππ πΎππΌππ\nπ½πππΌππ πππππ π‘πππ’ππ’π§-ππΏ ππ πΎππΌππ", rowId: `${usedPrefix}ban1`},   
{title: "πΈ πΏππ¨πππ£πππ§ πΎπππ© | ππ£πππ£ πΎπππ© πΈ", description: "πππΌπππΏπΌπ πππ πΏπ π‘πππ’ππ’π§-π π ππ πΎππΌπ\nππππππ πππ ππ ππΌππΌπ½ππ-ππΏ ππ πΎππΌπ", rowId: `${usedPrefix}}desban1`},    
{title: "πΈ πΎπ€π’πͺπ£πππππ€ πππ£ππ§ππ‘ | π½π§π€πππππ¨π© πΌπ‘π‘ πΈ", description: "πππππΌπ ππ πΌππππΎππ πΌ πππΏππ\nππππΏ πΌπ πΌπΏ ππ ππππππππ", rowId: `${usedPrefix}bc`}, 
{title: "πΈ πΎπ€π’πͺπ£πππππ€ π ππ§ππ«πππ€ | π½π§π€πππππ¨π© ππ§ππ«ππ©π πΈ", description: "πππππΌπ ππ πΌππππΎππ πΌπ πππππΌπΏπ\nππππΏ πΌπ πΌπΏ ππ πππππΌππ πΎππΌππ", rowId: `${usedPrefix}comunicarpv`},  
{title: "πΈ πΎπ€π’πͺπ£πππππ€ π ππ§πͺπ₯π€π¨ | π½π§π€πππππ¨π© ππ§π€πͺπ₯π¨ πΈ", description: "πππππΌπ ππ πΌππππΎππ πΌ ππππππ\nππππΏ πΌπ πΌπΏ ππ ππππππ", rowId: `${usedPrefix}bcgc`},  
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
π Β‘ππππ | ππ! ${username}
β­βγ πππππππππππ | ππππ ππππ γββ¬£
βββββββββββββββββββ
βπΈβΊ ${usedPrefix}actualizar | update
βπΈβΊ ${usedPrefix}reiniciar | restart
βπΈβΊ ${usedPrefix}borrartmp | cleartmp
βπΈβΊ ${usedPrefix}ban1 | banchat1
βπΈβΊ ${usedPrefix}desban1 | unbanchat1
βπΈβΊ ${usedPrefix}comunicar | broadcastall | bc
βπΈβΊ ${usedPrefix}comunicarpv | broadcastchats | bcc
βπΈβΊ ${usedPrefix}comunicargrupos | broadcastgc
βπΈβΊ ${usedPrefix}bcgc
β°ββββββββββββββββββββ¬£`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/Sofianayeli/NEKOBOT-MD', 'ππ’π¬π’π―π’ππͺπ―π°πππ-ππ', null, null, [
['ππππ ππππππππ π² | ππππ ππππ π²', '.allmenu'],
['ππππ πππππππππππ πΈ | ππππ ππππ πΈ', '/menulista'],
['ππππ πππππππππ βοΈ | ππππ ππππ βοΈ', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(ownermenu)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
