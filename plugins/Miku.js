let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImage(m.chat, 'https://telegra.ph/file/f61a7c96f3f86b6c5214f.png', m,)
}

handler.customPrefix = /^(nakano|miku)$/i
handler.command = new RegExp