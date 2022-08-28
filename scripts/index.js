const main = () => {
  const audioElement = new Audio('media/educon.mp3')
  audioElement.play()
  let background = [128, 128, 128]
  let delta = 100
  setInterval(() => {
    background = background.map((bit) => Math.min(Math.max(bit + ((Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * delta)), 0), 255))
    const [r, g, b] = background
    document.getElementById('bkgd').style.backgroundColor = `rgb(${r},${g},${b})`
  }, 100)
  const mainEle = document.getElementById("main")
  mainEle.className = "card"
  mainEle.removeEventListener('click', main)
}
document.getElementById("main").addEventListener('click', main)
