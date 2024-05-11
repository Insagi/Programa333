const botoes = document.querySelectorAll(".botao");
console.log(botoes)

for(let j=0;j<botoes.length;j++){
    botoes[i].onclick = function(){
    
        const botoes = document.querySelectorAll(".botao");

        for(let i=0;i <botoes.length;i++){
            botoes[i].onclick = function(){
        
                for(let j=0;j<botoes.length;j++){
                    botoes[j].classList.remove("ativo");
                }
        
                botoes[i].classList.add("ativo");
            }
        }
        const botoes = document.querySelectorAll(".botao");

        for(let i=0;i <botoes.length;i++){
            botoes[i].onclick = function(){
        
                for(let j=0;j<botoes.length;j++){
                    botoes[j].classList.remove("ativo");
                }
        
                botoes[i].classList.add("ativo");
            }
        }
                

        botoes[i].classList.add("ativo");
    }
    
    botoes[j].classList.remove("ativo");
}
