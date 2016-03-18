

$(document).ready(function () {
    $('#hire').on('click', function () {
        window.open('mailto:smaharj1@ramapo.edu','_blank');
    });
    
    $('#details').on('click',function () {
        window.open('#portfolio','_self');
    });
        
    $('.row').on('click', function () {
        var info = $(this).next().children('.info');
        if (info.data('isHidden') == 'true') {
            info.slideDown();
            info.data('isHidden','false');
        }
        else {
            info.slideUp();
            info.data('isHidden','true');
        }
    })
    
    $('#nav a').on('click', function () {
            var id = $(this).data('id');
            $('html, body').animate({
                        scrollTop: $(""+id).offset().top
            }, 700);
        })
    
    var rows = $('.row').children('.info').each(function () {
        $(this).hide();
        $(this).data('isHidden','true');
    });
    
    
   
});