const locations = document.querySelectorAll(".time");

const updateTimes = function () {
  locations.forEach(location => {
  const output = location.querySelector("output")
  const timezone = location.getAttribute("data-timezone")

  const now = luxon.DateTime.now().setZone(timezone)

  output.innerHTML = now.toFormat("hh:mm:ss a")
  })
}

updateTimes()

setInterval(function () {
  updateTimes()
}, 1000)
