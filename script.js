var questions = {
    1: {
      text: "Вопрос №1.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №1."
    },
    2: {
      text: "Вопрос №2.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №2."
    },
    3: {
      text: "Вопрос №3.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №3."
    },
    4: {
      text: "Вопрос №4.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №4."
    },
    5: {
      text: "Вопрос №5.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №5."
    },
    6: {
      text: "Вопрос №6.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №6."
    },
    7: {
      text: "Вопрос №7.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №7."
    },
    8: {
      text: "Вопрос №8.",
      alternates:{
        1: "Вариант ответа 1",
        2: "Вариант ответа 2",
        3: "Вариант ответа 3"
      },
      answer: 1,
      comment: "Здесь будет комментарий к вопросу №8."
    }
  }

  var results = {
    0: "Вам нужно чаще читать медиазону ",
    1: "Вы неплохо разбираетесь в повестке",
    2: "Вы король медиатусовки!"
  }

  var ANSWERS_COUNT = getAnswersCount();
  var current_answer_number = 1;
  var questions_counter = 0;
  var test = document.getElementById('test');

  function getAnswersCount(){
    var counter = 0;
    for(answer in questions){
      counter++
    }
    return counter;
  }

  function showBackground(){
    hideContent();
    document.getElementById('background').style = "filter: blur(0px)";
  }

  function blurBackground(){
    document.getElementById('background').style = "filter: blur(2px)";
  }

  function showContent(content = "biography-block") {
    if(content === "test-block"){
      showTest();
      setTimeout(resetChangedAnswer,0);
    }
    contentElem = document.getElementById('content');
    contentElem.innerHTML = document.getElementById(content).innerHTML;
    contentElem.querySelector('div').style = "min-height:"+(window.innerHeight-300)+"px";
    test = document.getElementById('test');
    blurBackground();
  }

  function hideContent(){
    document.getElementById('content').innerHTML = '';
  }

  function showTest(){
    current_answer_number = 1;
    questions_counter = 0;
    test.innerHTML = document.getElementById('test-body').innerHTML;
    showAlternates();
  }

  function showComment(state = 'block'){
    var comment = test.querySelector('#comment');
    comment.style = "display:" + state;
    comment.innerText = questions[current_answer_number].comment;
  }

  function showAnswer(){
    showComment();
    showNextBtn();
    disableRadioBtns(true);
  }

  function disableRadioBtns(toggle){
    var rs = document.querySelectorAll('.radio');
    for(var i=0;i<rs.length;i++){
      rs[i].disabled = toggle;
    }
  }

  function hideNextBtn(){
    document.getElementById('next-button').style = "visibility: hidden";
  }

  function showNextBtn() {
    var checked_answer = getCheckedAnswer();
    var color = checkAnswer(checked_answer) ? '#21af21' : '#ea2b2b';
    if(current_answer_number === ANSWERS_COUNT){
      visibility = "hidden";
      showResult();
      
    }
    document.getElementById('label_answer'+checked_answer).style = "color: "+ color;
    document.getElementById('next-button').style = "visibility: visible";
  }

  function nextQuestion(){
    hideNextBtn();
    showComment("none");
    pageCounterInc();
    resetChangedAnswer();
    showAlternates();
  }

  function getCheckedAnswer(){
    var alternates = document.getElementsByClassName('radio');
    for(number = 1; number <= alternates.length; number++){
      if(alternates[number-1].checked){
        return number;
      }
    }
  }

  function pageCounterInc(){
    var page_counter = document.getElementById("page-counter");
    page_counter.innerText = ++current_answer_number;
  }

  function resetChangedAnswer(){
    var radioBtns = test.querySelectorAll('.radio');
    for(var i=0;i<radioBtns.length;i++){
      radioBtn = radioBtns[i];
      radioBtn.checked = false;
      test.querySelector('#label_answer'+(i+1)).style = "color: a53f3d";
    }
    document.getElementById('comment').innerText = "";
    disableRadioBtns(false);
  }

  function checkAnswer(current_answer_value){
    if(current_answer_value == questions[current_answer_number].answer){
      questions_counter++;
      return true;
    }

    return false;
  }

  function showAlternates(){
    for(var i=1;i<=3;i++){
      document.getElementById('label_answer'+i).innerText = questions[i].text;
    }
  }

  function showResult(){
    document.getElementById('true-answers-counter').innerText = questions_counter;
    document.getElementById('test').innerHTML = document.getElementById('test-result').innerHTML;
    current_answer_number = 1;
    var res_elem = document.getElementById('result');
    if(questions_counter<5){
      res_elem.innerText = results[0];
    }
    else if(questions_counter<7){
      res_elem.innerText = results[1];
    }
    else{
      res_elem.innerText = results[2];
    }
  }