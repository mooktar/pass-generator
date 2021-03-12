var form = document.querySelector('.form')
var num = document.querySelector('.passNum')
var show = document.querySelector('#show-pass')


function generatePass (e) {
  e.preventDefault()
  show.innerText = num.value
  num.value = ''
  return false
}


form.addEventListener('submit', generatePass)