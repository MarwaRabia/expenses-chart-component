import { data } from "./data.js";
const chart_box = document.querySelector(".chart-box");

let chart_html = "";
let max_index = 0;

data.forEach((element, index) => {
  if (element.amount > data[max_index].amount) {
    max_index = index;
  }
});

let max_amount = data[max_index].amount;

// assume maximum height is 150 px

function calculate_height(amount) {
  return (amount * 120) / max_amount;
}

// create html for chart bars

data.forEach((item, index) => {
  const height = calculate_height(item.amount).toFixed(2);
  const is_max = index === max_index ? "max" : "";

  chart_html += `<div class="each-col-box">
  <div class="column">
    <span class="title">$ ${item.amount}</span>
    <span class="col-bar ${is_max}"style="height:${height}px"></span>
  </div>
  <span class="day">${item.day}</span>
</div>`;
});

chart_box.innerHTML = chart_html;
