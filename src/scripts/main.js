document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();

        let numeroMinimo = document.getElementById('numero-minimo').value;
        numeroMinimo = parseInt(numeroMinimo);

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        if (numeroMaximo <= numeroMinimo) {
            const erro = document.getElementById('erro-maximo-minimo');
            erro.style.display = 'block';
            erro.innerText = 'Valor mínimo precisa ser maior que o maximo';
        } else {
            document.querySelector('.resultado').style.display = 'block';
            document.getElementById('resultado-valor').innerText = randomInteger(numeroMinimo, numeroMaximo);
        }
        
    })
})

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }