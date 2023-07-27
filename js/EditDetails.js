var EditAccount = null;
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

function submitEditedData(inputData) {
  console.log("Id - ", EditAccount);

  const index = EmployeeData.findIndex((user) => user.emp_id === EditAccount);

  // If the object is found (index is not -1), edit its properties
  if (index !== -1) {
    EmployeeData[index].emp_id = inputData.emp_id;
    EmployeeData[index].emp_name = inputData.emp_name;
    EmployeeData[index].emp_age = inputData.emp_age;
    EmployeeData[index].emp_desg = inputData.emp_desg;
    EmployeeData[index].emp_image = inputData.emp_image;
    EmployeeData[index].emp_gender = inputData.emp_gender;

    alert(`You have successfully updated ${inputData.emp_name} acccount`);
    document.getElementById("editModal").style.display = "none";
  } else {
    alert("No Records found");
  }
}

// const inputBox = document.getElementById("emp_id");

// function handleKeyup(event) {
//   var valuedata = document.getElementById("emp_id").value;

//   var targetElement = document.getElementById("emp_id");
//   var error = document.getElementById("id_error");

//   let isDuplicate = false;

//   console.log("id ", EditAccount);

//   if (valuedata != EditAccount) {
//     if (parseInt(valuedata) < 0) {
//       addContentAfterElement(
//         "emp_id",
//         "The ID value cannot be negative",
//         "id_error"
//       );
//       inputBox.addEventListener("blur", keepFocusOnInput);
//       Errormessage = true;
//       return;
//     }

//     if (valuedata == 0) {
//       addContentAfterElement(
//         "emp_id",
//         "The ID value cannot be 0 or left blank.",
//         "id_error"
//       );
//       inputBox.addEventListener("blur", keepFocusOnInput);
//       inputBox.addEventListener("blur", keepFocusOnInput);
//     } else {
//       Userdata.forEach((obj) => {
//         if (obj.emp_id === parseInt(valuedata)) {
//           addContentAfterElement(
//             "emp_id",
//             "Id already as been taken.",
//             "id_error"
//           );
//           inputBox.addEventListener("blur", keepFocusOnInput);
//           isDuplicate = true;
//           Errormessage = true;
//           return;
//         }
//       });

//       if (!isDuplicate) {
//         // alert("reject");
//         removeRedBorderAndContent("emp_id", "id_error");
//         Errormessage = false;
//         inputBox.removeEventListener("blur", keepFocusOnInput);
//       }
//     }
//   } else {
//     removeRedBorderAndContent("emp_id", "id_error");
//     Errormessage = false;
//     inputBox.removeEventListener("blur", keepFocusOnInput);
//   }
// }

// function keepFocusOnInput() {
//   inputBox.focus();
// }

// function handleKeyDown(event) {
//   if (event.key === "Tab") {
//     event.preventDefault(); // Prevent default tab behavior
//   }
// }

// // Attach the event listener
// inputBox.addEventListener("keyup", handleKeyup);
// inputBox.addEventListener("keydown", handleKeyDown);
