const main = document.getElementById("main");
const qna = document.getElementById("qna");

function addAnswer(answerText) {
  const a = document.querySelector(".answerBox");
  const answer = document.createElement("Button");
  a.appendChild(answer);
  answer.innerHTML = answerText;
}

function goNext(qIdx) {
  const qBox = document.querySelector(".qBox");
  qBox.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer);
  }
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.display = "block";
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
    }, 500);
    let qIdx = 0;
    goNext(qIdx);
  }, 500);
}
