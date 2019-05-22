(function () {
  document.body.classList.add('js-enabled');


  if (window.XMLHttpRequest) {
    console.log("yes")
    var formRequest1 = fetch('http://localhost:2000/quiz/1', {
        method: 'GET'
      }).then(function (response) {
        return response.text()
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var docForm = doc.body.querySelector('form');
        return docForm
      }).catch(function (err) {
        console.log('Failed to fetch page: ', err);
      });

    var formRequest2 = fetch('http://localhost:2000/quiz/2', {
        method: 'POST'
      }).then(function (response) {
        return response.text()
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");
        var docForm = doc.body.querySelector('form');
        return docForm
      }).catch(function (err) {
        console.log('Failed to fetch page: ', err);
      });
    
      
    var formRequest1 = formRequest('http://localhost:2000/quiz/1', 'GET').then((result) => {
      return result;
    });
    var formRequest2 = formRequest('http://localhost:2000/quiz/2', 'POST').then((result) => {
      return result;
    });
    var formRequest3 = formRequest('http://localhost:2000/quiz/3', 'POST').then((result) => {
      return result;
    });
    // console.log(formRequest3)
    // var formRequest3 = fetch('http://localhost:2000/quiz/3', {method: 'POST'}).then(function(response) {
    //   return response.text()})
    //   .then(function(html) {
    //     var parser = new DOMParser();
    //     var doc = parser.parseFromString(html, "text/html");
    //     var docForm = doc.body.querySelector('form');

    //     return docForm
    // }).catch(function(err) {console.log('Failed to fetch page: ', err);});

    // var formRequest4 = formRequest('http://localhost:2000/quiz/4');

    // var formRequest4 = formRequest('http://localhost:2000/quiz/4');
    // console.log(formRequest4)

    // fetch('http://localhost:2000/quiz/4', {method: 'POST'}).then(function(response) {
    //   return response.text()})
    //   .then(function(html) {
    //     var parser = new DOMParser();
    //     var doc = parser.parseFromString(html, "text/html");
    //     var docForm = doc.body.querySelector('form');
    //     // console.log(docForm)
    //     return docForm
    // }).catch(function(err) {console.log('Failed to fetch page: ', err);});

    // var combinedForms = [{'form1':'','form2':'','form3':'','form4':''}];



    var combinedForms = [];

    var x = async function check() {
      let result = await Promise.all([formRequest1, formRequest2, formRequest3]).then(function (values) {
        combinedForms["form1"] = values[0];
        combinedForms["form2"] = values[1];
        combinedForms["form3"] = values[2];
        combinedForms["form4"] = values[3];
        return values;
      })
      sayHello(result);
    }

    function sayHello(result) {
      console.log('hello :): 1st', result[0])
      console.log('hello :) 2nd', result[1])
      console.log('hello :) 3rd', result[2])
      // append to dom
    }

    x();

    async function formRequest(formURL, postType) {
      let result = fetch(formURL, {
          method: postType
        }).then(function (response) {
          return response.text()
        })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, "text/html");
          var docForm = doc.body.querySelector('form');
          return docForm
        }).catch(function (err) {
          console.log('Failed to fetch page: ', err);
        });
      return result;
    }
  };




  var startScreen = querySelector('.start');





  // var actionButton = document.querySelector(".action-button").addEventListener("click", function() {
  //     console.log("as;dkfjsal")
  // })


  // var myForm = document.routine;
  // var submitButton = document.getElementById("nothing");
  // submitButton.addEventListener("click", function() {
  //     console.log(document.skin_type)
  //     document.routine.submit()
  // })



  // /* P R O G R E S S B A R */

  // var progressBar = document.getElementById('progress');

  // function radioLoop() {
  //     for(var i = 0, max = radios.length; i < max; i++) {
  //         radios[i].onclick = function () {
  //             document.getElementById("submit").classList.add("visible")
  //             progressBar.value = newValue;
  //         }
  //     }
  // }


  // if (document.forms) {
  //     var formElem = document.forms.elements;
  //     for(var i = 0, max = formElem.lenght; i < max; i++) {
  //         formElem[i].onclick = function() {
  //             console.log(formElem)
  //         }
  //     }
  // }

  // // An if statement for every form :D
  // if (document.forms["form1"]) {
  //     var radios = document.forms["form1"].elements["routine"];
  //     var newValue = 1;
  //     radioLoop(newValue);
  // } else if (document.forms["form2"]) {
  //     var radios = document.forms["form2"].elements["skin_type"];
  //     var newValue = 2;
  //     console.log
  //     radioLoop(newValue);
  // } else if (document.forms["form3"]) {
  //     console.log(document.forms["form3"].elements["skin_concern"])
  //     var radios = document.forms["form3"].elements["skin_concern"];
  //     var newValue = 3;
  //     radioLoop(newValue);
  // } else if (document.forms["form4"]) {
  //     var radios = document.forms["form4"].elements["shave"];
  //     var newValue = 4;
  //     radioLoop(newValue);
  // }

  document.body.onload

  /* F E A T U R E  D E T E C T I O N */

  // if (!('open' in document.createElement('details'))) {
  //     if (document.querySelectorAll && document.createElement('_').classList) {
  //       var headingTitle = document.querySelectorAll('summary')
  //       for (var i = 0; i < headingTitle.length; i++) {
  //         headingTitle[i].parentNode.childNodes[3].classList.add('hide')
  //         headingTitle[i].addEventListener('click', function (elem) {
  //           var headingContent = this.getAttribute('heading-content')
  //           this.parentNode.childNodes[3].classList.toggle('hide')
  //           this.parentNode.childNodes[3].classList.toggle('show')
  //         })
  //       }
  //     }
  //   }
})();