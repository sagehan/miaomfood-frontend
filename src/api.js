import transit from 'transit-js'

var r = transit.reader('json')

const config = {
  apiServer: 'https://api.miaomfood.com',
  apiLocalServer: 'http://localhost:8080',
}

export function fetchCuisines () {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    let url = config.apiLocalServer + '/cuisines'
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'text'
    xhr.setRequestHeader('Accept', 'application/transit+json')
    xhr.send()

    function handler () {
      if (xhr.status === 200) {
        var cuisines = r.read(this.responseText)
        resolve(cuisines)
      } else {
        reject(new Error(this.status))
      }
    }
  })
}

export function sumbitOrder (cartDatoms, cb, errorCb) {
  setTimeout(() => {
    // simulate random checkout failure.
    (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
      ? cb()
      : errorCb()
  }, 100)
}
