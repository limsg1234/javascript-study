/** 스코프 = 범위, 시야 
 * 자바스크립트의 스코프는 정적이다.
 * 정적 스코프는 전역 스코프, 블록 스코프, 함수 스코프에 적용된다.
 *
*/

/* 전역 스코프 
    전역 스코프에 의존하는 것을 피해야 한다.
*/
// 의존성이 강한 예제
let name = 'lim'; // 전역
let age = 18;     // 전역

function greet() {
    console.log(`hi ${name}`);
}
function getBirthYear() {
    return new Date().getFullYear() - age;
}

// 단일 객체에 보관, 함수는 여전히 의존 
let user = {
    name = "lim",
    age = 18,
};
function greet() {
    console.log(`hi ${user.name}`);
}
function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

// 함수가 의존하지 않도록 
function greet(user) {
    console.log(`hi ${user.name}`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}

/* 블록 스코프 
    블록의 스코프에서만 보이는 식별자 
*/
console.log('before block');  
{
    console.log('inside block');
    const x = 3;
    console.log(x);
}
console.log(`outside block; x=${x}`);
/*
before block
inside block
3
Uncaught ReferenceError: x is not defined
*/

