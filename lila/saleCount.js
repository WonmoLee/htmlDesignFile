function getTime() { 
    now = new Date(); 
    dday = new Date(2022,12,15,18,00,00); 
    // 원하는 날짜, 시간 정확하게 초단위까지 기입.
    days = (dday - now) / 1000 / 60 / 60 / 24; 
    daysRound = Math.floor(days); 
    hours = (dday - now) / 1000 / 60 / 60 - (24 * daysRound); 
    hoursRound = Math.floor(hours); 
    minutes = (dday - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound); 
    minutesRound = Math.floor(minutes); 
    seconds = (dday - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound); 
    secondsRound = Math.round(seconds); 
    
    document.getElementById("counter1").innerHTML = hoursRound; 
    document.getElementById("counter2").innerHTML = minutesRound; 
    document.getElementById("counter3").innerHTML = secondsRound; 
    newtime = window.setTimeout("getTime();", 1000); 
} 

getTime();