var readlineSync = require('readline-sync')
console.log("How well do you know Medha? \n")
console.log("******************************************* \n")
let name = readlineSync.question("Your username: ")
console.log("\nHello there " + name+ " let's jump in")

const questionnaire = [
  {
    question: "1. Where am I based on?",
    options:"a. Bangalore \nb. Pune \nc. Hyderabad \n\nAns:",
    answer: "a"
  },
  {
    question: "2. What is my first name?",
    options:"a. Riya \nb. Medha \nc. Sakshi  \n\nAns:",
    answer: "b"
  },
  {
    question: "3. What do I really really want?",
    options:"a. Sleep all day \nb. Eat all day \nc. Get into Neog  \n\nAns:",
    answer: "c"
  },
  {
    question: "4. What's my favorite color?",
    options:"a. Red \nb. Blue \nc. Green  \n\nAns:",
    answer: "b"
  },
  {
    question: "5. Who's my favorite superhero?",
    options:"a. Batman \nb. Superman \nc. Ironman  \n\nAns:",
    answer: "c"
  }

]

let score = 0
const questions = (questionnaire) => {
  for (let i in questionnaire) {
    console.log(' \n')
    console.log(questionnaire[i].question)
    resp = readlineSync.question(questionnaire[i].options)
    if (resp === questionnaire[i].answer) {
      score += 1
      console.log("Right answer!")
      console.log("Current Score: ", score)
    }
    else {
      console.log("Wrong answer")
    }
  }

  console.log(`\nYour final score is... \n${name}:`, score)

}

questions(questionnaire)