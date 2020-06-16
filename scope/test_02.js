/** 내부 블록 x는 외부 블록에서 정의한 x와 이름만 같을 뿐 다른 변수여서 
 *  외부 스코프 x를 숨기는(가리는) 효과가 있습니다. 
 */
{
    // 외부 블록
    let x = 'blue'
    console.log(x); // blue

    {
        // 내부 블록
        let x = 3;
        console.log(x); // 3
    }
    console.log(x); // blue
}
console.log(typeof x); // undefined


/** 변수 숨김 예제 */
{
    // 외부 블록
    let x = { color : "blue" };
    let y = x; // y와 x는 같은 객체를 가리킨다.
    let z = 3;
    {
        // 내부 블록
        let x = 5; // 5
        console.log(x);
        console.log(y.color); // blue
        // 외부 스코프의 x가 가리키는 객체는 스코프 안에 있다.
        y.color = "red"; 
        console.log(z); // 3
    }
    console.log(x.color); // red 객체는 내부 스코프에서 수정됐다.
    console.log(y.color); // red x와 y는 같은 객체를 가리킨다.
    console.log(z); // 3
}