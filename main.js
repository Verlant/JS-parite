function is_even(nbr) {
  if (nbr % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const BTN = document.createElement("button");
document.body.append(BTN);
BTN.textContent = "Cliquez pour évaluer la parité d'un nombre";
BTN.addEventListener("click", (e) => {
  let nbr;
  do {
    nbr = Number(
      prompt("Entrez un nombre pour savoir s'il est pair ou impair")
    );
  } while (isNaN(nbr) || !Number.isInteger(nbr));
  alert(is_even(nbr));
});
console.log(is_even(2));
console.log(is_even(5));
console.log(is_even(0));
