let lakers = {
    nome:"Lakers",
    pontos : [89, 120, 103, 100],
    media : function() {

        let soma = 0;

        for(let i = 0; i < this.pontos.length; i++){

            soma += this.pontos[i];
        }
        return  soma / this.pontos.length;
    }
}

let golden = {
    nome:"Golden",
    pontos : [97, 105, 110, 99],
    media : function() {

        let soma = 0;

        for(let i = 0; i < this.pontos.length; i++){

            soma += this.pontos[i];
        }
        return  soma / this.pontos.length;
    }
}

let cavalliers = {
    nome:"Cavalliers",
    pontos : [90, 117, 108, 89],
    media : function() {

        let soma = 0;

        for(let i = 0; i < this.pontos.length; i++){

            soma += this.pontos[i];
        }
        return  soma / this.pontos.length;
    }
}


let NBA = {
    times: [lakers, golden, cavalliers],
    quemEhVencedor: function() {

        let vencedor = this.times[0];
        for(let i = 1; i < this.times.length; i++) {
            if(vencedor.media() > this.times[i].media()) continue;
            vencedor = this.times[i];
        }
        return vencedor;
    }
}

console.log(lakers.media());
console.log(golden.media());
console.log(cavalliers.media());
console.log(NBA.quemEhVencedor());
