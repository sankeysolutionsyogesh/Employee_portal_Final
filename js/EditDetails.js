var EditAccount = 0;
var Errormessage = false

function EditFunction(EmpData) {
    // const editData = { emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender }
    //             EditFunction(editData)

    document.getElementById("emp_id").value = EmpData.emp_id;
    document.getElementById("emp_name").value = EmpData.emp_name;
    document.getElementById("emp_age").value = EmpData.emp_age;
    document.getElementById("emp_desg").value = EmpData.emp_desg;
    document.getElementById("emp_image").value = EmpData.emp_image;
    document.getElementById("emp_gender").value = EmpData.emp_gender;

    EditAccount = EmpData.emp_id;

    document.getElementById('editModal').style.display = 'block';
}

function validateID() {

    var emp_id = parseInt(document.getElementById("emp_id").value);

    Userdata.forEach(obj => {
        // console.log("User", obj)

        if (obj.emp_id == emp_id) {
            addContentAfterElement('emp_id', "This ID is taken. Enter valid ID.", "id_error");
            Errormessage = true
        } else {
            removeRedBorderAndContent("emp_id", "id_error");
            Errormessage = false

        }
    });


}


function CancelEdit() {
    EditAccount = 0;
    document.getElementById('editModal').style.display = 'none';
}



// Function to remove red border color and the content added by insertAdjacentHTML
function removeRedBorderAndContent(elementId, errorMessage) {
    var targetElement = document.getElementById(elementId);
    var error = document.getElementById(errorMessage);

    if (targetElement) {
        targetElement.style.borderColor = "black";
        error.innerHTML = " ";
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}



function addContentAfterElement(elementId, content, errorMessage) {
    var targetElement = document.getElementById(elementId);
    var error = document.getElementById(errorMessage);

    if (targetElement) {
        targetElement.style.borderColor = "red";
        error.innerHTML = content;
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}


function isValidUrl(str) {
    const pattern = new RegExp(
        '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
        'i'
    );
    // return pattern.test(str);
    return true;

}



var addID = ""
var addErrorMessage = ""


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
        const data = document.getElementById(val).value
        return data.trim() !== "";
    }

    // Checking individual variables
    if (!isFieldFilled("emp_id")) {

        addID = 'emp_id';
        addErrorMessage = "id_error";
        addContentAfterElement('emp_id', "Please enter ID", "id_error");
        // addErrorStyle('emp_id', "Employee ID is required.");
        return;
    }

    if (!isFieldFilled("emp_name")) {
        addID = 'emp_name';
        addErrorMessage = "name_error";
        addContentAfterElement('emp_name', "Please enter Employee Name", "name_error");
        return;
    }

    if (!isFieldFilled("emp_age")) {
        addID = 'emp_age';
        addErrorMessage = "age_error";
        addContentAfterElement('emp_age', "Please enter Employee Age", "age_error");
        return;
    }

    if (!isFieldFilled("emp_desg")) {
        addID = 'emp_desg';
        addErrorMessage = "desg_error";
        addContentAfterElement('emp_desg', "Please select Employee Designation", "desg_error");
        return;
    }

    if (!isFieldFilled("emp_image")) {
        addID = 'emp_image';
        addErrorMessage = "image_error";
        addContentAfterElement('emp_image', "Please upload Employee image", "image_error");
        return;
    }

    if (!isFieldFilled("emp_gender")) {
        addID = 'emp_gender';
        addErrorMessage = "gender_error";
        addContentAfterElement('emp_gender', "Please select Employee gender", "gender_error");
        return;
    }





    if (parseInt(emp_age) >= 18 && parseInt(emp_age) <= 60) {

        console.log("Age is valid.");
        if (isValidUrl(emp_image)) {
            console.log("URl is valid.");
            var emp_id = parseInt(emp_id);
            var emp_age = parseInt(emp_age);
            var emp_isActive = true;
            const inputData = {
                emp_id, emp_name, emp_age, emp_desg, emp_image, emp_gender, emp_isActive
            }
            if (!Errormessage) {
                submitData(inputData)
            }

        } else {
            addID = 'emp_image';
            addErrorMessage = "image_error";
            addContentAfterElement('emp_image', "Please upload valid url", "image_error");
        }

    } else {
        addID = 'emp_age';
        addErrorMessage = "age_error";
        addContentAfterElement('emp_age', "Please enter Age between 18 to 60", "age_error");
        return;
    }



}

function submitData(inputData) {
    console.log("Id - ", EditAccount)

    let userData = JSON.parse(localStorage.getItem('employee_details'));


    const index = userData.findIndex(user => user.emp_id === EditAccount);

    // If the object is found (index is not -1), edit its properties
    if (index !== -1) {


        userData[index].emp_id = inputData.emp_id;
        userData[index].emp_name = inputData.emp_name;
        userData[index].emp_age = inputData.emp_age;
        userData[index].emp_desg = inputData.emp_desg;
        userData[index].emp_image = inputData.emp_image;
        userData[index].emp_gender = inputData.emp_gender;

        localStorage.setItem('employee_details', JSON.stringify(userData));
        alert(`You have successfully updated ${inputData.emp_name} acccount`)
        location.reload();


    } else {
        alert("No Records found")
    }
}



const inputBox = document.getElementById("emp_id");

function handleKeyup(event) {


    var valuedata = document.getElementById("emp_id").value;


    var targetElement = document.getElementById('emp_id');
    var error = document.getElementById('id_error');

    let isDuplicate = false;

    console.log("id ", EditAccount)

    if (valuedata != EditAccount) {
        if (valuedata == 0) {
            targetElement.style.borderColor = "red";
            error.innerHTML = "The ID value cannot be 0 or left blank.";
            inputBox.addEventListener('blur', keepFocusOnInput);

        } else {

            Userdata.forEach(obj => {
                if (obj.emp_id === parseInt(valuedata)) {
                    // alert("aceept");
                    console.log(valuedata, "empid", obj.emp_id);
                    targetElement.style.borderColor = "red";
                    error.innerHTML = "Id already as been taken.";
                    inputBox.addEventListener('blur', keepFocusOnInput);
                    isDuplicate = true;
                    Errormessage = true
                    return; // This will exit the function and break the loop
                }
            });

            if (!isDuplicate) {
                // alert("reject");
                removeRedBorderAndContent("emp_id", "id_error");
                Errormessage = false;
                inputBox.removeEventListener('blur', keepFocusOnInput);
            }

        }

    }else{
        removeRedBorderAndContent("emp_id", "id_error");
        Errormessage = false;
        inputBox.removeEventListener('blur', keepFocusOnInput);
    }

}

function keepFocusOnInput() {
    inputBox.focus();
}

function handleKeyDown(event) {
    if (event.key === 'Tab') {
        event.preventDefault(); // Prevent default tab behavior
    }
}


// Attach the event listener
inputBox.addEventListener("keyup", handleKeyup);
inputBox.addEventListener("keydown", handleKeyDown);
