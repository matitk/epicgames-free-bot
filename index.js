import scrape from './scraper/epicgames.js'
import sendMessage from './telegram/send_message.js'

async function main () {
  const games = await scrape()
  const fmtGames = games.map(el => {
    return `<b>${el.title}</b>\n${el.description}\n${el.url}\n<i>Until ${el.date.end_date.toDateString()}</i>`
  })
  fmtGames.forEach(el => {
    sendMessage(el)
  })
}

main()
