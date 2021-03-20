
$(document).ready(function () {
    
    
    let getEle=  document.querySelector('.play')
    let arrColor = ['rgb(241, 3, 103)','rgb(3, 106, 241)','rgb(241, 185, 3)']
    let start = document.querySelector('.str')
    $('.str').click(()=>{
        getEle.play()
        $('li').each(function(index,elem){
           let int =  setInterval(function(){
              let getRandomHeight = Math.round(Math.random()*600)
              $(elem).css('height',getRandomHeight).animate({
                  transition:0.3+'s'
              },'easeOutBack')  
              $('.str').addClass('bgc')
              $('.stop').removeClass('bgc')
              $('.str').disabled = true
              start.disabled = true

            //   рандомний колір для li
            let rgb1 = Math.round(Math.random()*2)
            
            
              console.log(arrColor[rgb1]);
            $(elem).css('background',arrColor[rgb1])

              $('.stop').click(()=>{
                clearInterval(int)
                getEle.pause()
               
                $('.stop').addClass('bgc')
                $('.str').removeClass('bgc')
                start.disabled = false

              })
            },100)
            
          })

          
    })
});
