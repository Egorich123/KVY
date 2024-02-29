let a = parseInt(prompt("Введите коэффициент первого числа"))
let b = parseInt(prompt("Введите коэффициент второго числа"))
let c = parseInt(prompt("Введите коэффициент третьего числа"))
let dis = b * b - 4 * a * c
let crdis = Math.sqrt(dis)
if ( dis > 0) {
   alert("Найдено 2 решения")
    let x1 = ( -b - crdis) / 2 * a
    let x2 = (-b + crdis) / 2 * a
    alert(x1 , x2)
} else if ( dis = 0) {
    alert("Найден 1 корень")
    let x1 = ( -b - crdis) / 2 * a
    alert(x1)
} else {
    alert("Корней нет")
}
alert(crdis)