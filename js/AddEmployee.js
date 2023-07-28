

function addEmployess() {
  var emp_id = document.getElementById("emp_id").value;
  var emp_name = document.getElementById("emp_name").value;
  var emp_age = document.getElementById("emp_age").value;
  var emp_desg = document.getElementById("emp_desg").value;
  var emp_image = document.getElementById("emp_image").value;
  var emp_gender = document.getElementById("emp_gender").value;

  removeRedBorderAndContent(addID, addErrorMessage);

  if (Errormessage) {
    return;
  }
  // Validation function
  function isFieldFilled(val) {
    const data = document.getElementById(val).value;
    return data.trim() !== "";
  }

  // Checking individual variables
  if (!isFieldFilled("emp_id")) {
    addID = "emp_id";
    addErrorMessage = "id_error";
    addContentAfterElement("emp_id", "Please enter Employee ID", "id_error");
    // addErrorStyle('emp_id', "Employee ID is required.");
    return;
  }

  if (!isFieldFilled("emp_name")) {
    addID = "emp_name";
    addErrorMessage = "name_error";
    addContentAfterElement(
      "emp_name",
      "Please enter Employee Name",
      "name_error"
    );
    return;
  }

  if (!isFieldFilled("emp_age")) {
    addID = "emp_age";
    addErrorMessage = "age_error";
    addContentAfterElement("emp_age", "Please enter Employee Age", "age_error");
    return;
  }

  if (parseInt(emp_age) < 18 || parseInt(emp_age) > 60) {
    addID = "emp_age";
    addErrorMessage = "age_error";
    addContentAfterElement(
      "emp_age",
      "Please enter an age between 18 and 60.",
      "age_error"
    );
    return;
  }

  if (!isFieldFilled("emp_desg")) {
    addID = "emp_desg";
    addErrorMessage = "desg_error";
    addContentAfterElement(
      "emp_desg",
      "Please select Employee Designation",
      "desg_error"
    );
    return;
  }

  if (!isFieldFilled("emp_image")) {
    addID = "emp_image";
    addErrorMessage = "image_error";
    addContentAfterElement(
      "emp_image",
      "Please upload Employee image",
      "image_error"
    );
    return;
  }

  if (!isValidUrl(emp_image)) {
    addID = "emp_image";
    addErrorMessage = "image_error";
    addContentAfterElement(
      "emp_image",
      "Please upload a valid URL. Only .png, .jpg, .jpeg, and .gif formats are accepted.",
      "image_error"
    );
    return;
  }

  if (!isFieldFilled("emp_gender")) {
    addID = "emp_gender";
    addErrorMessage = "gender_error";
    addContentAfterElement(
      "emp_gender",
      "Please select Employee gender",
      "gender_error"
    );
    return;
  }

  if (!Errormessage) {
    var emp_id = parseInt(emp_id);
    var emp_age = parseInt(emp_age);
    var emp_isActive = true;
    const inputData = {
      emp_id,
      emp_name,
      emp_age,
      emp_desg,
      emp_image,
      emp_gender,
      emp_isActive,
    };
    EmployeeData.push(inputData);
    var formData = document.getElementById("formData");
    formData.reset();
    alert("You have successfully created a acccount");
  }
}



const inputBox = document.getElementById("emp_id");

function handleKeyup(event) {
  var valuedata = document.getElementById("emp_id").value;

  let isDuplicate = false;
  if (parseInt(valuedata) < 0) {
    addContentAfterElement(
      "emp_id",
      "The ID value cannot be negative",
      "id_error"
    );
    inputBox.addEventListener("blur", keepFocusOnInput);
    Errormessage = true;
    return;
  }

  if (valuedata == 0) {
    addContentAfterElement(
      "emp_id",
      "The ID value cannot be 0 or left blank.",
      "id_error"
    );
    inputBox.addEventListener("blur", keepFocusOnInput);
    Errormessage = true;
  } else {
    EmployeeData.forEach((obj) => {
      if (obj.emp_id === parseInt(valuedata)) {
        addContentAfterElement(
          "emp_id",
          "Id already as been taken.",
          "id_error"
        );
        inputBox.addEventListener("blur", keepFocusOnInput);
        isDuplicate = true;
        Errormessage = true;
        return;
      }
    });

    if (!isDuplicate) {
      // alert("reject");
      removeRedBorderAndContent("emp_id", "id_error");
      Errormessage = false;
      inputBox.removeEventListener("blur", keepFocusOnInput);
    }
  }
}

function keepFocusOnInput() {
  inputBox.focus();
}

function handleKeyDown(event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Prevent default tab behavior
  }
}

// Attach the event listener
inputBox.addEventListener("keyup", handleKeyup);
inputBox.addEventListener("keydown", handleKeyDown);
