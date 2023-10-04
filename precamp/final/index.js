// 핸드폰 자리 수에 따른 자동 자리 변환
const phone1 = () => {
    const p1 = document.getElementById("p1").value;
    if (p1.length === 3) {
        document.getElementById("p2").focus();
    }
};

const phone2 = () => {
    const p2 = document.getElementById("p2").value;
    if (p2.length === 4) {
        document.getElementById("p3").focus();
    }
};

// 인증 번호 전송
const auth = () => {
    const authNum = String(Math.floor(Math.random() * 1000000)).padStart(
        6,
        "0"
    );
    document.getElementById("auth").innerText = authNum;
    document.getElementById("authButton").disabled = true;
    authComplete();
};
let timer;

//인증 번호 확인
const authComplete = () => {
    document.getElementById("completeButton").disabled = false;

    let time = 5;
    timer = setInterval(() => {
        if (time >= 0) {
            let min = Math.floor(time / 60);
            let sec = String(time % 60).padStart(2, "0");
            document.getElementById("timer").innerText = `${min} : ${sec}`;
            --time;
            console.log(time);
        } else {
            document.getElementById("completeButton").disabled = true;
            clearInterval(timer);
        }
    }, 1000);
};
// 인증 완료
const pressed = () => {
    document.getElementById("completeButton").disabled = true;
    alert("인증이 완료되었습니다.");
    document.getElementById("timer").innerText = "0 : 00";

    clearInterval(timer);
};

const check = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
    const p1 = document.getElementById("p1").value;
    const p2 = document.getElementById("p2").value;
    const p3 = document.getElementById("p3").value;
    const select = document.getElementById("region").value;

    const man = document.getElementById("man").value;
    const woman = document.getElementById("woman").value;

    if (
        email &&
        name &&
        password &&
        repassword &&
        p1 &&
        p2 &&
        p3 &&
        select &&
        (man || woman)
    ) {
        alert("가입을 축하합니다.");
    } else {
        alert("필수 항목을 입력하세요");
    }
};
