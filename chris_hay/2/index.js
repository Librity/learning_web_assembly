// wat2wasm math.wat && node index.js

import fs from "fs";

const rawMathWASM = fs.readFileSync("./math.wasm");
console.log(rawMathWASM);

const MathWASM = await WebAssembly.instantiate(
  new Uint8Array(rawMathWASM)
).then((res) => res.instance.exports);
console.log(MathWASM);

console.log(MathWASM.return20());
console.log(MathWASM.return50());
console.log(MathWASM.echo(42));
console.log(MathWASM.square(42));

console.log(MathWASM.add(42, 89));
console.log(MathWASM.multiply(4, 5));
console.log(MathWASM.subtract(4, 5));
console.log(MathWASM.divide(10, 3));
