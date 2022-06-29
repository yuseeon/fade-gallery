$(function(){

    // 모든 이미지 fade out
    $('.slider img').fadeOut(0);
    // 첫번째 (현재) 이미지 fade in
    $('.slider img').eq(0).fadeIn(0);


    // 다음 이미지 보기
    let imgCount = 0; // 이미지 번호
    $('.nextBtn').click(function(){
        if(imgCount < 2) {
        imgCount++; // 이미지 번호 증가
        console.log(imgCount);
        changeSlider(imgCount);
        }
    });

    // 이전 이미지 보기
    $('.prevBtn').click(function(){
        if(imgCount < 2) {
        imgCount++; // 이미지 번호 감소
        console.log(imgCount);
        changeSlider(imgCount);
        }
    });

});

// 하단 인디케이터 버튼을 누르면 해당 이미지(번호) 출력 함수
function changeSlider(num) {
    $('.slider img')
            .fadeOut()
            .eq(num).fadeIn();
}


