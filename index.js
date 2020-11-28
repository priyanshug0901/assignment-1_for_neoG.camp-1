const chalk =require('chalk');
const readlineSync = require('readline-sync');
const log=console.log;
var score=0;
// log(chalk.yellow('hell0 all')) 
var username=readlineSync.question("Please enter your name to enter :: ");

log('Hello ' + chalk.bgCyan(username) 
+', I Welcome ! you to Do U ' 
+chalk.bgYellow(' KNOW ')
+chalk.black.bgWhite(' YOUR ') 
+chalk.bgGreen('COUNTRY')
+' quiz .');

function quiz (question,answer){
var userAnswer=readlineSync.question(question);

if(answer==userAnswer){
  log(chalk.bgGreenBright('correct'));
  score++;
 
}   //if
else{
log(chalk.bgRed('WRONG'));
log("answer :: "+ chalk.bgGreenBright(answer));
score--;
// log(chalk.inverse(score));
}  //else
 log('Current Score :: ' + chalk.inverse(score));
 log('__________________');

}   //quiz fun

var questions=[
  {question:"what is the name of india's National Tree ? ",answer:"banyan tree"},{question:"what is the name of india's National Flower ? ",answer:"lotus"},
  {question:"what is the name of india's National Fruit ? ",answer:"mango"},
  {question:"what is the name of india's National Aquatic Animal ? ",answer:"dolphin"},
  {question:"what is the name of india's National Reptile ? ",answer:"king cobra"},
  ]

if (readlineSync.keyInYN('Press Y to start the quiz NOW !')){
for(var i=0;i<5;i++){
  var currQues=questions[i];
  quiz(currQues.question,currQues.answer);
} 
}

log('Final Score :: ' + chalk.red.bgYellowBright.bold( score));
log('__________________')

log(chalk.bgMagenta('LeaderBoard'));
var userScore={name:username,score:score}

var highscores=[{name:'priyanshu',score:5},{name:'vinit',score:4}];
highscores.push(userScore);

for(var i=0;i<highscores.length;i++){
   var user =highscores[i];
   log(user.name+" :: "+user.score);   }