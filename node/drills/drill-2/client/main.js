let button = document.getElementById('button')
let add = document.getElementById('append')

button.addEventListener('click', (e) => {
  add.innerText = ''
  fetch('http://localhost:3000')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item, i) => {
      let hele = document.createElement('h3')
      let step = i + 1
      hele.innerText = step + ": " + item.instructions
      add.append(hele)
    })
    button.style.display= "none"
  })
  .catch((err) => console.log(err))
})
