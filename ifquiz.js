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
        question: "1. How many alternatives are there for a single if-else statement?",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4"
        },
        correctAnswer: "b"
      },
      {
        question: "2. What is the following code snippet on the screen?<br><br>  int sum = 14;<br>  if (sum <20)<br>  System.out.print (“Below”);<br  >else<br>  {<br>  System.out.print (“About”);<br>  System.out.println (“the limit.”);<br>  }",
        answers: {
          a: "Under",
          b: "Over",
          c: "Under the limit.",
          d: "Over the limit."
        },
        correctAnswer: "a"
      },
      {
        question: "3. What is the following code snippet on the screen?<br><br>int sum = 7;<br>if (sum > 20)<br>{<br>System.out.print (“You win”);<br>}<br>else<br>{<br>System.out.print (“you lose”);<br>}<br>System.out.println (“the price.”);<br><br>(Note that the program has changed!)<br><br>",
        answers: {
          a: " You win",
          b: "They are losing",
          c: " You win the prize.",
          d: "You lose the price."
        },
        correctAnswer: "d"
      },
      {
        question: "4.  What is the following code snippet on the screen?<br>int sum = 21;<br>if (sum ! = 20)<br>System.out.print (“You win”);<br>else<br>System.out.print (“you lose”);<br>System.out.println (“the price.”);<br><br>(Note that the program has changed!)<br><br>",
        answers: {
          a: "You win",
          b: "They are losing",
          c: "You win the prize.",
          d: "You lose the price."
        },
        correctAnswer: "c"
      },
      {
        question: "5. Evaluate the following expressions ( true or false ):<br>14 <= ??14 14 <14 -9> -25 -25> -9",
        answers: {
          a: "true true true true",
          b: "true false false false",
          c: "true false true true",
          d: "true false true false"
        },
        correctAnswer: "d"
      },
      {
        question: "6. Rate the following expression:<br>1 + 2 == 3",
        answers: {
          a: "true",
          b: "false",
          c: "unpredictable",
        },
        correctAnswer: "a"
      },
      {
        question: "7. Rate the following expression:<br>25 <5 * 5",
        answers: {
          a: "true",
          b: "false",
          c: "unpredictable",
        },
        correctAnswer: "b"
      },
      {
        question: "8. Rate the following expression:<br>8 + 1> = 3 * 3",
        answers: {
          a: "true",
          b: "false",
          c: "unpredictable",
        },
        correctAnswer: "a"
      },
      {
        question: "9. What is the following code snippet on the screen?<br>int height = 10;<br>if (high <= 12)<br>System.out.print (“Low Bridge:”);<br>System.out.println (“Carefully drive on.”);",
        answers: {
          a: "Nothing is spent.",
          b: "Low bridge.",
          c: "drive on carefully.",
          d: "Low bridge: continue driving carefully."
        },
        correctAnswer: "d"
      },
      {
        question: "10. What is the following code snippet on the screen?<br>int height = 13;<br>if (high <= 12)<br>{<br>System.out.print (“Low Bridge:”);<br>System.out.println (“Carefully drive on.”);<br>}<br>",
        answers: {
          a: "Nothing is spent.",
          b: "Low bridge:",
          c: "drive on carefully.",
          d: "Low bridge: continue driving carefully."
        },
        correctAnswer: "a"
      },
      {
        question: "11. What is the following code snippet on the screen?<br>int deep = 8;<br>if (depth> = 8)<br>{<br>System.out.print (“Danger”);<br>System.out.print (“Deep Water.”);<br>}<br>System.out.println (“swimming prohibited.”);<br>",
        answers: {
          a: "Danger.",
          b: "Danger: Deep water.",
          c: "Deep water. Swimming prohibited.",
          d: "Danger: Deep water. Swimming prohibited."
        },
        correctAnswer: "d"
      },
      {
        question: "12. Rate the following expression:<br>10.0 + 0.1 <11.0",
        answers: {
          a: "true",
          b: "false",
          c: "unknown",
        },
        correctAnswer: "a"
      },
      {
        question: "13. Rate the following expression:<br>10.0 + 0.1> 10.0",
        answers: {
          a: "true",
          b: "false",
          c: "unknown",
        },
        correctAnswer: "a"
      },
      {
        question: "14. Rate the following expression:<br>1.0 + 1.0 / 10.0 <1.1",
        answers: {
          a: "true",
          b: "false",
          c: "unknown",
        },
        correctAnswer: "c"
      }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();