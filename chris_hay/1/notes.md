# [Chris Hay WASM Tutorials](https://www.youtube.com/playlist?list=PL5Dc_611BqV2NXJpSaOa1neQCwRLCGEIC)

## WABT: The WebAssembly Binary Toolkit

- https://github.com/WebAssembly/wabt

### Install

Install with package manager:

```bash
$ sudo apt-get install wabt
```

Or install manually:

```bash
$ sudo apt-get install cmake
$ git clone --recursive https://github.com/WebAssembly/wabt
$ cd wabt
$ mkdir build
$ cd build
$ cmake ..
$ make
```

### Assemble

```bash
$ wat2wasm -v math.wat && xxd math.wasm
```

### Disassemble

```bash
$ wasm2wat -v math.wasm -o math_disasembled.wat && cat math_disasembled.wat
```

### Run on the console

```bash
$ wat2wasm math.wat && node index.js
```

### Run on the browser

```bash
$ wat2wasm math.wat && cp math.wasm public && node server.js
```

Then open http://localhost:3000/math.html on your web browser.
