
const config = {
  apiServer: 'https://api.miaomfood.com',
  apiLocalServer: 'http://localhost:8080',
  apiVersion: 'v1',
}

export function fetchCuisines () {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    let url = config.apiLocalServer + '/api/' + config.apiVersion + '/cuisines'
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
    // xhr.responseType = 'text'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()

    function handler () {
      if (xhr.status === 200) {
        var cuisines = JSON.parse(this.responseText)
        resolve(cuisines)
      } else {
        reject(new Error(this.status))
      }
    }
  })
}

export function submitOrder (cartDatoms) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    let url = config.apiLocalServer + '/api/' + config.apiVersion + '/orders'
    xhr.open('POST', url)
    xhr.setRequestHeader('Content-Type', 'application/transit+json')
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(cartDatoms)
    xhr.onreadystatechange = handler

    function handler () {
      if (xhr.status === 201) {
        var receipt = JSON.parse(this.responseText)
        resolve(receipt)
      } else {
        console.log('failure')
        reject(new Error(this.status))
      }
    }
  })
}
