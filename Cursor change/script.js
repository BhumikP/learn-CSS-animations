const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (e) => {
  // cursor.style.left = e.offsetX + 'px'
  // cursor.style.top = e.offsetY + 'px'
  cursor.style.left = e.pageX + 'px'
  cursor.style.top = e.pageY + 'px'
})