document.registerElement('felds-accordion', class extends HTMLElement {
  createdCallback() {
    this.nextZIndex = 1

    this._onMouseIn = this._onMouseIn.bind(this)

    this.addEventListener('mouseover', this._onMouseIn)
    this.addEventListener('touchstart', this._onMouseIn)
    this.addEventListener('mouseout', this._onMouseOut)
  }

  _onMouseIn(e) {
    this.mapNodes(n => {
      const isInPath = e.path.indexOf(n) > -1
      if (isInPath) {
        n.setAttribute('open', true)
        n.style.zIndex = this.nextZIndex++
      } else {
        n.removeAttribute('open')
      }
    })
  }

  _onMouseOut(e) {
    this.mapNodes(n => n.removeAttribute('open'))
  }

  mapNodes(f) {
    const nodes = document.evaluate('*/*', this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE)
    for (let i = 0; i < nodes.snapshotLength; i++) f(nodes.snapshotItem(i))
  }
})
