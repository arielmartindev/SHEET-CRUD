import { myData } from "../services/fetchData.js"

  // Array con todos los elementos
  const data = await myData()

  console.log(data)

  //Ivertir Orden del array para mostrar primero los ultimos
  data.reverse()

let time = data[0].timestamp

console.log(time)

const main = document.getElementById("main")

// LIMPIAR EL DIV
main.innerHTML = ``

data.forEach(item => {
    const article = document.createElement('article')
    article.className = 'thumb'

    article.innerHTML = `
    <a  href="${item.imagen}" class="image"
    style="background-image: url(${item.imagen}); cursor: pointer; outline: 0px;"
    ><img src="${item.imagen}" alt="" style="display: none"
    
    /></a>
    <h2>${item.nombre} - ${item.timestamp}</h2>
    <p>Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.</p>
  `

  main.appendChild(article)

})
