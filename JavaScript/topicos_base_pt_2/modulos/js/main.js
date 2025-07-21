/**
 * Apenas recursos(funcoes, objetos, valores) exportados podem ser importados em outro módulo.
 * Exportacoes podem ser explicitas(named exports) ou padrao(apenas uma exportacao por modulo).
 * Exportacoes padrao podem ser renomeadas quando forem importadas.
 *
 * Modulos sao strict mode por padrao.
 * - variaveis nao "vazam escopo" global.
 * - varias acoes "sensiveis" sao proibidas
 */

import { sum, round, exp } from "./numbers.js";
import Product from "./product.js";

const x = sum(3, 4);
console.log(x);

console.log(exp(3, 4));
console.log(round(3.23445, 2));

const obj = new Product("geladeira", 800, 10);
console.log(obj);
