export const funcaoGeradora = {
  gerar(qnt, total) {
    let loop = qnt;
    const numberGerados = [];
    while (loop) {
      let aleatorio = (Math.floor(Math.random() * total));
      while (numberGerados.includes(aleatorio) === true || aleatorio === 0) {
        aleatorio = (Math.floor(Math.random() * total));
      }
      if (numberGerados.indexOf(aleatorio) === -1 && aleatorio !== 0) {
        numberGerados.push(aleatorio);
      }
      loop -= 1;
    }
    return numberGerados.sort((a, b) => a - b).join('  ');
  },
};
