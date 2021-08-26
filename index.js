var readlineSync = require('readline-sync');
var name = readlineSync.question('What is your name?');
console.log('Hi '+ name + '! Welcome to a quiz on Suits Series?');
var score = 0
var highscore = 0
//Play function
for (var i = 0; i != 10; i++){
  function play(question, answer,opt1,opt2,opt3,opt4){
    console.log(question)
    console.log(opt1)
    console.log(opt2)
    console.log(opt3)
    console.log(opt4)
    var useranswer = readlineSync.question('Your answer is :');
    if (answer.toUpperCase() === useranswer.toUpperCase()){
      console.log("Right answer!");
      score = score + 1;
      console.log('Your current score is ',score);
      console.log('---------------')
    }
    else{
      console.log('Wrong answer! The correct answer is ', answer);
      score = score - 1;
      console.log('Your current score is ',score);
      console.log('---------------')
    }
    
  }
  var questionOne = {
    question :'Where is Pearson Hardman law firm ? ',
    answer  : 'a',
    opt1 : 'a) New York',
    opt2 : 'b) California',
    opt3 : 'c) Boston',
    opt4 : 'd) Philadelphia'
  }
  var questionTwo = {
    question : 'Who is Mike Ross childhood friend ?',
    answer : 'c',
    opt1 : 'a) Travis Tanner',
    opt2 : 'b) Louis Litt',
    opt3 : 'c) Trevor Evans',
    opt4 : 'd) Harold Gunderson'
  }
  var questionThree = {
    question : 'Which Law school did Harvey Specter go to ? ',
    answer : 'b',
    opt1 : 'a) Cambridge',
    opt2 : 'b) Harvard',
    opt3 : 'c) Yale',
    opt4 : 'd) Stanford'
  }
  var questionFour = {
    question : 'Harvey Specter claims he is the best ______ in NY city? ',
    answer : 'd',
    opt1 : 'a) Litigator',
    opt2 : 'b) Boxer',
    opt3 : 'c) Judge',
    opt4 : 'd) Closer'
  }
  var questionFive = {
    question : 'Which of these is Mike Ross abilities ?',
    answer : 'a',
    opt1 : 'a) Photographic Memory',
    opt2 : 'b) Keen Observation',
    opt3 : 'c) Physical Fitness',
    opt4 : 'd) Showmanship'

  }
  var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
  for (var i = 0; i<questions.length;i++){
    var currentquestion = questions[i];
    play(currentquestion.question, currentquestion.answer,currentquestion.opt1, currentquestion.opt2, currentquestion.opt3, currentquestion.opt4);
  }
  console.log('YAY!! You scored ', score);
  if (score > highscore){
    highscore = score;
    console.log('Highscore is ', highscore)
  }
  else{
    console.log('Highscore is ', highscore)
  }
  res = readlineSync.question('Do you wish to play again ? Y/N - ')
  if (res === 'N'){
    break
  }
}