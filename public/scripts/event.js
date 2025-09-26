async function renderTip () {
  const root = document.getElementById('event-content')
  if (!root) return

  const slug = window.location.pathname.split('/').pop()

  try {
    const res = await fetch('/events')
    const data = await res.json()
    const tip = (data || []).find(t => t.slug === slug)

    if (!tip) {
      window.location.href = '/public/404.html'
      return
    }

    document.title = tip.title
    document.getElementById('image').src = tip.image
    document.getElementById('name').textContent = tip.title
    document.getElementById('artists').textContent = `Category: ${tip.category}`
    document.getElementById('dateTime').textContent = `Key point: ${tip.keyPoint}`
    document.getElementById('venue').textContent = 'What to do:'

    const details = document.querySelector('.event-details')
    const ul = document.createElement('ul')
    ;(tip.actions || []).forEach(a => {
      const li = document.createElement('li')
      li.textContent = a
      ul.append(li)
    })
    details.append(ul)

    document.getElementById('genre').textContent = `Source: ${tip.sourceTitle}`
    const link = document.createElement('a')
    link.href = tip.sourceUrl
    link.textContent = 'Read the source'
    link.target = '_blank'
    details.append(link)
  } catch (e) {
    console.error(e)
    window.location.href = '/public/404.html'
  }
}

renderTip()
