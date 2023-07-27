async function getEmpDetails() {
  try {
    const table = document.getElementById("myTable");

    // Remove all rows except the first row (header row)
    while (table.rows.length > 1) {
      table.deleteRow(1); // Delete row at index 1 (the second row) repeatedly until only the header row is left
    }


    EmployeeData.forEach((emp) => {
      if (emp.emp_isActive) {
        const { emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender } =
          emp;
        insertRow(emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender);
      }
    });
  } catch (error) {
    console.error("Error fetching employee details:", error);
  }
}

function insertRow(emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender) {
  let table = document.getElementById("myTable");
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  let c5 = row.insertCell(4);
  let c6 = row.insertCell(5);

  c1.innerText = emp_id;
  c2.innerText = emp_name;
  c3.innerText = emp_age;
  c4.innerText = emp_desg;
  c5.innerText = emp_gender;

  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  let editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", function () {
    const editData = {
      emp_id,
      emp_name,
      emp_age,
      emp_desg,
      emp_image,
      emp_gender,
    };
    EditFunction(editData);
  });

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    DeleteFunction(emp_id, emp_name);
  });

  let viewButton = document.createElement("button");
  viewButton.innerHTML = '<i class="fas fa-eye"></i>';
  viewButton.classList.add("view-button");

  viewButton.addEventListener("click", function () {
    const editData = {
      emp_id,
      emp_name,
      emp_age,
      emp_desg,
      emp_image,
      emp_gender,
    };
    viewFunction(editData);
  });

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(viewButton);

  c6.appendChild(buttonContainer);
}
