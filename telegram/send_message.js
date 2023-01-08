export default async function sendMessage (text, telegramToken, chatID) {
  const telegramAPIURL = `https://api.telegram.org/bot${telegramToken}/sendMessage`
  const msg = {
    chat_id: chatID,
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
