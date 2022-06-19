let cnt = 0;
function addLike() {
    const button = document.getElementById("heart");
    const pushHeartBtn = document.querySelector(".heartBtn");
    cnt += 1;
    if (cnt % 2 == 0) {
        pushHeartBtn.innerHTML = '<i class="bx bx-heart" ></i>';
        pushHeartBtn.style.color = 'black';
    } else {
        pushHeartBtn.innerHTML = '<i class="bx bxs-heart" ></i>';
        pushHeartBtn.style.color = 'red';
    }
}
function addbtn(){
    const button = document.getElementById("btn1");
    alert("태그 추가 완료!");
}