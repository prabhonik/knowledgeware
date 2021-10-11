(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'green';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `You Scored ${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "1. What is a data type ?",
        answers: {
          a: "The calculator of the CPU.",
          b: "A portion of the main memory used to store data.",
          c: "A special scheme to represent values in bit patterns.",
          d: "The collection of variables that a program uses."
        },
        correctAnswer: "c"
      },
      {
        question: "2. How many bit patterns can a single bit represent?",
        answers: {
          a: "1",
          b: "2",
          c: "4",
          d: "8"
        },
        correctAnswer: "b"
      },
      {
        question: "3. What is a primitive data type in Java ?",
        answers: {
          a: " A method to represent values that are so useful that they are an integral part of the language.",
          b: "An easy way to represent numbers.",
          c: "The part of Java that matches the older programming languages.",
          d: "A data type that can not be used as part of an object."
        },
        correctAnswer: "a"
      },
      {
        question: "4. Does every variable in Java need a data type?",
        answers: {
          a: "No – only numeric variables need a data type.",
          b: "No – a data type is optional.",
          c: "Yes – all variables are of the same data type.",
          d: "Yes – every variable must be declared with its data type."
        },
        correctAnswer: "d"
      },
      {
        question: "5. What is NOT a name of a primitive data type in Java?",
        answers: {
          a: "int",
          b: "float",
          c: "stand-in",
          d: "string"
        },
        correctAnswer: "d"
      },
      {
        question: "6. Is the value ONE always represented by the same bit sequence?",
        answers: {
          a: "Yes – there is only one “one”, so there is only one bit sequence.",
          b: "No – “one” can be represented by different integer or floating point data types.",
          c: "Yes – it is always stored in one bit.",
          d: "No – the bit pattern changes every time the program starts."
        },
        correctAnswer: "b"
      },
      {
        question: "7. Suppose a particular data item does not use a primitive data type. What does it have to be?",
        answers: {
          a: "An object.",
          b: "A number.",
          c: "A literal.",
          d: "A Boolean element."
        },
        correctAnswer: "a"
      },
      {
        question: "8. How many digits is the decimal precision of the following number: +1200004.5",
        answers: {
          a: "4",
          b: "5",
          c: "8",
          d: "Over one million"
        },
        correctAnswer: "c"
      },
      {
        question: "9. Can chardata be stored in the main memory of the computer?",
        answers: {
          a: "No – computers can only save numbers.",
          b: "No -; the computer can only save patterns.",
          c: "Yes – chardata is stored in a special memory.",
          d: "Yes – a primitive data type is used to save it."
        },
        correctAnswer: "d"
      },
      {
        question: "10. In which of the following answers does the number of bits increase from the least (left) to the most (right)?",
        answers: {
          a: "byte long short int",
          b: "int byte short long",
          c: "byte short int long",
        },
        correctAnswer: "c"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();