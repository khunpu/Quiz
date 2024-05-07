// ฟังก์ชันเช็คคำตอบของคำถามที่ 1
function checkAnswer1(answer) {
    const result = document.getElementById('result1');
    let score = 0;
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก พีไอเอ็ม";
        result.style.color = 'green';
        score = 1;       
    } else {
        result.textContent = "ผิดแล้ว ลองใหม่น๊าา";
        result.style.color = 'red';
    }

    calculateScore();
}

// ฟังก์ชันเช็คคำตอบของคำถามที่ 2
function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    let score = 0;
    if (answer === 'd') {
        result.textContent = "ถูกต้อง";
        result.style.color = 'green';
        score = 1; 
    } else {
        result.textContent = "ผิดนะเทอว์";
        result.style.color = 'red';
    }

    calculateScore();
}

// ฟังก์ชันคำนวณคะแนน
function calculateScore() {
    let score1 = document.getElementById('result1').style.color === 'green' ? 1 : 0;
    let score2 = document.getElementById('result2').style.color === 'green' ? 1 : 0;
    let totalScore = score1 + score2;

    document.getElementById("score").innerHTML = "คะแนนทั้งหมด : " + totalScore + " ข้อ";
}

