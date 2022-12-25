const main = document.getElementById("main");
const qna = document.getElementById("qna");
const result = document.getElementById("result");
const endPoint = 12;

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 500);
  });
}

// click 이벤트 연결, 지금 화면 안보이게 하기
// button 을 생성하여 포맷 맞추고 text 입력
function addAnswer(answerText, qIdx) {
  const a = document.querySelector(".answerBox");
  const answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    () => {
      const children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }

      // 일정 시간이 지난 후 정해진 코드 실행
      setTimeout(() => {
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

// qna 해당 순서 내용 출력
// qna 진행 스테이스 바 qIdx 만큼 % 표시
// for(let i in List)
function goNext(qIdx) {
  if (qIdx + 1 === endPoint) {
    goResult();
    return;
  }
  const qBox = document.querySelector(".qBox");
  qBox.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  const status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

// 시작할 때 기능
// qna 창 열기 & main 창 닫기
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
