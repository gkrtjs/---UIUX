/* 
    변수 란 : 변하는 수 
        - 상자에 미리 넣어둔 값/데이터 1개
        - let 변수명 = 값 
    
    함수 란 : 함(상자) + 수(숫자)
        - 수 가 들어있는 상자 => 누군가가 상자에 미리 넣어둔 수
        - 누군가가 상자에 미리 넣어둔 코드 => 재활용/사용
        - function 함수명(){  실행문; }  
    */
  

// 1. 함수 정의/만들기
function test1(){ 
alert('test1 함수실행')
}

// 2. 함수 실행 
    //1. JS 에서 함수를 호출할때 는 함수명();
    //2. HTML 에서 함수를 호출할때 <마크업 onclick="함수명()">

// - 1. 매개변수가 있는 함수
function test2( 매개변수1, 매개변수2 ){
    let 더하기 = 매개변수1, 매개변수2 ;
    alert (더하기);
}
// - 2. 매개변수가 없는 함수
function test3(){
    alert('test3 함수 실행')

}
// - 3. 리턴이 있는 함수

function test4 (){
    return;
    alert('test4함수 실행');
}
// 활용
function 추가함수(){
    // 1. 문자 변수
    //let 메시지 = '<p>JS에서 작성된 문자열</p>';
    //let 메시지 = prompt('입력');
    let 메시지 = documemt.querySelector('input').value
    // 2. 
        // document.querySelector('div') : html 에 있는 div를 식별해서 js로 가져오기
    document.querySelector('div').innerHTML += 메시지;

}

