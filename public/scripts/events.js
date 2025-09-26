async function renderTips () {
  const main = document.getElementById('main-content')
  if (!main) return

  const grid = document.createElement('section')
  grid.className = 'grid'

  try {
    const res = await fetch('/events')
    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) {
      main.innerHTML = '<h2>No Tips Available </h2>'
      return
    }

    data.forEach(tip => {
      const card = document.createElement('article')
      card.className = 'card'

      const top = document.createElement('div')
      top.className = 'top-container'
      top.style.backgroundImage = `url(${tip.image})`

      const bottom = document.createElement('div')
      bottom.className = 'bottom-container'

      const h3 = document.createElement('h3')
      h3.textContent = tip.title
      const p1 = document.createElement('p')
      p1.textContent = tip.category
      const p2 = document.createElement('p')
      p2.textContent = tip.keyPoint

      const link = document.createElement('a')
      link.textContent = 'Read More >'
      link.href = `/events/${tip.slug}`
      link.setAttribute('role', 'button')

      bottom.append(h3, p1, p2, link)
      card.append(top, bottom)
      grid.append(card)
    })

    main.append(grid)
  } catch (e) {
    console.error(e)
    main.innerHTML = '<h2>Failed to load tips.</h2>'
  }
}

(function guardRoutes () {
  const path = window.location.pathname
  if (path === '/' || path === '') {
    renderTips()
  }
})()
