import fs from 'fs'
import fetch from 'node-fetch'  
let handler = async (m, { conn, usedPrefix: _p, __dirname, usedPrefix, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let Poto = fs.readFileSync('./media/menu.jpg')
let tek = `▷ ᴅᴏɴᴀsɪ ʙɪsᴀ ᴍᴇʟᴀʟᴜɪ ◁
    「 Donasi • Pulsa 」
▪ *Indosat:* [085710677726]

    「 Donasi • Non Pulsa 」
▪ *Dana:* [0857 1067 7726]

Kalau Mau Pake Qr Bisa ke contact Owner kak☺️
wa.me/6285710677726

*sᴇᴍᴏɢᴀ ᴀɴᴅᴀ ᴅɪ ʙᴇʀɪᴋᴀɴ ᴋᴇᴍᴜᴅᴀʜᴀɴ ʀᴇᴢᴇᴋɪ ᴅᴀɴ ᴅɪ ʟɪᴘᴀᴛ ɢᴀɴᴅᴀᴋᴀɴ ʀᴇᴢᴇᴋɪ ᴀɴᴅᴀ*`

let cap = `Donasi Nya Kak ${tag} ☺️`
conn.send3ButtonImg(m.chat, Poto, cap, tek, 'Owner', '.owner', 'Sewa Bot', '.sewa', `\nOwner Bot Ganteng Banget`, '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/kabulsaputra21',
    mediaType: 2, 
    description: sgc,
    title: 'ᴅ ᴏ ɴ ᴀ ᴛ ᴇ',
    body: bottime,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: sig
}}
  })
}   
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i
handler.register = false

export default handler
