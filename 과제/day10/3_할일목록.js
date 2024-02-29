
// * 배열객체 : (인덱스 = 0번시작) 저장 순서대로 
let 입력데이터배열 = [ '자바스크립트 공부하기' , '다이어트'];


// 1. 내용을 입력 받는 함수
    // 등록버튼을 클릭할때마다 실행되는 함수
    // 지역변수 : {} 안에서 선언된 변수 vs {} 밖에서 선언된 변수
function 등록함수(){

    // 1. input에 입력된 값(value)호출
    let 입력데이터 = document.querySelector(`#content`).value;
    //  확인
    console.log(입력데이터);
    
    // 2. 입력받은 변수(지역변수 = 함수가 실행되고 종료되면 초기화)를 배열(전역변수=JS종료될때까지 누적저장)에 저장
        // P.87 배열에 데이터 추가, 배열명.PUSH (새로운데이터);
    입력데이터배열.push(입력데이터);
    console.log(입력데이터배열);


    // 3. (배열내 데이터들을) 출력
        // 1. 배열에 있는 데이터 개수 (배열명.length)만큼 반복횟수
                // - 인덱스 0부터 마지막인덱스 ( 배열길이 - 1) 까지 1씩 증가

        let html = ``;
        for(let 인덱스 = 0 ; 인덱스 < 입력데이터배열.length; 인덱스++){
            // 배열내 데이터 개수만큼 todo div 생성.
            html += `<div class="todo"> 
            <div class="content"> ${ 입력데이터배열[인덱스] } </div> 
            <div id="btnBox">
                <button type="button"> 상태변경 </button>
                <button type="button" onclick="삭제함수(${인덱스})"> 삭제 </button>
            </div>
        </div>`
        }
        // 1.무엇을
   
        // 2.어디에 출력
        document.querySelector('#todoBottom').innerHTML = html;

        // 3. 입력상자를 초기화

        document.querySelector(`#content`).value = ``

} // f end


//2.삭제함수 ( 무억을 삭제할껀지?? 증거 필요)
function 삭제함수 (인덱스 ){
    // p.87 배열내 데이터 삭제 , 배열명.splice( 삭제할인덱스 , 삭제개수 );
    입력데이터배열.splice(인덱스 , 1 );
}

// 3. 출력 함수 (삭제 또는 등록시 할일목록 출력해주는 함수)
function