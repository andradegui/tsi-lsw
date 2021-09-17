//criar dado
let dado = {
    valor: 0,
    //roda o dado
    rodaDado:function(){
        this.valor = Math.floor(Math.random() * 6) + 1;
        this.imprimir();
    },
     //imprime na tela
    imprimir:function(){
        //vai no HTML e pega o valor com getElementById
        document.getElementById('dado-valor').innerText = this.valor;
    }
}

//cria jogador 1
let jogador1 = {
    id: 1,
    nome: "Jogador 1",
    pontosFixos: 0,
    pontosRodada: 0,
    zerarPontos: function(){
        this.pontosRodada = 0;
        this.imprimir();
    },
    atualizaDadosRodada: function(valor){
        this.pontosRodada += valor;
        this.imprimir();
    },
    pararJogo: function() {
        this.pontosFixos += this.pontosRodada;
        this.zerarPontos();
    },
    imprimir: function() {
        document.getElementById('jogador-1-fixos').innerText = this.pontosFixos;
        document.getElementById('jogador-1-rodada').innerText = this.pontosRodada;
    }
}

//cria jogador 2
let jogador2 = {
    id: 2,
    nome: "Jogador 2",
    pontosFixos: 0,
    pontosRodada: 0,
    zerarPontos: function(){
        this.pontosRodada = 0;
        this.imprimir();
    },
    atualizaDadosRodada: function(valor){
        this.pontosRodada += valor;
        this.imprimir();
    },
    pararJogo: function() {
        this.pontosFixos += this.pontosRodada;
        this.zerarPontos();
    },
    imprimir: function() {
        document.getElementById('jogador-2-fixos').innerText = this.pontosFixos;
        document.getElementById('jogador-2-rodada').innerText = this.pontosRodada;
    }
}

//criar PIG
let pig = {
    jogaODado: function(){
        //joga o dado
        dado.rodaDado();
        //verifica se o dado é 1
        if(dado.valor === 1){
            this.quemEhOJogadorAtual().zerarPontos();
            this.alteraJogador();
        }
        else{

            this.quemEhOJogadorAtual().atualizaDadosRodada(dado.valor);
        }        
    }, 
    jogadores:[jogador1, jogador2],
    ijogador: 0,
    alteraJogador: function() {
        if(this.ijogador === 0)
            this.ijogador = 1        
        else
            this.ijogador= 0
    }, 
    quemEhOJogadorAtual:function(){
        return this.jogadores[this.ijogador];
    },
    //parar
    parar:function(){
        this.quemEhOJogadorAtual().pararJogo();
        this.alteraJogador();
    }
    

}

