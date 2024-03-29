/*

제어문
    - 조건문 : if문
        - 흐름에 제어 : 상황(T/F)에 코드의 실행 여부 판단 
    - 반복문 : for문
        - 특정코드 반복: 상황(T/F)에 코드를 실행 반복여부 판단

*/
// 1. 복습1
if(true){document.write('day08복습')}
// 2. 복습2
if( 3 > 1 ){document.write('<p> true </p>');}
else{ document.write('<p> false </p>');}
// 3. 복습3
if( 10 > 9 ){ document.write('<p> 10 > 9 true </p>');}
else if( 10 > 6 ) { document.write('<p> 10 > 6 true </p>');}
else if( 10 > 3 ){ document.write('<p> 10 > 3 true </p>');}
else{document.write( '<p> 그외 false  </p>');}  

// 4. 복습 활용1 : 아래 점수 변수의 값이
        // 90점이상이면 '합격' 70이상이면 '재시험' 그외 '탈락' HTML 출력
let 점수 = 70;
if( 점수 >= 90){document.write('<p> 합격 </p>');}
else if( 점수 >= 70){document.write('<p> 재시험 </p>');}
else{document.write('<p> 탈락 </p>');}

//5. 복습4
for( let i = 1 ; i <=5 ; i++){    // i  는 1 부터 5이하 까지 1씩 증가
    document.write(`    ${ i }    `); // : 키보드 왼쪽tab키 위에 ` 키
} // for end

for(let i = 5 ; i >=1 ; i--){  // i 는 5 부터  1이상 까지 1씩 감소, 
    document.write(`<p>  ${i} </p>  `)
}

// 6. 복습 활용2 : 아래 합계 변수의 1~10 까지 누적합계를 구하는 for를 작성하시오.
let 합계 = 0;
// 1 더하기 // 복합연산자 , 합계 = 힙계 + 1 ;
for( let i = 1 ; i<=10 ; i++){
    합계 +=i;
}
document.write(`<p>${ 합계 }</p>`);

// 7. 복습5 : (2단) 
for(let 곱 = 1 ; 곱 <=9; 곱++){
    document.write(`<p> 2 x ${곱} = ${2*곱} </p>`);
}
// 8. 복습 활용3 : 2~9단 구구단 출력.
for(let 곱 = 1 ; 곱 <=9; 곱++) {
    document.write(`<p> 3 x ${곱} = ${3*곱} <p>`);}

for(let 곱 = 1 ; 곱 <=9; 곱++) {
    document.write(`<p> 4 x ${곱} = ${4*곱} <p>`);}

for(let 곱 = 1 ; 곱 <= 9 ; 곱 ++){
    document.write(`<p> 5 x ${ 곱 } = ${5*곱}</p>`);
}
for(let 곱 = 1 ; 곱 <=9 ; 곱++){
    document.write(`<p> 6 x ${곱} = ${6*곱}</p>`);
}


for(let 단 = 2 ; 단 <=9; 단++){
    for(let 곱 = 1 ; 곱 <=9; 곱++)
        document.write(`${단} x ${곱} = ${단*곱} , `);
    document.write('<br/>')}