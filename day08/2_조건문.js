

/*

p.24

*/
// 1. ex1

if( 5 > 3){document.write('<div> ex1]true </div>');}

if(true){ document.write('<div> ex2]ture </div>'); }

if(false){ document.write('<div> ex3]false </div>'); }




//4. ex4 만약에 점수가 80점이상이면 합격 아니면 불합격
let 점수 = 90;
if( 점수 >=80 ){document.write('<div> ex4] 합격 </div>');}
if( 점수 <80 ){document.write('<div> ex4] 불합격 </div>');}

//5. ex4를 if else 변경

if( 점수 >=80 ){ document.write("<div ex5] 합격 </div>");}
else{ document.write('<div> ex5] 불합격 </div>');}

//6. 만약에 성별이 남자 이면서 점수가 80점이상 '남자우수' 아니면 '남자장려'
   // 성별이 여자 이면서 총점수가 80점 이상 '여자우수' 아니면 '여자장려'

let 성별 = '여자'
let 총점수 = 85
if( 성별 == '남자'){ // 성별이 남자이면
 if( 총점수 >= 80) {}
}else{ // 아니면 (여자) 
}


// 7. 월이 3~






//활용1) prompt 함수로 국어, 영어 , 수학 ,점수 입력받아 각 변수에 저장,
     // 총점과 평균 계산해서 출력하기
     // 평균이 90점 이상이면 '우수' 출력


/*
let 국어 = 10;
let 수학 = 20;
let 영어 = 30;
let 평균 = prompt("평균값을 입력하세요");

if(평균 >30 ){document.write('<div 활용1] 우수 </div>');}
*/
// 1. 입력
let 국어 = parseInt(prompt("국어점수 입력"));
let 영어 = parseInt(prompt("영어점수 입력"));
let 수학 = parseInt(prompt("수학점수 입력"));


// 2. 처리
let 총점 = 국어+영어+수학; // 더하기
let 평균 = 총점 /3;   // 총점/과목수3

// 3. 출력
document.write('<div> 활용1] 총점: '+총점+' 평균: '+평균+'</div>');

if( 평균 >= 90){ document.write('<div> 활용1] 우수학생 </div>');}

// 활용2) prompt 함수로 정수 입력받아 홀수이면 "홀" 짝수이면 "짝" 출력

let 값 = prompt("정수 입력");
if( 값 % 2 == 0 ){ document.write('<div> 활용2] 짝수 </div>');}
else{ document.write('<div> 활용2] 홀수 </div>');}



