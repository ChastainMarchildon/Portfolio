
    $(function() {
        $("#splashscreen").show().delay(3000).fadeOut(500);
    });
    function splash(param) {
        var time = param;
        setTimeout(function () {
          $('#splashscreen').hide();
        }, time);
       }
