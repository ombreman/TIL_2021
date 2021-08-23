const calculator = {
  addition: function (a, b) {
    alert(a + b)
  },
  division: function (a, b) {
    alert(a / b)
  },
  multiplication: function (a, b) {
    alert(a * b)
  }
}

const age = 30
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2
}

const krAge = calculateKrAge(age)

console.log(krAge)