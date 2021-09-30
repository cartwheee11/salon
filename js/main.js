new WOW().init();


window.onload = function(){

    
    // let rellax = new Rellax('.rellax');
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image);  

     var swiper = new Swiper('.swiper-container', {
       slidesPerView: 2,
       spaceBetween: 70,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       }
     });








     //АДАПТАЦИЯ

     if(parseInt(getComputedStyle(document.body).width) < 800){
        swiper = new Swiper('.swiper-container', {
               slidesPerView: 1.4,
               spaceBetween: 70,
               navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
               }
             });
     } else{
       swiper = new Swiper('.swiper-container', {
          slidesPerView: 2,
          spaceBetween: 70,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
      });
     }

     window.onresize = function(){
        if(parseInt(getComputedStyle(document.body).width) < 800){
           swiper = new Swiper('.swiper-container', {
                  slidesPerView: 1.4,
                  spaceBetween: 70,
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }
                });
        } else{
          swiper = new Swiper('.swiper-container', {
             slidesPerView: 2,
             spaceBetween: 70,
             navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
             }
         });
        }
     }

     
    
    
}





