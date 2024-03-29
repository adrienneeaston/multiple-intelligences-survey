'use strict';

let userForm = document.getElementById('userform');
let surveyProgress = document.getElementById('survey-progress');
let surveyQuestion = document.getElementById('survey-question');
let surveyAnswers = document.getElementById('survey-answers');
let answerTrue = document.createElement('li');
let answerFalse = document.createElement('li');
let question = document.createElement('p');
let intelReport = document.getElementById('survey-results');

let testQuestions = [];
let iqArray = [];
let savedUser = [];
let currentQuestion = 0;
let linguistCount = 0;
let logicCount = 0;
let musicalCount = 0;
let bodilyCount = 0;
let spatialCount = 0;
let interCount = 0;
let intraCount = 0;

let UserInfo = function (first, last, birthdate, testdate) {
  this.firstName = first;
  this.lastName = last;
  this.birthDate = birthdate;
  this.testDate = testdate;
};

let IqType = function (qvalue, category, index, filepath) {
  this.qvalue = qvalue;
  this.category = category;
  this.index = index;
  this.filepath = filepath;
  testQuestions.push(this);
};

let IqResults = function (linguistCount, logicCount, musicalCount, bodilyCount, spatialCount, interCount, intraCount) {
  console.log("Hello!!!!)");
  this.linguistCount = linguistCount;
  this.logicCount = logicCount;
  this.musicalCount = musicalCount;
  this.bodilyCount = bodilyCount;
  this.spatialCount = spatialCount;
  this.interCount = interCount;
  this.intraCount = intraCount;
}

function createQuestionObjects() {
  new IqType('I’d rather draw a map than give someone verbal directions.', 'spatial', '1', 'audio/q1.mp3');
  new IqType('If I am angry or happy, I usually know exactly why.', 'intra', '2', 'audio/q2.mp3');
  new IqType('I can play (or used to play) a musical instrument.', 'musical', '3', 'audio/q3.mp3');
  new IqType('I can associate music with my moods.', 'musical', '4', 'audio/q4.mp3');
  new IqType('I can add or multiply quickly in my head.', 'logic', '5', 'audio/q5.mp3');
  new IqType('I can help a friend sort out strong feelings because I successfully dealt with similar feelings myself.', 'intra', '6', 'audio/q6.mp3');
  new IqType('I like to work with calculators and computers.', 'logic', '7', 'audio/q7.mp3');
  new IqType('I pick up new dance steps fast.', 'bodily', '8', 'audio/q8.mp3');
  new IqType('It is easy for me to say what I think in an argument or debate.', 'linguist', '9', 'audio/q9.mp3');
  new IqType('I enjoy a good lecture, speech, or sermon.', 'linguist', '10', 'audio/q10.mp3');
  new IqType('I always know North from South no matter where I am.', 'spatial', '11', 'audio/q11.mp3');
  new IqType('I like to gather together groups of people for parties of special events.', 'inter', '12', 'audio/q12.mp3');
  new IqType('Life seems empty without music.', 'musical', '13', 'audio/q13.mp3');
  new IqType('I always understand the drawings that come with new gadgets or appliances.', 'spatial', '14', 'audio/q14.mp3');
  new IqType('I like to work puzzles and play games.', 'logic', '15', 'audio/q15.mp3');
  new IqType('Learning to ride a bike (or skates) was easy.', 'bodily', '16', 'audio/q16.mp3');
  new IqType('I am irritated when I hear an argument or statement that sounds illogical.', 'linguist', '17', 'audio/q17.mp3');
  new IqType('I can convince other people to follow my plans.', 'inter', '18', 'audio/q18.mp3');
  new IqType('My sense of balance and coordination is good.', 'bodily', '19', 'audio/q19.mp3');
  new IqType('I often see patterns and relationships between numbers faster and easier than others do.', 'logic', '20', 'audio/q20.mp3');
  new IqType('I enjoy building models (or sculpting).', 'bodily', '21', 'audio/q21.mp3');
  new IqType('I’m good at finding the fine points of word meanings.', 'linguist', '22', 'audio/q22.mp3');
  new IqType('I can look at an object one way and see it turned sideways or backwards just as easily.', 'spatial', '23', 'audio/q23.mp3');
  new IqType('I often connect a piece of music with some event in my life.', 'musical', '24', 'audio/q24.mp3');
  new IqType('I like to work with numbers and figures.', 'logic', '25', 'audio/q25.mp3');
  new IqType('I like to sit quietly and reflect on my inner feelings.', 'intra', '26', 'audio/q26.mp3');
  new IqType('Just looking at shapes of buildings and structures is pleasurable to me.', 'spatial', '27', 'audio/q27.mp3');
  new IqType('I like to hum, whistle, and sing in the shower or when I’m alone.', 'musical', '28', 'audio/q28.mp3');
  new IqType('I’m good at athletics.', 'bodily', '29', 'audio/q29.mp3');
  new IqType('I enjoy writing detailed letters to friends.', 'linguist', '30', 'audio/q30.mp3');
  new IqType('I’m usually aware of the expression on my face.', 'intra', '31', 'audio/q31.mp3');
  new IqType('I’m sensitive to the expressions on other people’s faces.', 'inter', '32', 'audio/q32.mp3');
  new IqType('I stay “in touch” with my moods. I have no trouble identifying them.', 'intra', '33', 'audio/q33.mp3');
  new IqType('I am sensitive to the moods of others.', 'inter', '34', 'audio/q34.mp3');
  new IqType('I have a good sense of what others think of me.', 'inter', '35', 'audio/q35.mp3');
}

// page 1 displayed - personal info form

function hideForm() {
  let input = document.getElementById('input');
  input.parentElement.removeChild(input);
}

function startTest() {
  hideForm();
  createQuestionObjects();
  runTest();
}

// function handleForm(event) {
//   console.log(event);
//   event.preventDefault();
//   let firstName = event.target.firstname.value;
//   let lastName = event.target.lastname.value;
//   let birthDate = event.target.birthdate.value;
//   let testDate = event.target.date.value;
//   let newUser = new UserInfo(firstName, lastName, birthDate, testDate);
//   savedUser.push(newUser);
//   localStorage.setItem('user', JSON.stringify(savedUser));
//   startTest();
// }

// page 2 displayed - questions and answer choices

function showProgress() {
  let qtitle = document.getElementById('qtitle');
  qtitle.textContent = `Question ${testQuestions[currentQuestion].index} of 35`;
  surveyProgress.appendChild(qtitle);
}

// function showAudio() {
//   // generate audio
// let qaudio = document.getElementById('qaudio');
//   qaudio.innerHTML = `<audio id=\"\" src=\"${testQuestions[currentQuestion].filepath}\" type=\"audio/mp3\" controls=\"\"></audio>`;
//   surveyProgress.appendChild(qaudio);
// }

function showQuestion() {

  question.innerHTML =
    `<div class="${testQuestions[currentQuestion].category}" id="question">${testQuestions[currentQuestion].qvalue}</div>`;
  surveyQuestion.appendChild(question);
}

function showAnswers() {
  let testanswer = document.getElementById('testanswer');

  answerTrue.innerHTML = '<div id="true">T</div>';
  testanswer.appendChild(answerTrue);

  answerFalse.innerHTML = '<div id="false">F</div>';
  testanswer.appendChild(answerFalse);

  answerTrue.addEventListener('click', handleTrue);
  answerFalse.addEventListener('click', handleFalse);
}

function checkProgress() {
  if (currentQuestion < testQuestions.length) {
    runTest();
  } else {
    showResults();
  }
}

function runTest() {
  showProgress();
  showQuestion();
  // showAudio();
  showAnswers();
}

function handleTrue(event) {
  if (testQuestions[currentQuestion].category === 'linguist') {
    linguistCount++;
  } else if (testQuestions[currentQuestion].category === 'logic') {
    logicCount++;
  } else if (testQuestions[currentQuestion].category === 'musical') {
    musicalCount++;
  } else if (testQuestions[currentQuestion].category === 'bodily') {
    bodilyCount++;
  } else if (testQuestions[currentQuestion].category === 'spatial') {
    spatialCount++;
  } else if (testQuestions[currentQuestion].category === 'inter') {
    interCount++;
  } else {
    intraCount++;
  }
  currentQuestion++;
  checkProgress();
}

function handleFalse(event) {
  currentQuestion++;
  checkProgress();
}

// page 3 displayed - results including decalaration of highests area(s), bar graph, and description

function findHighest(arr) {
  let countArray = arr.map(obj => obj.count);
  let largest = Math.max(...countArray);
  if(largest === 0) {
    return 0;
  }
  let bestList = arr.filter(obj => obj.count === largest); 
  return bestList.map(obj => obj.category).join(', ');
};

function createReset() {
  let body = document.getElementsByTagName("body")[0];
  let chart = document.getElementsByTagName('canvas')[0];
  var btn = document.createElement("reset");
  btn.innerHTML = "Reset Test!";  
  btn.setAttribute("type", "click"); 
  btn.setAttribute("id", "reset");
  body.insertBefore(btn, chart);
  btn.addEventListener('click', handleReset);
}

function handleReset() {
  console.log("reset");
  localStorage.clear();
  location.reload();
}

function declareStrengths(label) {
  intelReport.innerHTML = '';
  let headline = document.createElement('h2');

  // if(localStorage.getItem('user')) {
  //   savedUser = JSON.parse(localStorage.getItem('user'))
  // }

  if(label === 0) {
    headline.textContent = 'PLEASE RETAKE! All scores zero! You are capable of more than you think!';
    headline.setAttribute("id", "redo");
    intelReport.appendChild(headline);
  }
  // } else {
  //   headline.innerHTML = `${savedUser[0].firstName} ${savedUser[0].lastName}, your strongest intelligence is: ${label} Intelligence!`;
  //   intelReport.appendChild(headline);
  // }
};

function createChart(arr) {
  let data = {
    labels: [
      'Verbal-Linguistic', 
      'Logical-Mathematical',
      'Musical',
      'Bodily-Kinesthetic',
      'Visual-Spatial',
      'Interpersonal',
      'Intrapersonal',
    ],
    datasets: [
      {
        label: "Relative Strength of Intelligence",
        data: arr.map(obj => obj.count),
        backgroundColor: [
          'rgba(204, 68, 75, 0.60)',
          'rgba(255, 111, 188, 0.60)',
          'rgba(47, 183, 214, 0.6)',
          'rgba(112, 255, 200, 0.60)',
          'rgba(89, 99, 232, 0.60)',
          'rgba(224, 255, 98, 0.60)',
          'rgba(232, 170, 89, 0.60)',
        ],
      }
    ]
  };

  let ctx = document.getElementById('myChart').getContext('2d');
  ctx.canvas.width = 200;
  ctx.canvas.height = 75;

  let myPieChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            max: 5,
            min: 0,
            stepSize: 1
          }
        }]
      },
    }
  });
}

function showMeaning() {
  let resultElement = document.getElementById('survey-explained');
  let h2El = document.createElement('h2');
  h2El.textContent = 'What This Means...';
  resultElement.appendChild(h2El);
  
  let pEl = document.createElement('p');
  pEl.textContent = 'This is an informal survey of multiple intelligences. Since it is not standardized your scores are only in comparison to yourself. It is interpreted by looking at relative highs and lows rather then exact numbers. Everyone is a different balance of these strengths and weakness.';
  resultElement.appendChild(pEl);

  let aEl = document.createElement('a');
  aEl.setAttribute('href', '/iqtypes');
  aEl.setAttribute('id', 'button');
  aEl.appendChild(document.createTextNode('See IQ description types here.'));
  resultElement.appendChild(aEl);
}

function hideTest() {
  document.getElementById("true").removeEventListener('click', handleTrue);
  document.getElementById("false").removeEventListener('click', handleFalse);
  surveyProgress.parentElement.removeChild(surveyProgress);
  surveyQuestion.parentElement.removeChild(surveyQuestion);
  surveyAnswers.parentElement.removeChild(surveyAnswers);
}

function compileTestData() {
  iqArray.push({category: 'Verbal-Linguistic', count: linguistCount});
  iqArray.push({category: 'Logical-Mathematical', count: logicCount});
  iqArray.push({category: 'Musical', count: musicalCount});
  iqArray.push({category: 'Bodily-Kinesthetic', count: bodilyCount});
  iqArray.push({category: 'Visual-Spatial', count: spatialCount});
  iqArray.push({category: 'Interpersonal', count: interCount});
  iqArray.push({category: 'Intrapersonal', count: intraCount});

  let newResult = new IqResults(linguistCount, logicCount, musicalCount, bodilyCount, spatialCount, interCount, intraCount);

  // localStorage.setItem('scores', JSON.stringify(iqArray));
}

// function checkLocalStorage() {
//   if(localStorage.getItem('scores') !== null) {
//     hideForm();
//     let iqArray = JSON.parse(localStorage.getItem('scores'));
//     renderResults(iqArray);
//   } else {
//     (userForm.addEventListener('submit', handleForm));
//   }
// }

function showResults() {
  compileTestData();
  hideTest();
  renderResults(iqArray); 
}

function renderResults(arr) {
  let label = findHighest(arr);
  declareStrengths(label);
  createChart(arr);
  showMeaning();
  createReset();
}

// checkLocalStorage();

console.log("Hello World");
startTest();
