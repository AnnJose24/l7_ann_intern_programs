document.addEventListener("DOMContentLoaded", function () {
  loadContacts();
});

function onButtonClick() {
  document.getElementById("contact-form-section").className = "phone-number-input-section show";
  document.getElementById("contact-error").textContent = "";
}


function clearForm() {
  document.getElementById("contact-form").reset();
  document.getElementById("contact-form-section").className = "phone-number-input-section hide";
  document.getElementById("contact-error").textContent = "";
}

function submitForm() {
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let linkedin = document.getElementById("linkedin").value;
  let address = document.getElementById("address").value;

  let contactErrorElement = document.getElementById("contact-error");

  if (validatePhoneNumber(phone)) {
    saveContactDetails({ phone, email, linkedin, address });
    displayContactDetails();
    clearForm();
  } else {
    contactErrorElement.textContent = "Invalid phone number. Please enter a valid phone number.";
  }
}

function validatePhoneNumber(phoneNumber) {
  let phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phoneNumber);
}

function saveContactDetails(details) {
  let contactList = JSON.parse(sessionStorage.getItem("contacts")) || [];
  contactList.push(details);
  sessionStorage.setItem("contacts", JSON.stringify(contactList));
}

function loadContacts() {
  let contactDisplay = document.getElementById("contact-display");
  let contactList = JSON.parse(sessionStorage.getItem("contacts")) || [];

  let htmlContent = '';

  
  for (let i = 0; i < contactList.length; i++) {
    let contact = contactList[i];

    
    if (contact.phone && contact.email && contact.linkedin && contact.address) {
      
      htmlContent += `
        <div class="phone-entry">
          <p>Phone: ${contact.phone}</p>
          <p>Email: ${contact.email}</p>
          <p>LinkedIn: ${contact.linkedin}</p>
          <p>Address: ${contact.address}</p>
          <button class="delete-btn" onclick="deleteContact(${i})">Delete</button>
        </div>
      `;
    } else {
      
      htmlContent += `
        <div class="phone-entry">
          <p>Error: Incomplete contact information.</p>
        </div>
      `;
    }
  }

  
  if (contactList.length === 0) {
    htmlContent = `
      <div class="phone-entry">
        <p>No contacts available.</p>
      </div>
    `;
  }

 
  contactDisplay.innerHTML = htmlContent;
}

function displayContactDetails() {
  loadContacts();
}

function deleteContact(index) {
  let contactList = JSON.parse(sessionStorage.getItem("contacts")) || [];
  contactList.splice(index, 1);
  sessionStorage.setItem("contacts", JSON.stringify(contactList));
  loadContacts();
}
