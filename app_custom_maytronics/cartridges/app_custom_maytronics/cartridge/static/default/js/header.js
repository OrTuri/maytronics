$('#open-global').on('mouseenter',()=>{
    
    $('.locals').css('transform','translateY(-5%)');
    
    
    setTimeout(()=>{
        $('.locals a').css('opacity',1);
    },600)
    
})



$('.global-container').on('mouseleave',()=>{
    $('.locals a').css('opacity',0);
    setTimeout(()=>{
        $('.locals').css('transform','translateY(-200%)');
    },600)



})