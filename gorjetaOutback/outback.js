function calculaConta (valorGorjeta) {
    return new Array(
        valorGorjeta * 0.10,
        valorGorjeta * 0.16,
        valorGorjeta * 0.18
    );
}

console.log('Valor da conta deu R$ 190', calculaConta(190));
