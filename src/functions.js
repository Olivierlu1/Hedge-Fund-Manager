export function castToDollar(n) {
  return Number(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export const notHiredMessage = "Hire me if you want some insider information";
export const defaultMessage = "Sorry, I don't have any information to tell you";
export const hiredMessage = "Thank you for hiring me. Come back to me next month, and hopefully I'll have something good to tell you.";
export const noUpcomingEventMessage = "There are no events coming up, unfortunately."

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function convertDateToString(month, year) {
  return `${monthNames[month - 1]} ${year}`;
}
// export var x = 5;

// export function changeX(value) {
//   x = value;
// }

export function generateRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

export function generateRandomChangeGameIndex(arrayLength, indexes) {
  var number;
  while (indexes.includes(number) == false) {
    number = Math.floor(Math.random() * (arrayLength - 1));
  }
  return number;
}

export function generateTwoRandomNumbers(){
  var number1 = Math.floor(Math.random()*6);
  var number2;
  while (number1==number2){
    number2=Math.floor(Math.random()*6);
  }
  var trend = [number1,number2];
  return trend;
}

export function generateRandomValue() {
  return Math.random();
}

export function generateEventRound() {
  return Math.floor(Math.random() * 3) + 3;
}

export function getColorArrow(currentPrice, priceArray) {

  if (priceArray.length == 0) {
    return {
      color: "black",
      arrow: ""
    }
  }

  if (currentPrice > priceArray[priceArray.length - 1]) {
    return {
      color: "green",
      arrow: "arrow alternate circle up"
    }
  } else if (currentPrice < priceArray[priceArray.length - 1]) {
    return {
      color: "red",
      arrow: "arrow alternate circle down"
    }
  } else {
    return {
      color: "black",
      arrow: ""
    }
  }
}
