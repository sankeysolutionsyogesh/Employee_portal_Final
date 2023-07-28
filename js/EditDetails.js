var EditAccount = 0;
var Errormessage = false;

function EditFunction(EmpData) {
  // const editData = { emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender }
  //             EditFunction(editData)

  document.getElementById("edit_emp_id").value = EmpData.emp_id;
  document.getElementById("edit_emp_name").value = EmpData.emp_name;
  document.getElementById("edit_emp_age").value = EmpData.emp_age;
  document.getElementById("edit_emp_desg").value = EmpData.emp_desg;
  document.getElementById("edit_emp_image").value = EmpData.emp_image;
  document.getElementById("edit_emp_gender").value = EmpData.emp_gender;

  EditAccount = EmpData.emp_id;

  document.getElementById("editModal").style.display = "block";
}

function CancelEdit() {
  EditAccount = null;
  document.getElementById("editModal").style.display = "none";
}

async function submitEditedData(inputData) {
  console.log("Id - ", EditAccount);
}

const Edit_inputBox = document.getElementById("edit_emp_id");
// Attach the event listener
Edit_inputBox.addEventListener("keyup", Edit_handleKeyup);
Edit_inputBox.addEventListener("keydown", handleKeyDown);

function Edit_handleKeyup(event) {
  var valuedata = document.getElementById("edit_emp_id").value;

  let isDuplicate = false;

  //   console.log("id ", EditAccount);

  if (valuedata != EditAccount) {
    if (parseInt(valuedata) < 0) {
      addContentAfterElement(
        "edit_emp_id",
        "The ID value cannot be negative",
        "edit_id_error"
      );
      Edit_inputBox.addEventListener("blur", Edit_keepFocusOnInput);
      Errormessage = true;
      return;
    }

    if (valuedata == 0) {
      addContentAfterElement(
        "edit_emp_id",
        "The ID value cannot be 0 or left blank.",
        "edit_id_error"
      );
      Edit_inputBox.addEventListener("blur", Edit_keepFocusOnInput);
      Errormessage = true;
      //   inputBox.addEventListener("blur", Edit_keepFocusOnInput);
    } else {
      EmployeeData.forEach((obj) => {
        if (obj.emp_id === parseInt(valuedata)) {
          addContentAfterElement(
            "edit_emp_id",
            "Id already as been taken.",
            "edit_id_error"
          );
          Edit_inputBox.addEventListener("blur", Edit_keepFocusOnInput);
          isDuplicate = true;
          Errormessage = true;
          return;
        }
      });

      if (!isDuplicate) {
        // alert("reject");
        removeRedBorderAndContent("edit_emp_id", "edit_id_error");
        Errormessage = false;
        Edit_inputBox.removeEventListener("blur", Edit_keepFocusOnInput);
      }
    }
  } else {
    removeRedBorderAndContent("edit_emp_id", "edit_id_error");
    Errormessage = false;
    Edit_inputBox.removeEventListener("blur", Edit_keepFocusOnInput);
  }
}

function Edit_keepFocusOnInput() {
  Edit_inputBox.focus();
}

function Edit_Employee() {
  var emp_id = document.getElementById("edit_emp_id").value;
  var emp_name = document.getElementById("edit_emp_name").value;
  var emp_age = document.getElementById("edit_emp_age").value;
  var emp_desg = document.getElementById("edit_emp_desg").value;
  var emp_image = document.getElementById("edit_emp_image").value;
  var emp_gender = document.getElementById("edit_emp_gender").value;

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
  if (!isFieldFilled("edit_emp_id")) {
    addID = "edit_emp_id";
    addErrorMessage = "edit_id_error";
    addContentAfterElement(
      "edit_emp_id",
      "Please enter Employee ID",
      "edit_id_error"
    );
    // addErrorStyle('emp_id', "Employee ID is required.");
    return;
  }

  if (!isFieldFilled("edit_emp_name")) {
    addID = "edit_emp_name";
    addErrorMessage = "edit_name_error";
    addContentAfterElement(
      "edit_emp_name",
      "Please enter Employee Name",
      "edit_name_error"
    );
    return;
  }

  if (!isFieldFilled("edit_emp_age")) {
    addID = "edit_emp_age";
    addErrorMessage = "edit_age_error";
    addContentAfterElement(
      "edit_emp_age",
      "Please enter Employee Age",
      "edit_age_error"
    );
    return;
  }

  if (parseInt(emp_age) < 18 || parseInt(emp_age) > 60) {
    addID = "edit_emp_age";
    addErrorMessage = "edit_age_error";
    addContentAfterElement(
      "edit_emp_age",
      "Please enter an age between 18 and 60.",
      "edit_age_error"
    );
    return;
  }

  if (!isFieldFilled("edit_emp_desg")) {
    addID = "edit_emp_desg";
    addErrorMessage = "edit_desg_error";
    addContentAfterElement(
      "edit_emp_desg",
      "Please select Employee Designation",
      "edit_desg_error"
    );
    return;
  }

  if (!isFieldFilled("edit_emp_image")) {
    addID = "edit_emp_image";
    addErrorMessage = "edit_image_error";
    addContentAfterElement(
      "edit_emp_image",
      "Please upload Employee image",
      "edit_image_error"
    );
    return;
  }

  if (!isValidUrl(emp_image)) {
    addID = "edit_emp_image";
    addErrorMessage = "edit_image_error";
    addContentAfterElement(
      "edit_emp_image",
      "Please upload a valid URL. Only .png, .jpg, .jpeg, and .gif formats are accepted.",
      "edit_image_error"
    );
    return;
  }

  if (!isFieldFilled("edit_emp_gender")) {
    addID = "edit_emp_gender";
    addErrorMessage = "edit_gender_error";
    addContentAfterElement(
      "edit_emp_gender",
      "Please select Employee gender",
      "edit_gender_error"
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

    // submitEditedData(inputData);

    const index = EmployeeData.findIndex((user) => user.emp_id === EditAccount);

    // If the object is found (index is not -1), edit its properties
    if (index !== -1) {
      EmployeeData[index].emp_id = inputData.emp_id;
      EmployeeData[index].emp_name = inputData.emp_name;
      EmployeeData[index].emp_age = inputData.emp_age;
      EmployeeData[index].emp_desg = inputData.emp_desg;
      EmployeeData[index].emp_image = inputData.emp_image;
      EmployeeData[index].emp_gender = inputData.emp_gender;
      EditAccount = 0;
      alert(`You have successfully updated ${inputData.emp_name} acccount`);
      resetDetails("edit-form-data");
      getEmpDetails();
      document.getElementById("editModal").style.display = "none";
    } else {
      alert("No Records found");
    }
  }
}
