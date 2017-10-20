var questions = {
    1: {
      text: "Полиция арестовала предполагаемых смутьянов: всего за два дня было задержано 197 человек, из них три четверти, то есть 144 человека, в возрасте до 17 лет. О каком времени идет речь?",
      alternates:{
        1: {
          value: "Сентябрь 1905 года",
          comment: "Да, с 22 по 24 сентября рабочие типографского дела, в том числе подчиненные Сытина, устроили акции протеста в Москве"
        },
        2: {
          value: "Июнь 1960 года",
          comment: "Нет, ни стиляги, ни тунеядцы не были замечены на каких-либо акциях"
        },
        3: {
          value: "Май 2012 года",
          comment: "Нет, тогда за один день – 6 мая – на Болотной площади задержали более 570 человек"
        }
      },
      answer: 1
    },
    2: {
      text: "Кто и о ком так говорил: «Такой быстроты собирания сведений нет даже у правительства!»",
      alternates:{
        1: {
          value: "Иосиф Сталин про газету «Правда»",
          comment: "Нет, это мы придумали"
        },
        2: {
          value: "Сергей Юрьевич Витте о ежедневной газете «Русское слово»",
          comment: "Да, в то время Сытин также начал практиковать специальный телефон, у которого дежурил секретарь редакции, принимавший звонки от всех желающих дать информацию"
        },
        3: {
          value: "Дмитрий Медведев про сайт «Вконтакте»",
          comment: "Нет, так вслух никто не говорил"
        }
      },
      answer: 2
    },
    3: {
      text: "В каком году глава государства предложил финансировать издательства, а не почту, считая, что это «поможет развитию СМИ»?",
      alternates:{
        1: {
          value: "В 2017 году, когда Путин отметил неэффективность «Почты России»",
          comment: "Да, тогда же на заседании ОНФ он призвал помочь сохранить подписчиков издательств"
        },
        2: {
          value: "В 1906 году, когда Столыпин в статусе министра внутренних дел взял управление над почтой и телеграфами",
          comment: "В то время главой государства был Николай II, но и он не предлагал ничего подобного"
        },
        3: {
          value: "В 1675 году, когда Петр I вернулся из Европы и решил реформировать образование",
          comment: "Нет, в 1675 году ему было три года"
        }
      },
      answer: 1
    },
    4: {
      text: "«После работы газетчики шли в загул, но перед эти один из них съедал три тарелки борща». О чем речь?",
      alternates:{
        1: {
          value: "Тургенев и Гончаров после сдачи статьей в «Современник»",
          comment: "Нет, такого за ними не было замечено"
        },
        2: {
          value: "Гиляровский и Дорошевич уходили в загул после деделайнов в сытинской газете «Русское слово»",
          comment: "Да, особенную любовь к борщам питал публицист Влас Дорошевич"
        },
        3: {
          value: "Олег Кашин после работы присоединялся к друзьям в баре «Редакция»",
          comment: "Возможно, но о его любви к борщу ничего неизвестно"
        }
      },
      answer: 2
    },
    5: {
      text: "Он продал свою долю Лесину в газете, «считавшейся нетерпимой, сеющей смуту», всего за десять тысяч рублей. О ком это утверждение?",
      alternates:{
        1: {
          value: "Сытин продал свою долю в левой газете «День» банкирскому дому Григория Давидовича Лесина",
          comment: "Да, Сытин жаловался, что так о газете – в частности, о проеврейском уклоне – «говорят в Главном управлении по делам печати»"
        },
        2: {
          value: "Таким образом Гусинский продал часть активов в газете «Аргументы и факты» Михаилу Лесину",
          comment: "Нет, Гусинский никогда не владел этой газетой"
        },
        3: {
          value: "Так Лесин купил долю в «Независимой газете» Березовского",
          comment: "Нет, Михаил Лесин говорил в интервью «Дождю», что «печатный бизнес его не интересует»"
        }
      },
      answer: 1
    },
    6: {
      text: "В газете New York Times вышла статья, где российский медиамагнат пишет «…они довели себя беспробудным пьянством до полного безрассудства, пропивая последние пожитки. И теперь, на пороге коренного переустройства… мы обращаемся к Соединенным Штатам». Кто автор этих строк?",
      alternates:{
        1: {
          value: "Березовский написал эту статью в 1999 году",
          comment: "Нет, Борис Абрамович никогда не писал для NYT "
        },
        2: {
          value: "Сытин обратился к американским читателям в 1916 году",
          comment: "Верно, тогда журналист Монтгомери Скайлер писал материал о 50-летии издательской деятельности Сытина "
        },
        3: {
          value: "Михаил Фридман написал статью «Перемены, перемены» в 1996 году",
          comment: "Нет, он никогда не писал такой статьи"
        }
      },
      answer: 2
    }
  }

  var results = {
    0: "Вы заметили, что медиасреды имели и имеют гораздо больше общего, чем можно предположить.",
    1: "Вы неплохо ориентируетесь в околомедийной среде.",
    2: "Вас сложно запутать: «медиатусовка» – ваш конек!"
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

  function showComments(){
    var alternates = test.querySelectorAll('.label-answer');
    var checked_answer = getCheckedAnswer();
    alternates[checked_answer-1].innerText = questions[current_answer_number].alternates[checked_answer].comment;
  }

  function showAnswer(){
    showComments();
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
    document.getElementById('label-answer-'+checked_answer).style = "color: "+ color;
    document.getElementById('next-button').style = "visibility: visible";
  }

  function nextQuestion(){
    hideNextBtn();
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
      test.querySelector('#label-answer-'+(i+1)).style = "color: a53f3d";
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
    document.getElementById('question-text').innerText = questions[current_answer_number].text;
    test.querySelector('.question-image').src = "images/question"+current_answer_number+".svg";
    for(var i=1;i<=3;i++){
      document.getElementById('label-answer-'+i).innerText = questions[current_answer_number].alternates[i].value;
    }
  }

  function showResult(){
    document.getElementById('true-answers-counter').innerText = questions_counter;
    document.getElementById('test').innerHTML = document.getElementById('test-result').innerHTML;
    test.querySelector('.question-image').src = "images/result.svg";
    current_answer_number = 1;
    var res_elem = document.getElementById('result');
    if(questions_counter<3){
      res_elem.innerText = results[0];
    }
    else if(questions_counter<5){
      res_elem.innerText = results[1];
    }
    else{
      res_elem.innerText = results[2];
    }
  }