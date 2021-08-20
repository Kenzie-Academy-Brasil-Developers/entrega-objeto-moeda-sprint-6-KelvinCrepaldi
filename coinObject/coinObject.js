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

    toHTML: function(){
        const image = document.createElement("img");
        if(this.state === 0){
            image.src = "coinObject/img/cara.png"
        }else{
            image.src = "coinObject/img/coroa.png"
        }
        image.alt = "Heads/Tails"
        image.classList.add('moeda-imagem')
        return image
    }

}

const tela = document.getElementById('result');

// ================ Flip texto

function display20Flips() {
    const results = [];
    tela.innerHTML = ""
    
    const paragrafo = document.createElement('p')
    for(let x = 0; x < 20; x++){

        let texto = ''
        coin.flip()
        results.push(coin.toString())
        texto = `Moeda ${x+1}: ${coin.toString()}`

        let moeda = document.createElement('span')
        moeda.innerText = texto
        moeda.classList.add('moeda-texto')
        paragrafo.appendChild(moeda)

    }
    tela.appendChild(paragrafo)

    return results

}

// ================ Flip imagens
  
function display20Images() {
    const results = [];
    tela.innerHTML = ""
    
    const paragrafo = document.createElement('p')
    for(let x = 0; x < 20; x++){
        coin.flip()
        results.push(coin.toString())
        paragrafo.appendChild(coin.toHTML())
    }

    tela.appendChild(paragrafo)
    return results
}

// ================ botões

const container = document.getElementById('container')
container.addEventListener("click", (e) => {
    
    if(e.target.id === "botao-jogar-texto"){
        display20Flips()
    }
    if(e.target.id === "botao-jogar-imagem"){
        display20Images()
    }
    
})