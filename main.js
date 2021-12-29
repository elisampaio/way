console.log("hello20");

let quizzdates = [];

// ir para o register
$("#btnregister").on("click", function () {

  $("#intro").css({ "display": "none" });
  $("#registerpage").css({ "display": "block" });

  // fazer reset aos campos de texto
  $("#nameinput").val("");
  $("#ageinput").val("");
  $("#jobinput").val("");
});

// ir para o login
$("#btnstart").click(function () {
  $("#registerpage").css({ "display": "none" });
  $("#intro").css({ "display": "none" });
  $("#loginpage").css({ "display": "block" });
});

// event listener para gravar o registo
$("#savebtn").on("click", saveUser);

// register -- guardar user info
function saveUser() {
  $("#registerpage").css({ "display": "none" });
  $("#mainpage").css({ "display": "block" });
  $("header").css({ "display": "block" });
  $("#bg-circles").css({ "display": "block" });

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

  user = { name: n, age: a, job: j };
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

$("#btnenter").click(function () {
  $("#loginpage").css({ "display": "none" });
  $("#mainpage").css({ "display": "block" });
  $("header").css({ "display": "block" });
  $("#bg-circles").css({ "display": "block" });

  // adicionar o nome do user em questão, no main
  // solução para capitalizar a primeira letra em: https://flexiple.com/javascript-capitalize-first-letter/
  let user = $('#selectUser').find(":selected").text();
  const str = user;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  $("#username").text(str2);
});

$("#btnstart").on("click", addUser);


// show records
$("#btnrecords").on("click", function () {

  let j = document.querySelector("#records");

  if (j.style.top == "100vh") {
    j.style.top = "80px";
    $("#username").delay(300).hide(0);
  } else {
    j.style.top = "100vh";
    $("#username").show(0);
  }
});


// menu open/close {
$("#menu-box").on("click", function () {
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

$("#menu-box").on("click", function () {
  $("#menuToggle").children("ul").toggle();
  $("#menu-box").children("span").toggle();
  console.log('hello');
});

// quiz page click
$("#quiz").on("click", function () {
  $("#quizpage").css({ "display": "block" });
  $("#mainpage").css({ "display": "none" });
  $("#personalpage").css({ "display": "none" });
  $("#aboutpage").css({ "display": "none" });

  // .prop() found in: https://stackoverflow.com/questions/17420534/check-uncheck-checkbox-using-jquery
  $("#checkbox").prop('checked', false);
});

// homescreen click
$("#home").on("click", function () {
  $("#mainpage").css({ "display": "block" });
  $("#quizpage").css({ "display": "none" });
  $("#personalpage").css({ "display": "none" });
  $("#aboutpage").css({ "display": "none" });

  $("#checkbox").prop('checked', false);
});

// personal page click
$("#personal").on("click", function () {
  $("#personalpage").css({ "display": "block" });
  $("#mainpage").css({ "display": "none" });
  $("#quizpage").css({ "display": "none" });
  $("#aboutpage").css({ "display": "none" });

  $("#checkbox").prop('checked', false);
});

// about page click
$("#about").on("click", function () {
  $("#aboutpage").css({ "display": "block" });
  $("#mainpage").css({ "display": "none" });
  $("#quizpage").css({ "display": "none" });
  $("#personalpage").css({ "display": "none" });

  $("#checkbox").prop('checked', false);
});

// ter as entries anteriores já presentes a cada nova sessão
$(document).ready(function () {
  addEntries();
  addRecord();

});

// personal page editable text box
$(".personal-entry").on("click", function () {
  var value = $('.personal-entry').attr('contenteditable');

  //se o valor for negativo
  if (value == 'false') {
    //torna o texto editável
    $('.personal-entry').attr('contenteditable', 'true');
    //adiciona a data e a hora
    // $(".personal-entry").text("22.12.21");
  } else { };
});

//ao clicar no butão de save
$("#save-box").on("click", function () {

  let entries;
  let entry = $(".personal-entry").html();
  let value = $('#editable').attr('contenteditable');

  //o texto já não é editável
  $('#editable').attr('contenteditable', 'false');


  // ver se existe na localStorage
  if (localStorage.getItem("entries") != null) {
    let JSONentries = localStorage.getItem("entries");
    // let savedEntries = localStorage.getItem("entries");
    entries = JSON.parse(JSONentries);

  } else {
    // ainda nao gravamos nada ("first-run")
    entries = [];
    console.log("no entries");
  }

  entries.push(entry);

  let JSONentries = JSON.stringify(entries);

  localStorage.setItem("entries", JSONentries);

  addEntries();
});

function addEntries() {

  $(".entradas").html("");

  let entries;

  if (localStorage.getItem("entries") == null) {
    console.log("no entries yet...");
  } else {
    let JSONentries = localStorage.getItem("entries");
    entries = JSON.parse(JSONentries);
    // let savedEntry = localStorage.getItem("entries");

    entries.reverse();

    // ir buscar a data atual
    let now = new Date();
    let d = now.getDate();
    let m = now.getMonth() + 1;
    let y = now.getFullYear();

    // adicionar as entries na página
    entries.forEach(function (entry) {
      $(".entradas").append(`<p class="new-entry"> <span class="p-date">${d}.${m}.${y}</span> <br>${entry}</p>`);
    });
  }

  $(".personal-entry").text("->");
}

//QUIZ -- CIRCLES

// document.addEventListener('DOMContentLoaded', () => { // Apenas corre após o DOM estar carregado
//    console.log('DOM completamente carregado'); // Manda a confirmação para a consola
// });
function changeColor(getColor) {
  let ellipse = document.querySelector('.div');
  let selectColor = getColor.value;
  ellipse.style.background = selectColor;

  // Cor aleatória para a elipse difusa
  let cursorColor = selectColor;

  // FUNÇÕES ------------------------------------------------------------------
  // Cor aleatória para a elipse difusa
  function randomCursorColor() {
    document.querySelector('#mouseCircle').style.background = cursorColor;
    //mouseCircle.setAttribute("style", "z-index=99;");
  }

  randomCursorColor();

  //percursos diferentes para cada circulo
  let h = $(window).height();
  let w = $(window).width();

  function caminho(myclass) {
    function makeNewPosition() {
      let nh = Math.floor(Math.random() * h) - 100;
      let nw = Math.floor(Math.random() * w) - 100;
      return [nh, nw];
    }

    let newq = makeNewPosition()

    $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
      caminho(myclass);
    });
  }

  $(document).ready(function () {
    caminho('#mouseCircle'); // atribuir 1 caminho a cada circulo
  });
}


function changeColor1(getColor) {
  let ellipse1 = document.querySelector('.div1');
  let selectColor1 = getColor.value;
  ellipse1.style.background = selectColor1;

  // Cor aleatória para a elipse difusa
  // Math.random retorna um número entre 0 e 1
  let cursorColor = selectColor1;

  // FUNÇÕES ----------------------------------------------------------------------------------------------------------------------------------
  // Cor aleatória para a elipse difusa
  function randomCursorColor() {
    document.querySelector('#mouseCircle1').style.background = cursorColor;
    //mouseCircle1.setAttribute("style", "z-index=99;");
  }

  randomCursorColor();

  $(document).ready(function () {
    caminho('#mouseCircle1'); // atribuir 1 caminho a cada circulo
  });

  //percursos diferentes para cada circulo
  let h = $(window).height();
  let w = $(window).width();

  function caminho(myclass) {
    function makeNewPosition() {
      let nh = Math.floor(Math.random() * h) - 100;
      let nw = Math.floor(Math.random() * w) - 100;
      return [nh, nw];
    }

    let newq = makeNewPosition()

    $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
      caminho(myclass);
    });
  }
}

function changeColor2(getColor) {
  let ellipse2 = document.querySelector('.div2');
  let selectColor2 = getColor.value;
  ellipse2.style.background = selectColor2;

  // Cor aleatória para a elipse difusa
  // Math.random retorna um número entre 0 e 1
  let cursorColor = selectColor2;

  // FUNÇÕES -------------------------------------------------------------------
  // Cor aleatória para a elipse difusa
  function randomCursorColor() {
    document.querySelector('#mouseCircle2').style.background = cursorColor;
    //mouseCircle2.setAttribute("style", "z-index=9;");
  }

  randomCursorColor();

  $(document).ready(function () {
    caminho('#mouseCircle2'); // atribuir 1 caminho a cada circulo
  });

  //percursos diferentes para cada circulo
  let h = $(window).height();
  let w = $(window).width();

  function caminho(myclass) {
    function makeNewPosition() {
      let nh = Math.floor(Math.random() * h) - 100;
      let nw = Math.floor(Math.random() * w) - 100;
      return [nh, nw];
    }

    let newq = makeNewPosition()

    $(myclass).animate({ top: newq[0], left: newq[1] }, 5000, function () {
      caminho(myclass);
    });
  }
}


// GUARDAR RESPOSTAS DO QUIZ E FAZÊ-LAS APARECER NOS RECORDS -----------------------------------------------------------------------------
$("#savebtnQuiz").on("click", createRecord);

function createRecord() {

  // hide quiz and display records
  $("#quizpage").css({ "display": "none" });
  $("#mainpage").css({ "display": "block" });
  $("#records").css({ "top": "100vh" });

  // criar um record e guardar na localStorage
  // recolher as respostas em variáveis
  let record;
  let records;
  // Fazer com que o string de texto tenha a primeira letra maiúscula
  let day = $("#textareainput1").val();
  let q1 = day.charAt(0).toUpperCase() + day.slice(1);

  let q2 = $('#selectHowAreYouFeeling').find(":selected").text();

  let q3 = $('#selectHowDidYouSleep').find(":selected").text();

  let q4 = $('#selectDidYouExercised').find(":selected").text();

  // Fazer com que o string de texto tenha a primeira letra maiúscula
  let social = $("#textareainput2").val();
  let q5 = social.charAt(0).toUpperCase() + social.slice(1);

  // ir buscar a data atual
  let now = new Date();
  let dd = now.getDate();
  let mm = now.getMonth()+1;
  let yyyy = now.getFullYear();

  let today = dd + '.' + mm + '.' + yyyy;
  // pôr a data num string para esta não se alterar
  let todayString = String(today);

  // criar um objeto dos records
  record = {date: todayString, day: q1, feel: q2, sleep: q3, exercise: q4 , social: q5};

  // ver se existe na localStorage -- getItem funciona como um loop q seleciona tudo
if (localStorage.getItem("records") != null) {
  // se existe, ler o local storage
  let JSONrecords = localStorage.getItem("records");

  // transforma o texto existente num objeto de javascript
  records = JSON.parse(JSONrecords);
  // não esquecer que esta variável é um [ {ARRAY} {de} {objetos} ]

} else {
  // ainda nao gravamos nada ("first-run")
  records = [];
  console.log("no records");
}

records.push(record);
// prepara para gravar a lista de novo (bota o objeto em texto…)
let JSONrecords = JSON.stringify(records);

// gravar na localStorage
localStorage.setItem("records", JSONrecords);

console.log(record);

    let dateCheck = false;

    // código inspirado em: https://stackoverflow.com/questions/28362404/how-to-delete-a-specific-item-object-in-localstorage?rq=1

    // se não existir nenhum record adiciona à página
    if (records.length == 1) {
      // localStorage.getItem("records") === 1
      addRecord();
      console.log('first record added!');

    // se a data presente num record for igual à de hoje
    } else if (record.date == today) {
      dateCheck = true;

      // se a data for igual
      if (dateCheck == true) {
        // buscar o penúltimo valor do array
        let rLength = records.length;
        let pos = rLength - 2;

        // ir buscar à localStorage
        let JSONrecords = localStorage.getItem("records");
        records = JSON.parse(JSONrecords);

        // eliminar-lo
        records.splice(pos, 1);
        console.log('quiz replaced');

        // voltar a pôr na localStorage
        let JSONrecords2 = JSON.stringify(records);
        localStorage.setItem("records", JSONrecords2);

        // fazer update nos records
        addRecord();
      } else {};

    } else {
      // se a data não for igual, adiciona o record
      addRecords();
    };
}


function addRecord() {
  // ler o local storage
  let records;
  let record;

  // fazer reset das respostas
  $("#textareainput1").val("");
  $('#selectHowAreYouFeeling').val("");
  $('#selectHowDidYouSleep').val("");
  $("#textareainput2").val("");

  if (localStorage.getItem("records") == null) {
    console.log("ups… nothing to see here");
  } else {
    let JSONrecords = localStorage.getItem("records");
    records = JSON.parse(JSONrecords);

    // reverter a ordem para aparecer do mais recente para o mais antigo
    records.reverse();

    // fazer o reset do html, caso exista qualquer coisa
    $("#records_day").html("");

    // o mesmo que um loop
    records.forEach(function (record) {
      let newRecord = $(`<div class="newRecord">
        <p class="p-date">${record.date}</p>
        <p>${record.day}</p>
        <p>${record.feel}</p>
        <p>${record.sleep}</p>
        <p>${record.social}</p>
        </div>`);
      $("#records_day").append(newRecord);
    });
  }
}


// // exemplo de código one day passed
//
// // checks if one day has passed
// function hasOneDayPassed() {
//   // get today's date por exemplo "28/12/2021"
//   let date = new Date().toLocaleDateString();
//
//   // if there's a date in localstorage and it's equal to the above: inferring a day has yet to pass since both dates are equal
//   if (localStorage.yourapp_date == date)
//     return false;
//
//   localStorage.yourapp_date = date;
//   return true;
// }
//
// // function which should run once a day
// function runOncePerDay() {
//   if (!hasOneDayPassed()) return false;
//
//   // your code below
//   alert('Once a day!');
//   document.body.style.backgroundColor = "red";
// }
//
// runOncePerDay(); // run the code
// runOncePerDay(); // does not run the code
