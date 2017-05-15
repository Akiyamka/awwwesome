document.onmousemove = paralax

function paralax (event) {
  var backLayer = document.querySelector('.back.layer')
  var cursorRate = curPositionRate(event)

  var yRate = ((cursorRate.height - 50) / 100) * (-1)
  var xRate = (cursorRate.width - 50) / 100
  var weightRate = (Math.abs(xRate) + Math.abs(yRate)) * 10

  backLayer.style.transform = 'rotate3d(' + yRate + ',' + xRate + ',0, ' + weightRate + 'deg)'
}

function curPositionRate (event) {
  var size = blockSize('#app')
  var pos = mousePos(event)
  var width = Math.round((pos.x / size.x) * 100)
  var height = Math.round((pos.y / size.y) * 100)
  return { width: width, height: height }
}

function blockSize (selector) {
  var element = document.querySelector(selector)
  var info = element.getBoundingClientRect()
  // fix me: polyfill for ie8 width .offsetWidth and .offsetHeight
  return { x: info.width, y: info.height }
};

function mousePos (event) {
  var eventDoc, doc, body

  event = event || window.event // IE-ism

  // If pageX/Y aren't available and clientX/Y are,
  // calculate pageX/Y - logic taken from jQuery.
  // (This is to support old IE)
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document
    doc = eventDoc.documentElement
    body = eventDoc.body

    event.pageX = event.clientX +
      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
      (doc && doc.clientLeft || body && body.clientLeft || 0)
    event.pageY = event.clientY +
      (doc && doc.scrollTop || body && body.scrollTop || 0) -
      (doc && doc.clientTop || body && body.clientTop || 0)
  }

  // Use event.pageX / event.pageY here
  return {x: event.pageX, y: event.pageY}
};
