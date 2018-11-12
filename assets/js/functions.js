
 
 
 
 const cruise = document.querySelector('#main');
  const ahrens = cruise.offsetTop;

  function cruiseamerica() {
    if(window.scrollY >= ahrens) {
      document.body.style.paddingTop = cruise.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }

  }

  window.addEventListener('scroll', cruiseamerica);



  function myFunctions() {
    document.getElementById('comment-rachel').classList.remove('opend');
    document.getElementById('comment-asa').classList.add('opend');

    document.getElementById('rachelpic').src = "/rachel0.png";
    document.getElementById('asapic').src = "/asa.png";

    document.getElementById('comment-asa').style.display = 'block';
    document.getElementById('comment-rachel').style.display = 'none';
  }


  function myFunctions2() {
    document.getElementById('comment-rachel').classList.add('opend');
    document.getElementById('comment-asa').classList.remove('opend');
    document.getElementById('comment-asa').classList.add('close');

    document.getElementById('rachelpic').src = "/rachel.png";
    document.getElementById('asapic').src = "/asa0.png";

    document.getElementById('comment-asa').style.display = 'none';
    document.getElementById('comment-rachel').style.display = 'block';
  }





function myFunction() {
  var element = document.getElementById("newul");
  element.classList.toggle('show');
}

var button = document.querySelector('.menu-icon');
button.addEventListener('click', function (){
button.classList.toggle('open');
});



(function() { var v = document.getElementsByClassName("youtube-player"); for (var n = 0; n < v.length; n++) { v[n].onclick = function () { var iframe = document.createElement("iframe"); iframe.setAttribute("src", "//www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel="+ this.dataset.related +"&controls="+this.dataset.control+"&showinfo=" + this.dataset.info); iframe.setAttribute("frameborder", "0"); iframe.setAttribute("id", "youtube-iframe"); iframe.setAttribute("style", "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"); if (this.dataset.fullscreen == 1){ iframe.setAttribute("allowfullscreen", ""); } while (this.firstChild) { this.removeChild(this.firstChild); } this.appendChild(iframe); }; } })();





