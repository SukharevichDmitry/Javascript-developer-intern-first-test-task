var adressInput = document.getElementById("Address");
    var warningBox = document.getElementById("warning-box");
    var submitButton = document.getElementById("submitButton");

    adressInput.addEventListener("input", function() {
      if (adressInput.value === "") {
        warningBox.style.display = "block";
        adressInput.style.border = "2px solid red";
      } else {
        warningBox.style.display = "none";
        adressInput.style.border = "1px solid #ccc";
      }
    });

    document.getElementById("submitButton").addEventListener("click", function() {
      if (adressInput.value === "") {
        adressInput.style.border = "2px solid red";
        warningBox.style.display = "block";
        submitButton.classList.remove("error");
      } else {
        console.log("Форма отправлена");
        submitButton.classList.add("error");
        submitButton.textContent = 'Request is sent';

        // Отправляем сообщение родительскому окну
        var inputInfo = {
          firstName: document.getElementById('firstNameInput').value,
          lastName: document.getElementById('lastNameInput').value,
          phone: document.getElementById('Phone').value,
          email: document.getElementById('Email').value,
          jobType: document.getElementById('field1').value,
          jobDetails: document.getElementById('field3').value,
          address: document.getElementById('Address').value,
          city: document.getElementById('City').value,
          state: document.getElementById('State').value,
          zipCode: document.getElementById('ZipCode').value,
          area: document.getElementById('Area').value,
          scheduleDate: document.getElementById('scheduleDate').value,
          startTime: document.getElementById('StartTime').value,
          endTime: document.getElementById('EndTime').value,
          testSelect: document.getElementById('TestSelect').value
        };
        
        parent.postMessage(inputInfo, '*');

        formContainer.style.display = 'none';
        nextIframe.style.display = 'block';
        nextIframe.src = 'https://sukharevichdmitry.github.io/Third-site/';
          
      }
    });

    document.getElementById("clearButton").addEventListener("click", function() {
      var inputs = document.querySelectorAll("input, textarea, select");
      inputs.forEach(function(input) {
        input.value = "";
        input.style.border = "1px solid #ccc";
      });
      warningBox.style.display = "none";
      submitButton.classList.remove("error");
      submitButton.textContent = 'Create Job';
    });
