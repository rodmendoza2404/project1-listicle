const header = document.querySelector('header')
if (header) {
  const wrap = document.createElement('div')
  wrap.className = 'container header-container'

  const left = document.createElement('div')
  left.className = 'header-left'
  const logo = document.createElement('img')
  logo.src = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300'
  logo.alt = 'Logo'
  const title = document.createElement('h3')
  title.textContent = 'Young Entrepreneur Tips'
  left.append(logo, title)

  const right = document.createElement('div')
  const homeBtn = document.createElement('a')
  homeBtn.href = '/'
  homeBtn.className = 'contrast outline'
  homeBtn.role = 'button'
  homeBtn.textContent = 'Home'
  right.append(homeBtn)

  wrap.append(left, right)
  header.append(wrap)
}
