console.log("hello20");

// ir para o register
$("#btnregister").on("click", function() {

  $("#intro").css({"display": "none"});
  $("#registerpage").css({"display":"block"});

  // fazer reset aos campos de texto
  $("#nameinput").val("");
  $("#ageinput").val("");
  $("#jobinput").val("");
});

// ir para o login
$("#btnstart").click(function() {
  $("#registerpage").css({"display":"none"});
  $("#intro").css({"display":"none"});
  $("#loginpage").css({"display":"block"});
});

// event listener para gravar o registo
$("#savebtn").on("click", saveUser);

// register -- guardar user info
function saveUser() {
  $("#registerpage").css({"display":"none"});
  $("#mainpage").css({"display":"block"});
  $("header").css({"display":"block"});

  console.log("estou aqui");
  let user;
  let users;
  let n = $("#nameinput").val();
  let a = $("#ageinput").val();
  let j = $("#jobinput").val();

  // adicionar o nome do user em questão no main
  // solução para capitalizar a primeira letra em: https://flexiple.com/javascript-capitalize-first-letter/
  const str = n;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(str2);
  $("#username").text(str2);

  user = {name: n, age: a, job: j };
console.log(user);
  // ver se existe na localStorage -- getItem funciona como um loop q seleciona tudo
  if (localStorage.getItem("users") != null) {
    // se existe, ler o local storage
    let JSONusers = localStorage.getItem("users");

    // transforma o texto existente num objeto de javascript
    users = JSON.parse(JSONusers);
    // não esquecer que esta variável é um [ {ARRAY} {de} {objetos} ]
  } else {
    // ainda nao gravamos nada ("first-run")
    users = [];
    console.log("no users");
  }

  users.push(user);

  // prepara para gravar a lista de novo (bota o objeto em texto…)
let JSONusers = JSON.stringify(users);

// gravar na localStorage
localStorage.setItem("users", JSONusers);
}


function addUser() {
  // ler o local storage
  let users;
  let user;

  if (localStorage.getItem("users") == null) {
    console.log("ups… nothing to see here");
  } else {
    let JSONusers = localStorage.getItem("users");
    users = JSON.parse(JSONusers);

    // o mesmo que um loop
    users.forEach(function (user) {
      let person = $(`<option>${user.name}</option>`);
      $("#selectUser").append(person);
    });
  }
}

$("#btnenter").click(function() {
  $("#loginpage").css({"display":"none"});
  $("#mainpage").css({"display":"block"});
  $("header").css({"display":"block"});

  // adicionar o nome do user em questão, no main
  // solução para capitalizar a primeira letra em: https://flexiple.com/javascript-capitalize-first-letter/
  let user = $('#selectUser').find(":selected").text();
  const str = user;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  $("#username").text(str2);
});

$("#btnstart").on("click", addUser);


// show records
$("#btnrecords").on( "click", function() {

var j = document.querySelector("#records");

  if (j.style.top == "100vh") {
    j.style.top = "80px";
    $("#username").delay(300).hide(0);
  } else {
    j.style.top = "100vh";
    $("#username").show(0);
  }
});

var m = document.querySelector("#mainpage");

// menu open/close {
$("#menu-box").on("click", function() {
  $("#menuToggle").children("ul").toggle();
});

// hide and show everything on menu click
// $("#menu-box").on("click", function() {
//
//
// console.log("clicked");
//
//   if (m.style.display === "block") {
//     m.style.display = "none";
//   } else if (m.style.display === "none") {
//     m.style.display = "block";
//   } else {}
// });

$("#menu-box").on("click", function() {
  $("#menuToggle").children("ul").toggle();
  $("#menu-box").children("span").toggle();
  console.log('hello');
});

// quiz page click
$("#quiz").on("click", function() {
  $("#quizpage").css({"display": "block"});
  $("#mainpage").css({"display": "none"});
  $("#personalpage").css({"display": "none"});
  $("#aboutpage").css({"display": "none"});

  // .prop() found in: https://stackoverflow.com/questions/17420534/check-uncheck-checkbox-using-jquery
  $("#checkbox").prop('checked', false);
});

// homescreen click
$("#home").on("click", function() {
  $("#mainpage").css({"display": "block"});
  $("#quizpage").css({"display": "none"});
  $("#personalpage").css({"display": "none"});
  $("#aboutpage").css({"display": "none"});

  $("#checkbox").prop('checked', false);
});

// personal page click
$("#personal").on("click", function() {
  $("#personalpage").css({"display": "block"});
  $("#mainpage").css({"display": "none"});
  $("#quizpage").css({"display": "none"});
  $("#aboutpage").css({"display": "none"});

  $("#checkbox").prop('checked', false);
});

// about page click
$("#about").on("click", function() {
  $("#aboutpage").css({"display": "block"});
  $("#mainpage").css({"display": "none"});
  $("#quizpage").css({"display": "none"});
  $("#personalpage").css({"display": "none"});

  $("#checkbox").prop('checked', false);
});
