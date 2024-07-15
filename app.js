let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgctr = document.querySelector(".msg-cntr");
let msg = document.querySelector("#msg");

let turnO = true; // playerX,PlayerO
let count = 0;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const restGame = () => {
  turnO = true;
  count = 0;

  enabledboxes();

  msgctr.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgctr.classList.remove("hide");
  disabledboxes();
};

const disabledboxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enabledboxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showDraw = () => {
  msg.innerText = "It's  a Draw";
  msgctr.classList.remove("hide");
  disabledboxes();
};

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let positionValue1 = boxes[pattern[0]].innerText;
    let positionValue2 = boxes[pattern[1]].innerText;
    let positionValue3 = boxes[pattern[2]].innerText;

    if (positionValue1 != "" && positionValue2 != "" && positionValue3 != "") {
      if (
        positionValue1 === positionValue2 &&
        positionValue2 === positionValue3
      ) {
        console.log("Winner", positionValue1);

        showWinner(positionValue1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    if (!checkWinner() && count === 9) {
      showDraw();
    }
  });
});

newbtn.addEventListener("click", restGame);
resetbtn.addEventListener("click", restGame);
