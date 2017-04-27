var dayTheme = window.localStorage.getItem('dayTheme')
if (dayTheme === 'no') {
  document.body.setAttribute('class', 'night-theme')
} else {
  document.body.setAttribute('class', 'day-theme')
}
var visitBefore = parseInt(window.localStorage.getItem('visitBefore'))
if (isNaN(visitBefore)) {
  visitBefore = 1
} else {
  visitBefore += 1
}
window.localStorage.setItem('visitBefore', visitBefore)
document.getElementById('visitBefore').innerHTML = 'number of visits' + visitBefore

function colorChange () {
  var dayTheme = window.localStorage.getItem('dayTheme')
  if (dayTheme === 'no') {
    window.localStorage.setItem('dayTheme', 'yes')
    document.body.setAttribute('class', 'day-theme')
  } else {
    window.localStorage.setItem('dayTheme', 'no')
    document.body.setAttribute('class', 'night-theme')
  }
}
document.getElementById('themes').addEventListener('click', colorChange)
