//Object

const player = {
  name: "Changgil",
  points: 10,
  fat: true
}

console.log(player)
console.log(player["name"])
console.log(player.name)
console.log(player.points)
console.log(player.fat)
player.fat = false
console.log(player.fat)

player.gender = "male"
console.log(player)