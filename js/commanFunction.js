// Function to add red border color and the content

var onPage = "addSide";

var Errormessage = false;

var addID = "";
var addErrorMessage = false;



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


//Reset form data 
function resetDetails(id) {
  removeRedBorderAndContent("emp_id", "id_error");

  
  removeRedBorderAndContent(addID, addErrorMessage);
  var formData = document.getElementById(id);
  formData.reset();
}



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

function preventNumberInputNavigation(event) {
  event.preventDefault();
}