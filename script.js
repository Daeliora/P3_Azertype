const listeMots = ["Cachalot", "Pétunia", "Serviette"]
console.log(listeMots[0])
console.log(listeMots[1])
console.log(listeMots[2])
let score = 0

let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])
if (motUtilisateur === listeMots[0]) {
    score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    score++
}

motUtilisateur = prompt("Entrez le mot : " + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    score++
}

console.log(score)

let compteur = 0
while (compteur < 3) {
    console.log(compteur)
    i++
}