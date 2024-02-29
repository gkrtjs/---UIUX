/*

   p. 76 반복문
        - 특정 조건을 충족할때 반복 작업.
        - 필수는 아니다. 효율적인 코드로 변경 가능.
        - 형태
            for(let i = 1 ; i <=10 ; i++){ true일때 반복실행문;}
*/

// ex1) 반복문 없이 출력 10번 하기.
/* 
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
document.write("<p> 자바스크립트 공부 </p>");
// ex2) 반목문을 이용한 출력 10번 하기
for( let i = 1 ; i<=10 ; i++){document.write("<p> for자바스크립트 공부 </p>");}
// i 변수는 

// end
// ex3 ) 엘레베이터가 1층부터 5층까지 1층씩 증가.
for( let 층 = 1 ; 1<=5 ; 층++)
{document.write("<p> ${층} 올라가는중</p>");}
*/

// ex5) 엘레베이터가 5층부터 1층까지 1층씩 감소 (총 5 번 반복)
for ( let 층 = 5 ; 층>=1 ; 층--){
    document.write(`<p> 현재층 : ${층} 내려가는중</p>`);}



// ex6) 2단 구구단 (반복문 없이)

document.write(`<p>2 X 1 = 2</p>`);
document.write(`<p>2 X 2 = 4</p>`);
document.write(`<p>2 X 3 = 6</p>`);
document.write(`<p>2 X 4 = 8</p>`);
document.write(`<p>2 X 5 = 10</p>`);
document.write(`<p>2 X 6 = 12</p>`);
document.write(`<p>2 X 7 = 14</p>`);
document.write(`<p>2 X 8 = 16</p>`);
document.write(`<p>2 X 9 = 18</p>`);

// ex7) 2단 구구단 (for 사용)
for( let 곱 = 1 ; 곱<=9 ; 곱++){
document.write(`<p>2 X ${곱} = ${곱*2} </p>`);}
