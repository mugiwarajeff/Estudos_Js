(function($){
    $.fn.timer = function(options){
        const finalOptions = $.extend({
            message: "em breve",
            time: "23:59:59"
        }, options);

        const dezeneHour = $("<span class='digito'>").html("0");
        const unityHour = $("<span class='digito'>").html("0");
        const dezeneMinute = $("<span class='digito'>").html("0");
        const unityMinute = $("<span class='digito'>").html("0");
        const dezeneSecond = $("<span class='digito'>").html("0");
        const unitySecond = $("<span class='digito'>").html("0");

        const hourSpliter = $("<span class='separador'>").html(":");
        const minuteSpliter = $("<span class='separador'>").html(":");

        const message = $("<div class='mensagem'>").html(finalOptions.message);
        $(this).addClass("temporizador");

        $(this).append(
            dezeneHour, unityHour,hourSpliter,
            dezeneMinute, unityMinute, minuteSpliter, 
            dezeneSecond, unitySecond, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);

        const targetTime = regex.exec(finalOptions.time);
        //console.log(targetTime)

        let timer = setInterval(() => {
            const now = new Date();
            const target = new Date();

            target.setHours(targetTime[1]);
            target.setMinutes(targetTime[2]);
            target.setSeconds(targetTime[3]);

            const differenceInMili = target.getTime() - now.getTime();

            if (differenceInMili >= 0){
                const difference = regex.exec(new Date(differenceInMili).toISOString());

                dezeneHour.html(difference[1][0]);
                unityHour.html(difference[1][1]);
                dezeneMinute.html(difference[2][0]);
                unityMinute.html(difference[2][1]);
                dezeneSecond.html(difference[3][0]);
                unitySecond.html(difference[3][1]);
            }else{
                clearInterval(timer)
            }
        }, 1000)
    }
})(jQuery)