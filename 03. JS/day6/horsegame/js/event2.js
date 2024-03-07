// STEP1. moveLeft 함수를 선언한다. 
let horse = document.getElementById('horse');

let currentPosition = 0;

const moveLeft = (click) => {

    if (currentPosition < 1200) {
        currentPosition += 50;
        horse.style.right = currentPosition + "px";
    }

}
let leftBtn = document.getElementsByClassName('btn')[0].addEventListener('click', moveLeft);




// STEP5. moveLeft 함수 안에 내용을 넣는다
//        5-1) id가 horse 인 말을 js로 가져온다.
//        5-2) moveLeft 함수가 호출 될 때 마다, 그 말이 왼쪽으로 50px씩 이동
//              단, 말은 배경을 벗어나지 않도록 한다.

// STEP2. moveRight 함수를 선언한다.

const moveRight = (click) => {

    if (currentPosition > 0) {
        currentPosition -= 50;
        horse.style.right = currentPosition + "px";
    }
}
let rightBtn = document.getElementsByClassName('btn')[1].addEventListener('click', moveRight);



// STEP6. moveRight 함수 안에 내용을 넣는다.
//        6-1) id가 horse 인 말을 js로 가져온다.
//        6-2) moveRight 함수가 호출 될 때 마다, 그 말이 오른쪽으로 50px씩 이동
//              단, 말은 배경을 벗어나지 않도록 한다.

// STEP3. 'btn' 이라는 클래스 이름을 가진 첫번째 버튼 (LEFT)을 누르면,
//          moveLeft 함수가 호출된다.



// STEP4. 'btn' 이라는 클래스 이름을 가진 두번째 버튼 (RIGHT) 를 누르면,
//          moveRight 함수가 호출된다.




// **힌트
// 1. 오른쪽과 왼쪽은 결국 하나의 축으로 이루어져있다.
// 2. js로만 해결하는게 헷갈리면 css로 가서 이것저것 수정해보면서
// 내가 수정해줘야할 스타일을 적용해볼 것
// 3. 익명함수 사용 X, 꼭 함수 선언해서 사용할 것

const jump = () => {
    console.log('jump f')
    document.getElementById('horse').animate([
        { bottom: '200px' }, 
        { bottom: '-1000px' }, 
        { bottom: '200px' }], {
        duration: 2000
    })
}


// +) 추가기능 1 : 키보드로 조작하기
document.getElementsByTagName('body')[0].addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === 'ArrowLeft') {
        moveLeft();
    } else if (e.key === 'ArrowRight') {
        moveRight();
    }
    else if (e.key === " ") {
        jump();
    }


});