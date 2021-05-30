const skillPer = document.querySelectorAll('.skill-per');
skillPer.forEach(function(el){
    let percent = el.getAttribute('per');
    el.style.width = percent+"%";
})