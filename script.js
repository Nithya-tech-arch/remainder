var wakeup=6;
var noon=12;
var lunchtime=1;
var naptime=lunchtime+1;
var coffeeTime;
var evening=18;//6 pm

var showCurrentTime = function(){
    var clock=document.getElementById('clock');
    var currentTime=new Date();
    var hours=currentTime.getHours();
    var mins=currentTime.getMinutes();
    var secs=currentTime.getSeconds();
    var meridian="AM";

    if(hours>=noon){
        meridian="PM";
    }
    if(hours>12){
        hours=hours-12;
    }
    if(mins<10){
        mins="0" + mins;
    }
    if(secs<10){
        secs="0" + secs;
    }
    var clockTime=hours + ":" + mins + ":" + secs + " " + meridian + "!";
    clock.innerText=clockTime;
};

var updateClock = function(){
    var time = new Date().getHours();
    var messageText;
    var image="./assets/clock-img.jpg";
    var timeEventJS=document.getElementById('timeEvent');
    var lolcatImageJS=document.getElementById('clockimage');
    if(time==coffeeTime){
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcoffee-cup&psig=AOvVaw3dlTnkWXEfl0FMl-2tp-Vm&ust=1624979596603000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKDuwPDOuvECFQAAAAAdAAAAABAD";
        messageText="Its coffee Time";
    }
    else if(time==lunchtime){
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodhousekeeping.com%2Ffood-recipes%2Fhealthy%2Fg960%2Fhealthy-lunch-ideas%2F&psig=AOvVaw2MSWfzYn7GbejYCIZePdEB&ust=1624979657811000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLiRqY_PuvECFQAAAAAdAAAAABAD";
        messageText="It's Lunch Time";
    }
    else if(time==naptime){
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.todaysparent.com%2Fkids%2Fkids-health%2Fsnooze-control-an-age-by-age-guide-to-naps%2F&psig=AOvVaw3_608k-Q3sH_4ku9_1_TP6&ust=1624979726899000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNjx3a7PuvECFQAAAAAdAAAAABAD";
        messageText="Its nap time!";
    }
    else if(time<noon){
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lolaflora.com%2Fgood-morning-quotes&psig=AOvVaw0JkXLLe0Fp79Rk0VAumm8E&ust=1624979803185000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDl4tPPuvECFQAAAAAdAAAAABAD";
        messageText="Good Morning!";
    }
    else if(time>=evening){
        image="./assets/evening.png";
        messageText="Hi!, Hurray! Good Evening!";
    }
    else{
        image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F668714244663069040%2F&psig=AOvVaw2YZhUSP3hBYmEVU_og9lgo&ust=1624979916378000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDw5ojQuvECFQAAAAAdAAAAABAD";
        messageText="Good Aftrn!";

    }
    console.log(messageText); 
    timeEventJS.innerText = messageText;
    clockimage.src = image;

    showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyButton = document.getElementById("setRemButton");
var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);

