function changeTitle(){
    document.getElementById("title").innerHTML = "YEEEEE BOOOOY"
}
function goToNewWebsite(){
    window.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}
function json(){
    const obj = JSON.parse('{"name":"Anton", "age":"16", "car":"Nissan Skyline GTR R34", "city":"Örebro"}')
    document.getElementById("jsonTextName").innerHTML = obj.name;
    document.getElementById("jsonTextAge").innerHTML = obj.age;
    document.getElementById("jsonTextCar").innerHTML = obj.car;
    document.getElementById("jsonTextCity").innerHTML = obj.city;
}