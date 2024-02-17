// **

let seatCount = 1;
let seatLeft = 39;
let price = 550;
let totalPrice = 0;

const cards = document.querySelectorAll("#card");
// console.log(seats.innerText);

for (let card of cards) {
  card.addEventListener("click", () => {
    // console.log("clicked");

    // total price add
    const priceElement = document.querySelector("#total__price");
    totalPrice += price;
    priceElement.innerText = totalPrice + " Tk";

    const seats = document.querySelector("#seat__count");
    seats.innerText = seatCount++;
    console.log(seats.innerText);

    const seatElement = document.querySelector("#seats__left");
    seatElement.innerText.split(" ")[0];
    // console.log(remainingSeats);
    seatElement.innerText = seatLeft--;
    // console.log(seatElement.innerText);
  });
}

// ** utilities

// ** works left to do_

// set seat background color,
// coupon/discount,
// grand-total,
// apply,
// max 4 seats to buy,
// title adding,
// email,
// phone number,
// next btn,
// pop up new page,
