const coin = {
    state:0,

    flip: function(){
        this.state  = Math.floor(Math.random() * 2)
    },

    toString: function(){
        if(this.state === 0){
            return "Heads"
        }
        return "Tails"
    },

    toHTML: function(number){
        const image = document.createElement("img");
        if(number === 0){
            image.src = "coinObject/img/cara.png"
        }else{
            image.src = "coinObject/img/coroa.png"
        }
        image.alt = "Heads/Tails"
        image.classList.add('moeda-imagem')
        return image
    }

}

function retorna20Moedas(){
    let array = []
    for(let i = 0; i < 20; i++){
        coin.flip()
        array.push(coin.state)
    }
    return array
}

const tela = document.getElementById('result');
function display20Flips() {

    // Use um loop para arremessar a moeda 20 vezes.
    const results = retorna20Moedas();
    tela.innerHTML = ""
    
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    const paragrafo = document.createElement('p')
    for(let x = 0; x < results.length; x++){
        let texto = ''
        if(results[x] === 0){
            texto = `moeda ${x+1} : Heads`
        }else{
            texto = `moeda ${x+1} : Tails`
        }
        
        let moeda = document.createElement('span')
        moeda.innerText = texto
        moeda.classList.add('moeda-texto')
        paragrafo.appendChild(moeda)
    }
    tela.appendChild(paragrafo)

    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    return results

}
  
function display20Images() {
    // Use um loop para arremessar a moeda 20 vezes.
    const results = retorna20Moedas();
    tela.innerHTML = ""
    
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    const paragrafo = document.createElement('p')
    for(let x = 0; x < results.length; x++){
        let texto = ''
        if(results[x] === 0){
            imagem = coin.toHTML(results[x])
        }else{
            imagem = coin.toHTML(results[x])
        }
        paragrafo.appendChild(imagem)
    }
    tela.appendChild(paragrafo)
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
    return results
}

const container = document.getElementById('container')
container.addEventListener("click", (e) => {
    
    if(e.target.id === "botao-jogar-texto"){
        display20Flips()
    }
    if(e.target.id === "botao-jogar-imagem"){
        display20Images()
    }
    
})

console.warn('Os botões não retornam o "results" no console, é necessario chamar as funções direto no console > display20Flips() ou display20Images()')