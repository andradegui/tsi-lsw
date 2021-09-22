let player1 = {
    escolhaPouI: "",
    numeroEscolhido: 0,
    imprimir:function(){
        document.getElementById('player1Dedos').innerText = this.numeroEscolhido;
       
    },
    buscaEscolhaPouI: function() {
        let select = document.getElementById('escolha');
        this.escolhaPouI = select.options[select.selectedIndex].value;
    },
    mostraNumero:function(){
        this.numeroEscolhido = Math.floor(Math.random() * 6);
        this.imprimir();
    }    
}

let player2 = {
    escolhaPouI: "",
    numeroEscolhido: 0,
    imprimir:function(){
        document.getElementById('player2Dedos').innerText = this.numeroEscolhido;
        
    },
    buscaEscolhaPouI: function() {
        if(player1.escolhaPouI == "Par") { 
            this.escolhaPouI = "Impar";
        }
        else {
            this.escolhaPouI = "Impar";
        }
    },
    mostraNumero:function(){
        this.numeroEscolhido = Math.floor(Math.random() * 6);
        this.imprimir();
    }   
}

let jogoParOuImpar = {
    jogar:function(){

        player1.buscaEscolhaPouI();
        player1.mostraNumero();

        player2.buscaEscolhaPouI();
        player2.mostraNumero();

        if((player1.mostraNumero + player2.mostraNumero) %2 == 0) {

            if(player1.escolhaPouI == "Par") {
                alert("Jogador 1 ganhou!")
            }
            else{
                alert("Jogador 2 ganhou!");
            }

        }
        else {
            if(player1.escolhaPouI == "Impar") {
                alert("Jogador 1 ganhou!");
            }
            else{
                alert("Jogador 2 ganhou!");
            }
        }
    }
    
}


