var img = document.getElementsByClassName('imgitem');
var overlaybox = document.querySelector('.overlaybox');
var next = document.getElementById('next');
var perv = document.getElementById('perv');

var imgArr = [];
var globalindex;

for (var i=0 ; i< img.length ; i++) {

    imgArr.push(img[i]);
 }

for (var i=0 ; i< img.length ; i++) {

     imgArr[i].onclick = function(e) {
            
      document.querySelector('.overlaycontainer').style.display= 'block'   ;

        // var clicked = e.target;
         var imgSrc =  e.target.src;
         var index = imgArr.indexOf(e.target);
         globalindex = index;
          
         overlaybox.style.backgroundImage = 'url('+ imgSrc +') ' ;

     }
}


var close = document.querySelector('.ico-close');
close.onclick = function() {
    document.querySelector('.overlaycontainer').style.display= 'none'   ;
} 


/*
console.log(img[0].src);

// kan mmkn ne3ml show fun w fel for loop n pass args i leha w gwaha img[i].src w hatzbot
*/


function nextSlide () {
    globalindex++;
    if (globalindex === imgArr.length)
         globalindex = 0 ;
        
      var imgSrc = imgArr[globalindex].src ; 
      overlaybox.style.backgroundImage = 'url('+ imgSrc +') ' ;  

}

next.addEventListener('click' , nextSlide);

function pervSlide () {
   
    globalindex--;

    if (globalindex < 0) 
       globalindex = imgArr.length - 1 ;

       var imgSrc = imgArr[globalindex].src ; 
     overlaybox.style.backgroundImage = 'url('+ imgSrc +') ' ; 

}

perv.addEventListener('click' , pervSlide);

document.body.addEventListener('keydown', function(eventInfo){
      
     if (eventInfo.keyCode == 39) {
         nextSlide();
     }
     if (eventInfo.keyCode == 37) {
        pervSlide();
    }
    if (eventInfo.keyCode == 27) {
        document.querySelector('.overlaycontainer').style.display= 'none'   ;
    }


})