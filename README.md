# javascript-study

#### 러닝 자바스크립트 책 요약 1
1. 자바스크립트에는 문자열, 숫자, 불리언, null, undefined, 심볼의 여섯 가지 원시 타입과 객체 타입이 있다.
2. 자바스크립트의 모든 숫자는 배정도 부동소수점 숫자(더블)이다.
3. 배열은 특수한 객체이며, 객체와 마찬가지로 매우 강력하고 유연한 데이터 타입이다.
4. 날짜, 맵, 셋, 정규표현식 등 자주 사용할 다른 데이터 타입들은 특수한 객체 타입이다.



### 노마드 강의 기록 - 바닐라 자바스크립트

Variable 변수
- let : 변수를 바꿀 수 있다.
- const : 변수를 못 바꾼다. 


자바스크립트는 위에서 밑으로 실행한다.
에러를 읽을 수 있도록 하는게 중요하다.

const를 기본으로 써라. 진짜 필요할 때만 let

데이터를 정렬하는 방법  
- Array : []
- Object : {}
const nico = {   
  name: "niko",   
  age: 33    
  }     
{} 안의 데이터는 바꿀 수 있다.    
nico.age = 40    
nico 자체는 못바꾼다.     


함수   
function 이름 () {}   

argument, parameter 인자   
함수는 인자를 받음. 변수같은 것. 
function 이름 (인자) {}
 
 
 
 HTML을 DOM 객체로 바꿀 수 있다.     
 id - document.getElementById()
 
 document.querySelector("#id");   
 
 이벤트   
 .addEventListener("click", 함수 );   
 

로컬 스토리지   
작은 정보를 유저 컴퓨터에 저장하는 방법.  
