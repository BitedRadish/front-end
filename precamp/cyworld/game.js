const startWord = () => {
    const word = document.getElementById("word").innerText;
    const myWord = document.getElementById("myword").value;

    const lastWord = word[word.length - 1];
    const firstWord = myWord[0];
    if (lastWord === firstWord) {
        document.getElementById("result").innerText = "정답입니다 !";
        document.getElementById("word").innerText = myWord;
        document.getElementById("myword").value = "";
    } else {
        document.getElementById("result").innerText = "땡 !";
        document.getElementById("myword").value = "";
    }
};
