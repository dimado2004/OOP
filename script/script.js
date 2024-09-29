class Calculator {
  constructor() {
    this.plusButton = document.querySelectorAll(".btnPlus");
    this.deleteButton = document.querySelectorAll(".btn-outline-danger");
    this.heartIcons = document.querySelectorAll(".fa-heart");
    this.article = document.querySelectorAll(".article");
    this.qty = document.querySelectorAll(".quantite");
    this.total = document.querySelectorAll(".total");
    this.price = document.querySelectorAll(".prix");
    this.mns = document.querySelectorAll(".btn-outline-warning");
    this.sum = document.querySelector(".Prixtotal");

    //installiz total price
    this.CalculatorTotal();

    //set up event listener
    this.addEventListeners();
  }

  //methode to calculate total price
  CalculatorTotal() {
    let totalPrice = 0;
    for (let i = 0; i < this.article.length; i++) {
      let itemPrice = parseInt(this.price[i].innerHTML);
      let itemQty = parseInt(this.qty[i].value);
      let itemTotal = itemPrice * itemQty;
      this.total[i].innerHTML = itemTotal;
      totalPrice += itemTotal;
    }
    this.sum.value = totalPrice;
  }

  //methode to add event listener for buttons
  addEventListeners() {
    for (let i = 0; i < this.plusButton.length; i++) {
      this.plusButton[i].addEventListener("click", () => {
        this.qty[i].value++;
        this.CalculatorTotal();
      });
      //minus button event listener
      this.mns[i].addEventListener("click", () => {
        if (this.qty[i].value > 0) {
          this.qty[i].value--;
          this.CalculatorTotal();
        }
      });
      //delete button event listener
      this.deleteButton[i].addEventListener("click", () => {
        this.article[i].remove();
        this.CalculatorTotal();
      });
    }
    //heart icon event listener
    this.heartIcons[i].forEach((icon) => {
      icon.addEventListener("click", () => {
        icon.classList.toggle("liked");
      });
    });
  }
}
//initialize cart
const cart = new Calculator();