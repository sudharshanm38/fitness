var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');
var navigation = document.getElementById('navigation');
var a= 1;
menuBtn.addEventListener('click', function() {

  if(a){
    navigation.classList.add('mobile');
    a=0;
  }
  else {
    navigation.classList.remove('mobile');
    a=1;
  }
})
closeBtn.addEventListener('click', function() {
  console.log('close');
  navigation.classList.remove('mobile');
})
  /*go to top*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(window.innerWidth > 480)
  {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  }
  else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
