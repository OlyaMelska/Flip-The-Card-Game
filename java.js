let boxes = document.getElementsByClassName("box");
let clickCounts = 0;
let selectedOne;
let selectedSecond;
let winsCount = 0;
let displayWins = document.getElementById("wins");
let clickedOne = false;
let clickedSecond = false;

let emoji = [{ value: "", wasGuessed: false }];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].classList.add("hidden");
  clickItem(boxes[i]);
  function checkItems() {
    if (
      selectedOne.getAttribute("value") === selectedSecond.getAttribute("value")
    ) {
      winsCount++;
      displayWins.innerHTML = winsCount;
      clickItem(boxes[i]);
      clickCounts = 0;
    } else {
      selectedOne.classList.add("hidden");
      selectedSecond.classList.add("hidden");
      console.log("You lost!");
      clickCounts = 0;
    }
  }
}

function clickItem(item) {
  item.addEventListener("click", value => {
    clickCounts++;
    if (clickCounts === 1) {
      selectedOne = value.target;
      selectedOne.classList.remove("hidden");
    } else {
      selectedSecond = value.target;
      selectedSecond.classList.remove("hidden");
      setTimeout(checkItems, 1000);
      clicked = true;
    }

    console.log("Click counts: ", clickCounts);
  });
}
