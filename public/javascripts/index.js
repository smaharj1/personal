

$(document).ready(function () {
    $('#hire').on('click', function () {
        window.open('mailto:smaharj1@ramapo.edu','_blank');
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
    
    $('#buttonBarForIntro a').on('click', function () {
        var id = $(this).data('id');
        $('html, body').animate({
                    scrollTop: $(""+id).offset().top
        }, 700);
    })
    
    var rows = $('.row').children('.info').each(function () {
        $(this).hide();
        $(this).data('isHidden','true');
    });
    
    



    // New oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    $('#experience tr').on('click', function() {
        clearOpenTabs("experience");
        var jobDetail = $(this).find('.display-option');
        jobDetail.toggle('fast');

        var logoDisplay = $(this).find('.logo-display');
        logoDisplay.toggle();
    });

    $('#extracurricular td').on('click', function() {
        clearOpenTabs("extracurricular");
        var jobDetail = $(this).find('.display-option');
        jobDetail.toggle('fast');

    });

    $('#skills li span').hover(function() {
        var isHigh = $(this).hasClass('high');
        var isMedium = $(this).hasClass('medium');

        // If the skill is high, then turn the background to green and put the width to 100%
        if (isHigh) {
            $(this).addClass('skill-high').animate({
                width: '100%'
            }, 'slow')
        } else if (isMedium) {
            $(this).addClass('skill-medium').animate({
                width: '50%'
            }, "slow");
        } else {
            $(this).addClass('skill-low').animate({
                width: '30%'
            }, "slow");
        }
    });


    $('.contacts').on('click', function() {
        window.open($(this).data("href"));
    });

   
});

function clearOpenTabs(givenID) {
    var foundElements = $('#' + givenID).children();
    $.each(foundElements, function(index,data) {
        var single = $(this).find('.display-option');
        single.css('display','none');

        var logo = $(this).find('.logo-display');
        logo.css('display','none');
    });

}