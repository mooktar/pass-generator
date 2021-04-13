const form = document.querySelector('.form')
const len = document.querySelector('#pass-len')
const show = document.querySelector('#show-pass')
    
form.onsubmit = (e) => {
  e.preventDefault()
  
  show.innerHTML = Math.random().toString(36).substr(2, (len.value || 8))
  
  len.value = ''
  return false
}