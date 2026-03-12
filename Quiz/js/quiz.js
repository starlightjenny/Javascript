
   var trivia_questions = [
    'How many moons does Earth have?',
    'What is the largest planet in our solar system?',
    'What is the smallest planet in our solar system?'
   ]; 

   var trivia_answers = [
    '1',
    'Jupiter',
    'Mercury',
   ];


   function quiz() {
      var points = 0;


      for (var i = 0; i<trivia_questions.length; i++) {
         var guesses = 3;

         while (guesses > 0) {
            var user_answer = prompt(trivia_questions[i]);

            if (user_answer.toLowerCase() === trivia_answers[i].toLowerCase()) {
               points += guesses;
               alert('Correct! You earned ' + guesses + ' points.');
               guesses = 0; // Exit the loop
            } else {
               alert('Incorrect.');
               guesses -= 1;
            }
            if (guesses > 0) {
               alert('Try again. You have ' + guesses + ' guesses left.');
            } else {
               alert('The correct answer was: ' + trivia_answers[i]);
            }

         }

      }
      return points;
   } 
