

// let onButton = document.getElementById('button4')

// onButton.addEventListener('mouseenter', function(e){
//   console.log(document.getElementById('b4-bg').style)
//   document.getElementById('b4-bg').style.top = e.offsetY;
//   document.getElementById('b4-bg').style.left = e.offsetX;
//   console.log(document.getElementById('b4-bg').style.top)
  

//   } 
// )

$(document).ready(function(){
  $('#button4').on('mouseenter', function(e) {
    $(this).find('.b4-bg').css({top: e.offsetY, left: e.offsetX});
  });
});
