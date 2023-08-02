var n1 = document.querySelector('#n1')
var result = document.querySelector('span')

function factorial() {
    if (parseInt(n1.value) < 0) {
        return result.innerHTML = 'n1 must be bigger than zero'
    } else if ((parseInt(n1.value) == 0) || (parseInt(n1.value) == 1)) {
        return 1
    }
    let accumulator = 1;
    for (x = parseInt(n1.value); x > 1; x--) {
        accumulator = accumulator * x
    }
    return result.innerHTML = accumulator
}