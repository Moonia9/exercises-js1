function secondMatchesAmy(array) {
  if (array[1] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(["Maria","Amy", "Luca", "Mariana"]));
console.log(secondMatchesAmy(["Miriam", "Enola"]));