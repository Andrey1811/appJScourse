const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(valu) {
        if (this.tries < 1) {
            return alert('Игра окончена')
        }
        if (valu.toLowerCase().includes(this.correctAnswer)) {
            alert('Вы угадали это правильный ответ')
            console.log('Вы угадали это правильный ответ')
            this.tries = 0
        } else {
            alert('Вы не угадали')
            console.log('Вы не угадали ')
            this.tries--;

            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if (this.tries !== 0) {
                alert('Подсказка ' + hint)

            }
        }
    },
}

window.onload = function () {
    document.getElementById('riddle').innerText = riddle.question;

}

function check() {
    const input = document.getElementsByTagName('input')[0];
    const quessedAnswer = input.value;

    if (quessedAnswer) {
        riddle.checkAnswer(quessedAnswer)
    }
    // TODO : вызвать функцию checkAnswer() у объекта загадки, передав туда ответ
}