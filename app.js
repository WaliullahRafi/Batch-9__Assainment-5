// **

let seatCount = 1;
let seatLeft = 39;
let price = 550;
let totalPrice = 0;
let titleCount = 1;

const cards = document.querySelectorAll("#card");

for (let card of cards) {
  card.addEventListener("click", () => {
    if (seatCount === 5) {
      // card.setAttribute("disabled");
      return;
    }

    // bg color
    card.style.background = "#1DD100";
    card.style.color = "#fff";

    // adding details
    const nameTitle = document.querySelector("#name__title");
    const h3 = document.createElement("h3");
    h3.innerText = titleCount + ". " + card.innerText;
    titleCount++;
    nameTitle.appendChild(h3);

    const classTitle = document.querySelector("#class__title");
    const h4 = document.createElement("h4");
    h4.innerText = "Economy";
    classTitle.appendChild(h4);

    const priceTitle = document.querySelector("#price__title");
    const h5 = document.createElement("h5");
    h5.innerText = price;
    priceTitle.appendChild(h5);

    // total price add
    const priceElement = document.querySelector("#total__price");
    totalPrice += price;
    priceElement.innerText = totalPrice + " Tk";

    const seats = document.querySelector("#seat__count");
    seats.innerText = seatCount++;

    const seatElement = document.querySelector("#seats__left");
    seatElement.innerText.split(" ")[0];
    seatElement.innerText = seatLeft--;
  });
}

// ** apply coupon code_

document.querySelector("#coupon__field").addEventListener("keyup", (event) => {
  const text = event.target.value;
  const newCode = text.split(" ").join("").toUpperCase();
  const applyBtn = document.querySelector("#apply__btn");

  if (newCode === "NEW15") {
    applyBtn.removeAttribute("disabled");

    applyBtn.addEventListener("click", () => {
      const grandTotal = document.querySelector("#grand__total");
      const discountPrice = totalPrice * 0.15;
      grandTotal.innerText = (totalPrice - discountPrice).toFixed() + " Tk";
      document.querySelector("#coupon__field").value = "";
    });
  } else if (newCode === "COUPLE20") {
    applyBtn.removeAttribute("disabled");

    applyBtn.addEventListener("click", () => {
      const grandTotal = document.querySelector("#grand__total");
      const discountPrice = totalPrice * 0.2;
      grandTotal.innerText = (totalPrice - discountPrice).toFixed() + " Tk";
      document.querySelector("#coupon__field").value = "";
    });
  } else {
    applyBtn.setAttribute("disabled", true);
  }
});

const btn = document
  .querySelector("#apply__btn")
  .addEventListener("click", () => {
    document.querySelector("#total__price").innerText = "0";
  });

// ** next btn pop up/all information clearing_

const nextBtn = document.querySelector("#next__btn");
nextBtn.addEventListener("click", () => {
  showElementById("pop__up");

  const continueBtn = document.querySelector("#continue__btn");
  continueBtn.addEventListener("click", () => {
    hideElementById("pop__up");

    document.querySelector("#name__title").innerText = "";
    document.querySelector("#class__title").innerText = "";
    document.querySelector("#price__title").innerText = "";
    titleCount = 1;

    document.querySelector("#seat__count").innerText = "0";
    document.querySelector("#seats__left").innerText = "40";
    document.querySelector("#total__price").innerText = "0";

    document.querySelector("#grand__total").innerText = "0";
    nameId.value = "";
    numberId.value = "";
    emailId.value = "";
  });
});
