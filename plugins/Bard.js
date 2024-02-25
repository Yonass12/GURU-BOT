import axios from 'axios';

let handler = async (m, { conn, text }) => {
    try {
        if (!text) throw 'معك الذكاء الاصطناعي الخاص بغوغل يمكنك ان تسألني ما تشاء مثال : \n\n*.ba من هو اول عربي بدأ في مجال بوتات الواتساب* ';

        

        // Make a GET request to the API
        const response = await axios.get(`https://aemt.me/bard?text=${text}`);

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
            // Extract the result from the response data
            const erka = response.data.status ? response.data.result : '_فشل جلب بيانات صالحة من واجهة برمجة التطبيقات._';

            // Example: Send the result as a reply
            //conn.reply(m.chat, eak, m);
            conn.sendMessage(m.chat, {
      text: erka,
      contextInfo: {
externalAdReply: {
title: "♤PRINCE-GDS♤",
thumbnailUrl: "https://i.imgur.com/CMxsGAu.jpeg",
sourceUrl: "https://www.instagram.com/mouhaobass12?igsh=MW8xbXB1ejR5YWdoMw==",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
        } else {
            throw '_*♧فشل ○جلب البيانات من API.♧_*';
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

handler.help = ["bardai"]
handler.tags = ["ai"]
handler.command = /^ba$/i

export default handler;
