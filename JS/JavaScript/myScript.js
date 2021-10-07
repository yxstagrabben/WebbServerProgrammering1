const text = ["YEEEEEE BOOOOOY", "WEE", "LOOOOVVEEEEEE", "WEBBBB", "SERVER", "PROGRAMMING", "AND", "ARNAUD"];

var amount = -1;

function changeTitle(){
    if(amount === 7)
    {
        amount = -1;
    }
    amount = amount + 1;
    document.getElementById("title").innerHTML = text[amount];
    console.log(amount);
}
function goToNewWebsite(){
    window.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}

window.onload = function(){
    const obj = JSON.parse('{"name":"Anton","age":"16","car":"Nissan Skyline GTR R34","city":"Örebro"}');
    document.getElementById("jsonTextName").innerHTML = obj.name;
    document.getElementById("jsonTextAge").innerHTML = obj.age;
    document.getElementById("jsonTextCar").innerHTML = obj.car;
    document.getElementById("jsonTextCity").innerHTML = obj.city;
}