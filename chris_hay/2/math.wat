(module
  (func $return20 (result i32)
    ;; Push the number 20 to the top of the i32 stack.
    i32.const 20
  )
  (export "return20" (func $return20))


  (func $return50 (result i32)
    i32.const 50
  )
  (export "return50" (func $return50))


  (func $echo (param i32) (result i32)
    local.get 0
  )
  (export "echo" (func $echo))


  (func $square (param i32) (result i32)
    local.get 0
    local.get 0
    i32.mul
  )
  (export "square" (func $square))


  (func $add (param i32) (param i32) (result i32)
    local.get 0
    local.get 1
    i32.add
  )
  (export "add" (func $add))


  (func $multiply (param i32) (param i32) (result i32)
    local.get 0
    local.get 1
    i32.mul
  )
  (export "multiply" (func $multiply))


  (func $subtract (param i32) (param i32) (result i32)
    local.get 0
    local.get 1
    i32.sub
  )
  (export "subtract" (func $subtract))


  (func $divide (param i32) (param i32) (result i32)
    local.get 0
    local.get 1
    i32.div_s
  )
  (export "divide" (func $divide))
)
