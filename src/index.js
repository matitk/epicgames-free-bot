import scrape from '../scraper/epicgames.js'
import sendMessage from '../telegram/send_message.js'

export default {
  async scheduled (controller, env, ctx) {
    const games = await scrape(env.API_URL)
    const fmtGames = games.map(el => {
      return `<b>${el.title}</b>\n${el.description}\n\n${el.url}\n\n<i>Until ${el.date.end_date.toDateString()}</i>`
    })
    fmtGames.forEach(el => {
      sendMessage(el, env.TELEGRAM_BOT_TOKEN, env.CHAT_ID)
    })
  }
}
