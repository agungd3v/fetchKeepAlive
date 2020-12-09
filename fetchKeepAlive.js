class fetchKeepAlive {
  constructor({ data, selector }) {
    this.data = data
    this.selector = selector
    this.pattern = /^((http|https):\/\/)/;
    this.show = true

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
    Object.assign(element.style, {
      width: "100%",
      height: "100%",
      position: "fixed",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0, 0, 0, 0.625)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    })
    let avaliableData = 0
    dt.forEach(data => {
      if (data.width <= window.innerWidth) {
        avaliableData++
        element.innerHTML += this.appendIn(data.image, data.width, data.height)
      }
    })
    if (avaliableData < 1) {
      element.remove()
    }
    element.querySelectorAll('button').forEach((e, i) => {
      const endIndex = 0
      e.addEventListener('click', function() {
        if (i === endIndex) element.remove()
        this.parentNode.parentNode.remove()
      })
    })
  }
  appendIn(src, width, height) {
    const styles = this.styleString(width, height)
    return `
      <div style="${styles.wrapper}">
        <div style="position: relative">
          <button style="${styles.close}">x</button>
          <img src="${src}" width="${width - 50}" height="${height - 50}"></img>
        </div>
      </div>
    `
  }
  styleString(w, h) {
    const wrapper = {
      "position": "absolute",
      "display": "flex",
      "justify-content": "center",
      "align-items": "center",
      "width": w + "px",
      "height": h + "px"
    }
    const close = {
      "position": "absolute",
      "top": "-20px",
      "right": "-20px",
      "width": w >= window.innerWidth ? w / 10 + "px" : "40px",
      "height": w >= window.innerWidth ? w / 10 + "px" : "40px",
      "border-radius": "100%",
      "outline": "none",
      "border": "none",
      "background-color": "gold",
      "font-size": w >= window.innerWidth ? w / 15 + "px" : "20px",
      "cursor": "pointer"
    }
    let styles = {
      wrapper: '',
      close: ''
    }
    for (let key in wrapper) { styles.wrapper += key + ": " + wrapper[key] + "; " }
    for (let key in close) { styles.close += key + ": " + close[key] + "; " }
    return styles
  }
}