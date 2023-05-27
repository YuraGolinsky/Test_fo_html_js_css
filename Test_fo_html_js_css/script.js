(function(){
  function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Правильних відповідей ${numCorrect} із ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [

    {
      
      question: "Питання 1: Розв'яжіть приклад 5,3-2,8/(-25)",
      answers: {
        a: "0,1",
        b: "-10",
        c: "-0,1",
        d: "5,4"
      },
      correctAnswer: "d"
    },
    {
      question: "Питання 2:Чи можна вважати число -7 натуральним?",
      answers: {
        a: "Можна",
        b: "Не можна",
      },
      correctAnswer: "b"
    },
    {
      question: "Питання 3: Якщо число поділити на 1, то вийде:",
      answers: {
        a: "Те ж число",
        b: "0",
        c: "15",
        d: "48"
      },
      correctAnswer: "a"
      
    },
    {
      question: "Питання 4: Прямоугольник у которого все стороны равны называется?",
      answers: {
        a: "Ромб",
        b: "Треугольник",
        c: "Куб",
        d: "Квадрат"
      },
      correctAnswer: "d"
    },
    {
      question: "Питання 5:Розв'яжіть приклад: 5,3+100/(-25)+4*(15)",
      answers: {
        a: "40",
        b: "55",
        c: "65",
        d: "61,3"
      },
      correctAnswer: "d"
    },
    {
      question: "Питання 6:Розв'яжіть приклад: (100+150)/(20+45)",
      answers: {
        a: "2",
        b: "2,5",
        c: "3",
        d: "3,8"
      },
      correctAnswer: "d"
    },
    { 
   question: "Питання 7:Група з 15 школярів у супроводі трьох дорослих планує автобусну екскурсію в заповідник. Оренда автобуса для екскурсії коштує 800 грн. Вартість вхідного квитка в заповідник становить 20 грн для школяра й 50 грн – для дорослого. Якої мінімальної суми грошей достатньо для проведення цієї екскурсії?",
      answers: {
        a: "1050 грн",
        b: "1150 грн",
        c: "1250 грн"
      },
      correctAnswer: "c"
    },
    {
      question: "Питання 8:За 6 однакових конвертів заплатили 3 грн. Скільки всього таких конвертів можна купити за 12 грн?",
      answers: {
        a: "6",
        b: "24",
        c: "30"
      },
      correctAnswer: "a"
    },
    {
      question: "Питання 9:Укажіть функцію, графік якої проходить через початок координат.",
      answers: {
        a: "y = x - 1",
        b: "y = 1",
        c: "y = x"
      },
      correctAnswer: "c"
    },
     {
      question: "Питання 10:Яке з наступних чисел найбільше?",
      answers: {
        a: "15",
        b: "20",
        c: "45"
      },
      correctAnswer: "c"
    },
     {
      question: "Питання 11:Цілком на 18 ділиться число",
      answers: {
        a: "328",
        b: "364",
        c: "339",
        d: "342"
      },
      correctAnswer: "d"
    },
     {
      question: "Питання 12:Яка з координатних точок розташована на координатній прямій ліворуч від інших?",
      answers: {
       a: "A(-7)",
        b: "S(4)",
        c: "D(10)",
        d: "C(-11)"
      },
      correctAnswer: "d"
    },
     {
      question: "Питання 13:Розв'яжіть рівняння: 2 х = - 6,2",
      answers: {
        a: "6,2",
        b: "-6,2",
        c: "-3,1",
        d: "3,1"
      },
      correctAnswer: "c"
    },
     {
      question: "Питання 14:Який із даних чисел має найменший модуль??",
      answers: {
        a: "25,5",
        b: "-21,4",
        c: "-21,39",
        d: "21,305"

      },
      correctAnswer: "d"
    },
     {
      question: "Питання 15:Сума довжин усіх ребер прямокутного паралелепіпеда, що виходять з однієї вершини, дорівнює 60 см. Визначте суму довжин усіх ребер цього паралелепіпеда.",
      answers: {
        a: "360 см",
        b: "240 см",
        c: "120 см"
      },
      correctAnswer: "b"
    },

    
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();