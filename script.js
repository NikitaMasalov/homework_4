const student = "Масалов Никита Максимович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  function throwRandomError(errorRate) {
    if (getRandomIntInclusive(0,100) <= errorRate) {
        throw new Error("ой что то сломалось");
    }
  }

  let errorRate = 20 

  try {
    throwRandomError(errorRate);
    alert ("Всё в порядке, приложение работает в штатном режиме");
  
}catch (err) {
    alert("Произошла ошибка, пожалуйста перезагрузите страницу")
    alert(err)
}
