class fetchKeepAlive {
  async get({ url }) {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      Promise.resolve(data).then(value => {
        console.log(value)
      }).catch(e => {
        console.error('Oops, something wrong from Promise please wait... ' + e)
      })
    }).catch(err => {
      console.error('Oops, ' + err)
    })
  }
}