let nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev'),
    backButton = document.getElementById('back'),
    seeMoreButtons = document.querySelectorAll('.seeMore'),
    carousel = document.querySelector('.carousel'),
    listHTML = document.querySelector('.carousel .list');
nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
const showSlider = (type) => {
    let items = document.querySelectorAll('.carousel .list .item');
    console.log(items);
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
        carousel.classList.remove('prev');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
        carousel.classList.remove('next');
    }
}
seeMoreButtons.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('ShowDetail');
    }
})
backButton.onclick = function (){
    carousel.classList.remove('ShowDetail');
}