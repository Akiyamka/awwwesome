document.onmousemove = paralax

function paralax (event) {
  // var container = document.querySelector('#hero')
  var backLayer = document.querySelector('.back.layer')
  var cursorRate = curPositionRate(event)
  // var rate = (cursorRate.width - 80) / 50
  var horRate = 1 / (cursorRate.height - 50)
  var verRate = 1 / (cursorRate.width - 50)
  console.log(horRate)
  // var rate2 = (cursorRate.height - 80) / 50
  backLayer.style.transform = 'rotate3d(' + horRate + ',0,' + verRate + ',10deg)'
  // container.style.perspectiveOrigin = cursorRate.width + '% ' + cursorRate.height + '%'
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
