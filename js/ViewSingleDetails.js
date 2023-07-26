var viewAccount = 0;


function viewFunction(editData) {

    document.getElementById('viewModal').style.display = 'block';

    const { emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender } = editData

    console.log("adtd", editData)
    viewAccount = emp_id;

    const show_empId = document.getElementById("show_empId");
    const show_Name = document.getElementById("show_Name");
    const show_Age = document.getElementById("show_Age");
    const show_Desg = document.getElementById("show_Desg");
    const show_gender = document.getElementById("show_gender");

    show_empId.innerHTML = emp_id;
    show_Name.innerHTML = emp_name;
    show_Age.innerHTML = emp_age;
    show_Desg.innerHTML = emp_desg;
    show_gender.innerHTML = emp_gender;


    const imageElement = document.getElementById("show_Image");
    imageElement.setAttribute("src", emp_image);


}

function CloseViewModal() {
    document.getElementById('viewModal').style.display = 'none';

}
