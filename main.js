console.log("hello23");

// retira o hello screen
function hello() {
  $("#hello").css({"display": "none"});
  $("#intro").css({"display": "block"});
}

setTimeout(hello, 500);

// ir para o register
$("#btnregister").on("click", function() {
  // fazer reset aos campos de texto
  $("#nameinput").val("");
  $("#ageinput").val("");
  $("#jobinput").val("");
});

// ir para o login
// $("#btnstart").click(function() {
//   $("#intro").css({"display":"none"});
//   $("#loginpage").css({"display":"block"});
// });

// event listener para gravar o registo
$("#savebtn").on("click", saveUser);


// register -- guardar user info
function saveUser() {
  // $("#registerpage").css({"display":"none"});
  // $("#mainpage").css({"display":"block"});
  // $("header").css({"display":"block"});

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
  // $("#loginpage").css({"display":"none"});
  // $("#mainpage").css({"display":"block"});
  // $("header").css({"display":"block"});

  // adicionar o nome do user em questão, no main
  // solução para capitalizar a primeira letra em: https://flexiple.com/javascript-capitalize-first-letter/
  let user = $('#selectUser').find(":selected").text();
  const str = user;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  $("#username").text(str2);
});

$("#btnstart").on("click", addUser);
