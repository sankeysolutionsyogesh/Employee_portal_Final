// Function to add red border color and the content

var onPage = "addSide";

//change side
function handleAddClick() {
  if (onPage != "addSide") {
    const addSide = document.getElementById("formData");

    addSide.style.display = "";

    const tableElement = document.getElementById("ViewSide");

    tableElement.style.display = "none";
    onPage = "addSide";
  }
}

async function handleViewClick() {
  if (onPage !== "viewSide") {
    const addSide = document.getElementById("formData");

    addSide.style.display = "none";
    const tableElement = document.getElementById("ViewSide");

    tableElement.style.display = "";
    onPage = "viewSide";

    await getEmpDetails();
  }
}

const addBarElement = document.querySelector(".add-bar");
const viewBarElement = document.querySelector(".view-bar");
addBarElement.addEventListener("click", handleAddClick);
viewBarElement.addEventListener("click", handleViewClick);

//Check form data validation
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

function isValidUrl(url) {
  const imageExtensionsRegex = /\.(png|jpe?g|gif)$/i;
  return imageExtensionsRegex.test(url);
}

const inputBox = document.getElementById("emp_id");

function handleKeyup(event) {
  var valuedata = document.getElementById("emp_id").value;

  // console.log(typeof(parseInt(valuedata)))
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
