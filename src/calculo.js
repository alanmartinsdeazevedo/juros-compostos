function calcularJurosCompostos(principal, taxa, tempo) {
    const juros = principal * (1 + taxa) ** tempo;
    return juros;
  }
  
  module.exports = { calcularJurosCompostos };