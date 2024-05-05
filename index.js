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

    calculateScore(score);
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

    calculateScore(score);
}

// ฟังก์ชันคำนวณคะแนน
function calculateScore(score) {   
    let totalScore = parseInt(document.getElementById('mark').innerText) || 0;
    totalScore += score;

    document.getElementById("mark").innerHTML = "ตอบถูกทั้งหมด : " +totalScore+ " ข้อ";

}



 