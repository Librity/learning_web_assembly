// wat2wasm -v math.wat && node index.js

import fs from "fs";

const rawMathWASM = fs.readFileSync("./math.wasm");
console.log(rawMathWASM);

const MathWASM = await WebAssembly.instantiate(
  new Uint8Array(rawMathWASM)
).then((res) => res.instance.exports);
console.log(MathWASM);

console.log(MathWASM.square(10));
console.log(MathWASM.square(50));
