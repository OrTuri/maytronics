$('#open-global').on('mouseenter',()=>{
    
    $('.popup').css('transform','translateY(-150%)');
    $('.locals').css('transform','translateY(0)');

    setTimeout(()=>{
        $('.popup a').css('opacity',1);
    },600)
    
})


$('#corporate-open').on('mouseenter',()=>{
    
    $('.popup').css('transform','translateY(-150%)');
    $('.coporate').css('transform','translateY(0)');
    setTimeout(()=>{
        $('.popup a').css('opacity',1);
    },600)
    
});

$('#partners-open').on('mouseenter',()=>{
    
    $('.popup').css('transform','translateY(-150%)');
    $('.partners').css('transform','translateY(0)');

    setTimeout(()=>{
        $('.popup a').css('opacity',1);
    },600)
    
})

$('.global-container').on('mouseleave',()=>{
    $('.popup a').css('opacity',0);
    setTimeout(()=>{
        $('.locals').css('transform','translateY(-150%)');
        $('.coporate').css('transform','translateY(-150%)');
        $('.partners').css('transform','translateY(-150%)');
    },600)
})

