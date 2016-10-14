

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
    
    



    // New oneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    // This controls the hover for travel timeline
    $('#travelTimeline img').hover(function() {
            $(this).removeClass("desaturate").animate({
                zoom: '120%'
            }, "fast");
        },
        function() {
            $(this).addClass("desaturate").animate({
                zoom: '100%'
            }, "fast");
        });

    $('#experience tr').on('click', function() {
        var jobDetail = $(this).find('.display-option');
        jobDetail.toggle('fast');

        var logoDisplay = $(this).find('.logo-display');
        logoDisplay.toggle();
    });

    $('#extracurricular td').on('click', function() {
        var jobDetail = $(this).find('.display-option');
        jobDetail.toggle('fast');

        var logoDisplay = $(this).find('.logo-display');
        logoDisplay.toggle();
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

    $('#inputImage').bind('change', function() {
        alert("ok");
        var mainFile = this;
        $.ajax({
            type: 'POST',
            url: "/processImage",
            data: {
                inputFile: mainFile
            },
            dataType: 'json',
            success: function(data) {
                console.log('success', data);

            },
            error: function(exception) {
                alert('Exeption:' + exception);
            }
        });
        e.preventDefault();
    });

    $('.contacts').on('click', function() {
        window.open($(this).data("href"));
    });

   
});