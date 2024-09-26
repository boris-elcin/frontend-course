let boolean = true

let number = 1.53

let string = 'Hello \'Aleksey\'!'

let Undefined = undefined

let Null = null

let array = [1, true, 'Hello']

let object = { number: 1, boolean: false }


function cycles() {
    let result = 1

    console.log('start: ', result)

    for (let i = 0; i < 10; i = i + 1) {
        if (result > 128) {
            result = result - 100
            console.log('true', result)
        } else {
            result = result * 2
            console.log('false', result)
        }
    }

    console.log('end: ', result)
}

function conditions() {
    let result = 0

    console.log('start: ', result)

    if (2 > 5) {
        result = 100
    }

    console.log('end: ', result)
}

function summary(a, b) {
    return a + b
}

let sum = summary(3.5, 5)



// Можете вызвать какую нибудь из этих функций, чтобы посмотреть что она выведет в консоль
conditions()
cycles()
console.log(sum)
