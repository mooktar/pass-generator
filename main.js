const form = document.querySelector('.form')
const len = document.querySelector('#pass-len')
const show = document.querySelector('#show-pass')
    
form.onsubmit = (e) => {
  e.preventDefault()
  let pass = Math.random().toString(36).substr(2, len.value)
  show.innerHTML = pass
  
  len.value = ''
  return false
}