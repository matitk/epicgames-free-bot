import 'dotenv/config'
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN
const telegramAPIURL = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`

export default async function sendMessage (text) {
  const msg = {
    chat_id: '@matitk_epicgames_free',
    parse_mode: 'HTML',
    text
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(msg)
  }
  const res = await fetch(telegramAPIURL, options)
  if (!res.ok) throw new Error('Fetch telegram API failed')
  console.log(await res.json())
}
