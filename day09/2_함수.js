 /* 
    p.79
        함수란: 특정한 작업을 위해 재활용할 수 있도록 구현한 코드 블록
        매개변수 : 함수 안으로 들어오는 값 = 입력
        리턴값 : 함수 밖으로 나가는 값 = 출력
        function : 
        -함수 정의/만들기
            1. function 함수명 (){}
            2. function 함수명
        -함수 호출
            1. 함수명();
        - (개발자가 위해 JS개발자가 )미리 만들어진 함수 제공
          document.write();
          console.log();   
          parseInt();


*/

// 1. 함수 구조 3가지
    // 1. 일반적인 함수 - 매개변수 X 리턴값 X 
function test (){
    document.write('<p> test()함수 실행</p>');
}
test(); //함수 호출
 
// 2. 매개변수가 있는 함수 - 매개변수 O 리턴값 X
function test2 (num1 , num2){
    document.write(`<p>${num1 + num2}</p>`);
} 
test2( 100, 300);

// 3. 리턴값이 있는 함수 - 매개변수 O 리턴값 O
function test3 (num1 , num2){
    let sum = num1 + num2
    document.write(`<p> ${sum}</p>`);
    return sum;
}

let= 결과3 = test3(100,300);
document.write( `<p> test3 결과 : ${결과3}</p>`);


//활용1 : HTML  5번 출력 , CSS 5번출력 , JS 5번출력
    //1. 단순 출력 / 
document.write( ` <p> HTML </p>`); document.write( ` <p> HTML </p>`);
document.write( ` <p> HTML </p>`); document.write( ` <p> HTML </p>`);
document.write( ` <p> HTML </p>`)

document.write( ` <p> CSS </p>`); document.write( ` <p> CSS </p>`);
document.write( ` <p> CSS </p>`); document.write( ` <p> CSS </p>`);
document.write( ` <p> CSS </p>`)

document.write( ` <p> JS </p>`); document.write( ` <p> JS </p>`);
document.write( ` <p> JS </p>`); document.write( ` <p> JS </p>`);
document.write( ` <p> JS </p>`);

  //2. FOR 출력 / 재 반복 
for( let i = 1 ; i<=5 ; i++){ document.write(`<p> HTML </p>`);}
for( let i = 1 ; i<=5 ; i++){ document.write(`<p> CSS </p>`);}
for( let i = 1 ; i<=5 ; i++){ document.write(`<p> JS </p>`);}
    
    //3. 함수 출력 / 재 사용
// 1. 함수 정의
function showName (name , count){
    for( let i = 1 ; i <= count ; i ++){
    document.write(`<p> ${ name } </p>`);
    }
};

showName ( 'HTML' , 5);
showName ( 'CSS' , 5);
showName ( 'JS' , 5);