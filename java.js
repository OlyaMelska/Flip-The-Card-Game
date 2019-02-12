let love = document.getElementsByClassName("love");
let boxes = document.getElementsByClassName("box");
let one = document.getElementById("1");
let clickCounts = 0;
let selectedOne;
let selectedSecond;
let winsCount = 0;
let displayWins = document.getElementById("wins");

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
    } else {
      selectedOne.classList.add("hidden");
      selectedSecond.classList.add("hidden");
      console.log("You lost!");
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
      checkItems();
    }

    console.log("Click counts: ", clickCounts);
  });
}
