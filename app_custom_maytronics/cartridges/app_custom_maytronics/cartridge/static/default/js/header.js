$('#global-container').on('mouseenter',()=>{
    
    // $('#locals').css('display',"inline-block");
    $('#locals').css('height','100px');
    
    setTimeout(()=>{
        $('#locals p').css('opacity',1);
    },1000)
    
})



$('#global-container').on('mouseleave',()=>{
    setTimeout(()=>{
        $('#locals p').css('opacity',0);
    },300)

    $('#locals').css('height',0);


})