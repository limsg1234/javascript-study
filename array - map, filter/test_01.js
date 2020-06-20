/**
 * map과 filter는 배열 메서드 중 가장 유용한 메서드이다.
 * map : 배열 요소를 변형. 일정한 형식의 배열을 다른 형식으로 바꿔야 할 때.
 * map과 filter는 모두 사본을 반환하며 원래 배열은 바뀌지 않는다. 
 */
// 예제 1
const cart = [{name: "widget", price: 9.95}, {name: "romeo", price: 22}];
const names = cart.map(x => x.name);    // ["widget", "romeo"]
const prices = cart.map(x => x.price);  // [9.95, 22]
const discountPrices = prices.map(x => x * 0.8);   // [79.6, 176]

// 예제 2 - 두 배열에 따로 저장되어 있을 때
const items = ["widget", "romeo"];
const prices = [9.95, 22];
const cart = items.map((x, i) => ({name: x, price: prices[i]}));
// {name: "widget", price: 9.95} , {name: "romeo", price: 22}

/**
 * filter는 배열에서 필요한 것들만 남긴다. 
 * 사본을 반환하며 새 배열에는 필요한 요소만 남는다.
 * 남길 요소는 마음대로이고 함수를 넘겨서 정해준다.
 */
// 카드 덱을 만든다.
const cards = [];
for (let suit of ['H', 'C', 'D', 'S'])  // 하트, 클로버, 다이아몬드, 스페이드 
    for (let value = 1; value <= 13; value++) 
        cards.push({suit, value});

// value가 2인 카드
cards.filter(c => c.value === 2);   
// {suit: "H", value: 2}
// {suit: "C", value: 2}
// {suit: "D", value: 2}
// {suit: "S", value: 2}


// 다이아몬드
cards.filter(c => c.suit === 'D');  
// {suit: "D", value: 1}
// {suit: "D", value: 2}
// {suit: "D", value: 3}
// {suit: "D", value: 4}
// {suit: "D", value: 5}
// {suit: "D", value: 6}
// {suit: "D", value: 7}
// {suit: "D", value: 8}
// {suit: "D", value: 9}
// {suit: "D", value: 10}
// {suit: "D", value: 11}
// {suit: "D", value: 12}
// {suit: "D", value: 13}

// 킹, 퀸, 주니어
cards.filter(c => c.value > 10);
// {suit: "H", value: 11}
// {suit: "H", value: 12}
// {suit: "H", value: 13}
// {suit: "C", value: 11}
// {suit: "C", value: 12}
// {suit: "C", value: 13}
// {suit: "D", value: 11}
// {suit: "D", value: 12}
// {suit: "D", value: 13}
// {suit: "S", value: 11}
// {suit: "S", value: 12}
// {suit: "S", value: 13}

// 하트의 킹, 퀸, 주니어 
cards.filter(c => c.value > 10 && c.suit === 'H');
// {suit: "H", value: 11}
// {suit: "H", value: 12}
// {suit: "H", value: 13}




// map, filter 결합
function cardToString(c) {
    const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};

    for (let i = 2; i <= 10; i++) values[i] = i;
    return values[c.value] + suits[c.suit]; }

// value가 2인 카드 
cards.filter(c => c.value === 2)
    .map(cardToString);
// ["2♥", "2♣", "2♦", "2♠"]

cards.filter(c => c.value > 10 && c.suit === 'H')
    .map(cardToString);
// ["J♥", "Q♥", "K♥"]