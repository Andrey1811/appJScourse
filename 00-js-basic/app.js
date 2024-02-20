// Практич занятие
const secretNum = Math.ceil(Math.random() * 10)
console.log(secretNum)
let trites = 0;
// let num = +prompt()
function guessNum(num) {
    if (trites >= 5) {
        return alert('Игра окончена! Для повторной игры перезагрузите страницу');
    }

    if (num === secretNum) {
        alert('Вы угадали число!')
        trites = 5
    } else if (num > secretNum) {
        alert('Вы не угадали число, но загаданное число меньше указанного вами')
        trites++
    } else {
        alert('Вы не угадали число, но загаданное число больше указанного вами')
        trites++
    }

}
