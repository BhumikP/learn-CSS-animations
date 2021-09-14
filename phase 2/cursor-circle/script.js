const text = document.querySelector('.text')
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const element = document.querySelectorAll('span')

for(let i = 0; i< element.length; i++){
  element[i].style.transform = "rotate(" +i*19+"deg)"
}

document.addEventListener('mousemove', (e) => {
  text.style.top = e.pageY + 'px'
  text.style.left = e.pageX + 'px'
})