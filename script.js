function updateWheel() {
    var placeholders = [];
    for (var i = 1; i <= 8; i++) {
        placeholders.push(document.getElementById('placeholder' + i).value);
    }
    var spans = document.querySelectorAll('.box span b');
    for (var i = 0; i < spans.length; i++) {
        spans[i].innerText = placeholders[i];
    }
}

function myfunction() {
    var x = 1024; 
    var y = 9999;

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('box').style.transform = "rotate("+deg+"deg)";

    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000); 
}
