class fetchKeepAlive {
  constructor({ data, selector }) {
    this.data = data
    this.selector = selector
    this.pattern = /^((http|https):\/\/)/;

    if (this.data === undefined) return console.error('Oops, you forgot pass the data😱')
    if (!this.pattern.test(this.data)) return console.error('Oops, data must be from http or https😅')
    if (this.selector === undefined) return console.error(`Oops, please pass the element🙄`)
    if (typeof this.selector !== 'string') return console.error('Oops, give me element😱')
    if (this.selector.split('')[0] !== '#') return console.error('Oops, make sure this is id of element🧐')
    
    this.get(this.data)
  }
  async get(obj) {
    let make
    const uri = await fetch(obj)
    if (uri.status === 404) return console.error('Oops, maybe you typo pass the url ?🤔')
    if (uri.status === 500) return console.error('Oops, there may be a problem with your server🤐')
    if (uri.status === 200) make = await uri.json()
    this.make(make, this.selector)
  }
  make(dt, el) {
    const element = document.querySelector(el)
    if (element.tagName !== 'DIV') {
      return console.error('Oops, element must be <div>🙃')
    }
    dt.forEach(data => {
      element.innerHTML += this.appendIn(data.image, data.width, data.height)
    })
  }
  appendIn(src, width, height) {
    return `
      <img src="${src}" width="${width}" height="${height}"></img>
    `
  }
}