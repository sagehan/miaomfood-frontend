function hasClass (el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b' + className + '\\b').test(el.className)
}

function addClass (el, className) {
  if (el.classList) el.classList.add(className)
  else if (!hasClass(el, className)) el.className += ' ' + className
}

function removeClass (el, className) {
  if (el.classList) el.classList.remove(className)
  else el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '')
}

function addEvent (el, type, handler) {
  if (el.attachEvent) {
    el.attachEvent('on' + type, handler)
  } else {
    el.addEventListener(type, handler)
  }
}

function addStyle (el, styles) {
  for (var property in styles) {
    el.style[property] = styles[property]
  }
}

export {
  hasClass,
  addClass,
  removeClass,
  addEvent,
  addStyle,
}
