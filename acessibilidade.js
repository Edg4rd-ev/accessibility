;(function () {
  const popupHTML = `
      <div id="acessibilidade-button" style="position: fixed; top: 10px; left: 10px; background: #4CAF50; color: white; padding: 10px; cursor: pointer; z-index: 10001;">
          ACESSIBILIDADE
      </div>
      <div id="acessibilidade-popup" style="display: none; position: fixed; top: 50px; left: 10px; background: #fff; padding: 20px; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0,0,0,0.1); z-index: 10000;">
          <button onclick="aumentarTexto()">Aumentar texto</button>
          <button onclick="diminuirTexto()">Diminuir texto</button>
          <button onclick="escalaDeCinza()">Escala de cinza</button>
          <button onclick="contrasteAlto()">Contraste alto</button>
          <button onclick="contrasteNegativo()">Contraste negativo</button>
          <button onclick="linksSublinhados()">Links com sublinhado</button>
          <button onclick="fonteLegivel()">Fonte legível</button>
          <button onclick="reiniciar()">Reiniciar</button>
      </div>
  `

  document.body.insertAdjacentHTML('beforeend', popupHTML)

  document
    .getElementById('acessibilidade-button')
    .addEventListener('click', function () {
      const popup = document.getElementById('acessibilidade-popup')
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none'
    })

  window.aumentarTexto = function () {
    document.body.style.fontSize = 'larger'
  }

  window.diminuirTexto = function () {
    document.body.style.fontSize = 'smaller'
  }

  window.escalaDeCinza = function () {
    document.body.style.filter = 'grayscale(100%)'
  }

  window.contrasteAlto = function () {
    document.body.style.filter = 'contrast(200%)'
  }

  window.contrasteNegativo = function () {
    document.body.style.filter = 'invert(100%)'
  }

  window.linksSublinhados = function () {
    document
      .querySelectorAll('a')
      .forEach(a => (a.style.textDecoration = 'underline'))
  }

  window.fonteLegivel = function () {
    document.body.style.fontFamily = 'Arial, sans-serif'
  }

  window.reiniciar = function () {
    document.body.style = ''
  }
})()
