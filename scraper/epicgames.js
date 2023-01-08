export default async function scrape (apiUrl) {
  const webURL = 'store.epicgames.com/p'
  const res = await fetch(apiUrl)
  if (!res.ok) throw new Error('Fetching Error')
  const json = await res.json()
  const rawGames = json.data.Catalog.searchStore.elements
  const games = []
  rawGames.map(el => {
    return games.push({
      title: el.title,
      description: el.description,
      url: `${webURL}/${el.catalogNs.mappings[0]?.pageSlug}`,
      date: {
        start_date: new Date(el.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.startDate),
        end_date: new Date(el.promotions?.promotionalOffers[0]?.promotionalOffers[0]?.endDate)
      }
    })
  })
  return games.filter(el => !isNaN(el.date.start_date.getTime()))
}
