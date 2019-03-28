/* P R O G R E S S B A R */
const progressBar = document.getElementById('progress');

function radioLoop() {
    for(var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function () {
            progressBar.value = newValue;
        }
    }
}

// An if statement for every form :D
if (document.forms["form1"]) {
    var radios = document.forms["form1"].elements["routine"];
    var newValue = 25;
    radioLoop(newValue);
} else if (document.forms["form2"]) {
    var radios = document.forms["form2"].elements["skin_type"];
    var newValue = 50;
    console.log
    radioLoop(newValue);
} else if (document.forms["form3"]) {
    console.log(document.forms["form3"].elements["skin_concern"])
    var radios = document.forms["form3"].elements["skin_concern"];
    var newValue = 75;
    radioLoop(newValue);
} else if (document.forms["form4"]) {
    var radios = document.forms["form4"].elements["shave", "makeup"];
    var newValue = 100;
    radioLoop(newValue);
}



if (!('open' in document.createElement('details'))) {
    if (document.querySelectorAll && document.createElement('_').classList) {
      var headingTitle = document.querySelectorAll('summary')
      for (var i = 0; i < headingTitle.length; i++) {
        headingTitle[i].parentNode.childNodes[3].classList.add('hide')
        headingTitle[i].addEventListener('click', function (elem) {
          var headingContent = this.getAttribute('heading-content')
          this.parentNode.childNodes[3].classList.toggle('hide')
          this.parentNode.childNodes[3].classList.toggle('show')
        })
      }
    }
  }
