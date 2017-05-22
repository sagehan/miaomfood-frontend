
const config = {
  apiServer: 'https://api.miaomfood.com',
  apiLocalServer: 'http://localhost:8080',
  apiVersion: 'v1',
}

function fetchCuisines () {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    let url = config.apiServer + '/api/' + config.apiVersion + '/cuisines'
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
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

function submitOrder (cartDatoms) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    let url = config.apiServer + '/api/' + config.apiVersion + '/orders'
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

function reviewOrder (orderNumber) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest() // eslint-disable-line no-undef
    let url = config.apiServer + '/api/' + config.apiVersion + '/orders/' + orderNumber
    xhr.open('GET', url)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()
    xhr.onreadystatechange = handler

    function handler () {
      if (xhr.status === 200) {
        var orderDetails = JSON.parse(this.responseText)
        resolve(orderDetails)
      } else {
        console.log('failure')
        reject(new Error(this.status))
      }
    }
  })
}

export {
  fetchCuisines,
  submitOrder,
  reviewOrder,
}
