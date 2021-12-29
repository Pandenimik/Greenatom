var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это не съедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        // TODO: написать логику проверки правильного ответа
        if (guessedAnswer.toLowerCase() === this.correctAnswer.toLowerCase()) {
            alert('Правильный ответ');
            location.reload();
        }
        else {
            alert('Неправильный ответ');
            this.tries--;
            if (this.tries === 1) {
                alert('У вас осталась последняя попытка, вот вам подсказки: ' + this.hints);
            }
            if (this.tries === 0) {
                location.reload();
            }
        }
        // alert для пользователя, console.log()
        
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
        riddle.checkAnswer(guessedAnswer);
    }
}