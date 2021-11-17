class Pokemon {
  constructor(vida, velocidade, nome) {
    this.vida = vida;
    this.velocidade = velocidade;
    this.nome = nome;
  }
}

/* Planta */

class Planta extends Pokemon {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  RecebeDano(tipo, quantidade) {
    if (tipo === "fogo") {
      100 * 1.5;
      this.vida -= quantidade;
    }
  }
}

class Bulbasaur extends Planta {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Bulbasaur!");
  }
}

class Ivysaur extends Planta {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Ivysaur!");
  }
}

class Venusaur extends Planta {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Venusaur!");
  }
}

let BulbasaurPok = new Bulbasaur(100, "50 km/h", "Bulbasaur");
BulbasaurPok.RecebeDano("fogo", 70);
BulbasaurPok.Fala();
console.log(BulbasaurPok);

let IvysaurPok = new Ivysaur(150, "150 km/h", "Ivysaur");
IvysaurPok.RecebeDano("fogo", 80);
IvysaurPok.Fala();
console.log(IvysaurPok);

let VenusaurPok = new Venusaur(200, "200 km/h", "Venusaur");
VenusaurPok.RecebeDano("fogo", 90);
VenusaurPok.Fala();
console.log(VenusaurPok);

/* Fogo */
class Fogo extends Pokemon {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  RecebeDano(tipo, quantidade) {
    if (tipo === "agua") {
      100 * 1.5;
      this.vida -= quantidade;
    }
  }
}

class Charmander extends Fogo {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Charmander!");
  }
}

class Charmaleon extends Fogo {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Charmaleon!");
  }
}

class Charizard extends Fogo {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Charizard!");
  }
}

let CharmanderPok = new Charmander(50, "50 km/h", "Charmander");
CharmanderPok.RecebeDano("agua", 10);
CharmanderPok.Fala();
console.log(CharmanderPok);

let CharmaleonPok = new Charmaleon(100, "100 km/h", "Charmaleon");
CharmaleonPok.RecebeDano("agua", 20);
CharmaleonPok.Fala();
console.log(CharmaleonPok);

let CharizardPok = new Charizard(150, "150 km/h", "Charizard");
CharizardPok.RecebeDano("agua", 30);
CharizardPok.Fala();
console.log(CharizardPok);

/* Agua */

class Agua extends Pokemon {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  RecebeDano(tipo, quantidade) {
    if (tipo === "planta") {
      100 * 1.5;
      this.vida -= quantidade;
    }
  }
}

class Squirtle extends Agua {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Squirtle!");
  }
}

class Wartortle extends Agua {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Wartortle!");
  }
}

class Blastoise extends Agua {
  constructor(vida, velocidade, nome) {
    super(vida, velocidade, nome);
  }

  Fala() {
    console.log("Blastoise!");
  }
}

let SquirtlePok = new Squirtle(50, "50 km/h", "Squirtle");
SquirtlePok.RecebeDano("planta", 10);
SquirtlePok.Fala();
console.log(SquirtlePok);

let WartortlePok = new Wartortle(100, "100 km/h", "Wartortle");
WartortlePok.RecebeDano("planta", 20);
WartortlePok.Fala();
console.log(WartortlePok);

let BlastoisePok = new Blastoise(200, "200 km/h", "Blastoise");
BlastoisePok.RecebeDano("planta", 30);
BlastoisePok.Fala();
console.log(BlastoisePok);
