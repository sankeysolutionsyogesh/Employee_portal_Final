var DeleteAccount = 0;



function DeleteFunction(empid, empname) {
    DeleteAccount = empid;

    document.getElementById('deleteModal').style.display = 'block';


    const DeleteID = document.getElementById("DeleteID");
    DeleteID.innerHTML = "Employee ID - " + empid;

    const DeleteName = document.getElementById("DeleteName");
    DeleteName.innerHTML = "Employee Name - " + empname;
}

function CancelDelete() {
    DeleteAccount = 0;
    document.getElementById('deleteModal').style.display = 'none';
}

function ConfirmDelete() {
    Userdata.forEach((emp, index) => {
        if (emp.emp_id == DeleteAccount) {

            var {
                emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender, emp_isActive
            } = emp;

            emp_isActive = false

            const updatedData = {
                emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender, emp_isActive
            }

            Userdata.splice(index, 1, updatedData);
            localStorage.setItem('employee_details', JSON.stringify(Userdata));

        }
    });

    location.reload();

}
