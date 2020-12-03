class fetchKeepAlive {
  constructor({ msg }) {
    console.log(msg)
  }
  static get(msg) {
    return new fetchKeepAlive(msg)
  }
}