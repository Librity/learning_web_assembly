;; Assemble and hexdump.
;; wat2wasm -v math.wat && xxd math.wasm

;; Declare a module
(module

  ;; Declare the square function that receives and returns a 32-bit integer.
  (func $square (param i32) (result i32)
    ;; Push the first param to the top of the stack twice.
    local.get 0
    local.get 0
    ;; Multiply the first two numbers on top of the stack
    ;; then push the result to the top of the stack.
    i32.mul
    ;; Function automatically returns whatever is on top of the stack.
  )

  ;; Export the function so it can be used by JavaScript.
  (export "square" (func $square))

)
