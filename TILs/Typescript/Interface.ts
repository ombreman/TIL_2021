// Interface

interface House_A {
  kitchen : string,
  floor : number
}

interface House_B {
  ktichen : string,
  floor : number,
  size : number
}

// is the same as below

interface House_A {
  kitchen : string,
  floor : number
}

interface House_B extends House_A {
  size : number
}

// for example

let A : House_A = { kitchen : 'no' }
let B : House_B = { kitchen : 'yes', floor : 20, size : 300}

// why error???