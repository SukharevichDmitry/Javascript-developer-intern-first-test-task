document.addEventListener('DOMContentLoaded', function() {
  var adressInput = document.getElementById("address");
  var warningBox = document.getElementById("warning-box");
  var submitButton = document.getElementById("submitButton");
  var clearButton = document.getElementById("clearButton");
  var isSubmitted = false;  // Флаг для отслеживания отправки данных

  // Обработчик ввода для поля адреса
  adressInput.addEventListener("input", function() {
    if (adressInput.value === "") {
      warningBox.style.display = "block";
      adressInput.style.border = "2px solid red";
    } else {
      warningBox.style.display = "none";
      adressInput.style.border = "1px solid #ccc";
    }
  });

  // Обработчик клика по кнопке отправки
  submitButton.addEventListener("click", function() {
    if (isSubmitted) {
      // Если уже отправлено, ничего не делаем
      return;
    }

    if (adressInput.value === "") {
      adressInput.style.border = "2px solid red";
      warningBox.style.display = "block";
      submitButton.classList.add("error");
    } else {
      console.log("Форма отправлена");
      // Устанавливаем флаг, чтобы предотвратить повторную отправку
      isSubmitted = true;
      submitButton.disabled = true; // Деактивируем кнопку отправки
