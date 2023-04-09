

  function busca_usuario() {
    var dados = [];
    dados.push(40);
     dados.push(60);
   return dados;
  }
  function busca_treinamento() {
 var dados=[];
    fetch('https://177.124.177.223:81/Usuario/Todos')
    .then(response => response.json())
.then(data => {
  const quantidadeDados = data.length;
  const paragrafo = document.querySelector('h4');
  paragrafo.innerHTML = `${quantidadeDados}`;
    let contadorZero = 0;
    let contadorUm = 0;
    for (let i = 0; i < data.length; i++) {
          if (data[i].mao_utilizada === 0) {
            contadorZero++;
          } else if (data[i].mao_utilizada === 1) {
            contadorUm++;
          }
        }

       dados.push(contadorZero);
        dados.push(contadorUm);
        console.log(dados);
})

.catch(error => console.error(error));
return dados;
  }
