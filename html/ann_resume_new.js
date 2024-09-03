



class ContactManager {
  constructor() {
    this.contactDisplay = document.getElementById("contact-display");
    this.contactFormSection = document.getElementById("contact-form-section");
    this.contactErrorElement = document.getElementById("contact-error");
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => this.loadContacts());
    document.getElementById("submit-btn").addEventListener("click", () => this.submitContactForm());
    document.getElementById("cancel-btn").addEventListener("click", () => this.clearContactForm());
    document.querySelector("input[name='answer']").addEventListener("click", () => this.showContactForm());

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const index = event.target.getAttribute("data-index");
        this.deleteContact(index);
      }
    });
  }

  showContactForm() {
    this.contactFormSection.className = "phone-number-input-section show";
    this.contactErrorElement.textContent = "";
  }

  clearContactForm() {
    document.getElementById("contact-form").reset();
    this.contactFormSection.className = "phone-number-input-section hide";
    this.contactErrorElement.textContent = "";
  }

  submitContactForm() {
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin").value;
    const address = document.getElementById("address").value;

    if (this.validatePhoneNumber(phone)) {
      this.saveContactDetails({ phone, email, linkedin, address });
      this.displayContactDetails();
      this.clearContactForm();
    } else {
      this.contactErrorElement.textContent = "Invalid phone number. Please enter a valid phone number.";
    }
  }

  validatePhoneNumber(phoneNumber) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  }

  saveContactDetails(details) {
    let contactList = JSON.parse(sessionStorage.getItem("contacts")) || [];
    contactList.push(details);
    sessionStorage.setItem("contacts", JSON.stringify(contactList));
  }

  loadContacts() {
    let contactList = JSON.parse(sessionStorage.getItem("contacts")) || [];
    let htmlContent = "";

    contactList.forEach((contact, index) => {
      if (contact.phone && contact.email && contact.linkedin && contact.address) {
        htmlContent += `
            <div class="phone-entry">
              <p>Phone: ${contact.phone}</p>
              <p>Email: ${contact.email}</p>
              <p>LinkedIn: ${contact.linkedin}</p>
              <p>Address: ${contact.address}</p>
              <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
          `;
      } else {
        htmlContent += `
            <div class="phone-entry">
              <p>Error: Incomplete contact information.</p>
            </div>
          `;
      }
    });

    if (contactList.length === 0) {
      htmlContent = `
          <div class="phone-entry">
            <p>No contacts available.</p>
          </div>
        `;
    }

    this.contactDisplay.innerHTML = htmlContent;
  }

  displayContactDetails() {
    this.loadContacts();
  }

  deleteContact(index) {
    let contactList = JSON.parse(sessionStorage.getItem("contacts")) || [];
    contactList.splice(index, 1);
    sessionStorage.setItem("contacts", JSON.stringify(contactList));
    this.loadContacts();
  }
}

const contactManager = new ContactManager();









class EducationManager {
  constructor() {
    this.educationDisplay = document.getElementById("education-display");
    this.educationFormSection = document.getElementById("education-form-section");
    this.educationErrorElement = document.getElementById("education-error");
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => this.loadEducation());
    document.getElementById("education-submit-btn").addEventListener("click", () => this.submitEducationForm());
    document.getElementById("education-cancel-btn").addEventListener("click", () => this.clearEducationForm());
    document.querySelector("input[name='education']").addEventListener("click", () => this.showEducationForm());

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("eddelete-btn")) {
        const index = event.target.getAttribute("data-index");
        this.deleteEducation(index);
      }
    });
  }

  showEducationForm() {
    this.educationFormSection.className = "education-input-section show";
    this.educationErrorElement.textContent = "";
  }

  clearEducationForm() {
    document.getElementById("education-form").reset();
    this.educationFormSection.className = "education-input-section hide";
    this.educationErrorElement.textContent = "";
  }

  submitEducationForm() {
    const institute = document.getElementById("institute").value;
    const duration = document.getElementById("duration").value;
    const cgpa = document.getElementById("cgpa").value;

    if (this.validateCGPA(cgpa)) {
      this.saveEducationDetails({ institute, duration, cgpa });
      this.displayEducationDetails();
      this.clearEducationForm();
    } else {
      this.educationErrorElement.textContent = "Invalid CGPA format. Please enter a valid CGPA.";
    }
  }

  validateCGPA(cgpa) {
    const cgpaPattern = /^[0-9]+(\.[0-9]+)?$/;
    return cgpaPattern.test(cgpa);
  }

  saveEducationDetails(details) {
    let educationList = JSON.parse(sessionStorage.getItem("education")) || [];
    educationList.push(details);
    sessionStorage.setItem("education", JSON.stringify(educationList));
  }

  loadEducation() {
    let educationList = JSON.parse(sessionStorage.getItem("education")) || [];
    let htmlContent = "";

    educationList.forEach((education, index) => {
      if (education.institute && education.duration && education.cgpa) {
        htmlContent += `
            <div class="education-entry">
              <p>Institute: ${education.institute}</p>
              <p>Duration: ${education.duration}</p>
              <p>CGPA: ${education.cgpa}</p>
              <button class="eddelete-btn" data-index="${index}">Delete</button>
            </div>
          `;
      } else {
        htmlContent += `
            <div class="education-entry">
              <p>Error: Incomplete education information.</p>
            </div>
          `;
      }
    });

    if (educationList.length === 0) {
      htmlContent = `
          <div class="education-entry">
            <p>No education details available.</p>
          </div>
        `;
    }

    this.educationDisplay.innerHTML = htmlContent;
  }

  displayEducationDetails() {
    this.loadEducation();
  }

  deleteEducation(index) {
    let educationList = JSON.parse(sessionStorage.getItem("education")) || [];
    educationList.splice(index, 1);
    sessionStorage.setItem("education", JSON.stringify(educationList));
    this.loadEducation();
  }
}

const educationManager = new EducationManager();







class ExperienceManager {
  constructor() {
    this.experienceDisplay = document.getElementById("experience-display");
    this.experienceFormSection = document.getElementById("experience-form-section");
    this.experienceErrorElement = document.getElementById("experience-error");
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => this.loadExperience());
    document.getElementById("experience-submit-btn").addEventListener("click", () => this.submitExperienceForm());
    document.getElementById("experience-cancel-btn").addEventListener("click", () => this.clearExperienceForm());
    document.querySelector("input[name='experience']").addEventListener("click", () => this.showExperienceForm());

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("exdelete-btn")) {
        const index = event.target.getAttribute("data-index");
        this.deleteExperience(index);
      }
    });
  }

  showExperienceForm() {
    this.experienceFormSection.className = "experience-input-section show";
    this.experienceErrorElement.textContent = "";
  }

  clearExperienceForm() {
    document.getElementById("experience-form").reset();
    this.experienceFormSection.className = "experience-input-section hide";
    this.experienceErrorElement.textContent = "";
  }

  submitExperienceForm() {
    const designation = document.getElementById("designation").value;
    const organisation = document.getElementById("organisation").value;
    const duration = document.getElementById("duration").value;

    if (this.validateDuration(duration)) {
      this.saveExperienceDetails({ designation, organisation, duration });
      this.displayExperienceDetails();
      this.clearExperienceForm();
    } else {
      this.experienceErrorElement.textContent = "Invalid duration format. Please enter a valid duration.";
    }
  }

  validateDuration(duration) {
   
    const durationPattern = /^[\w\s]+$/;
    return durationPattern.test(duration);
  }

  saveExperienceDetails(details) {
    let experienceList = JSON.parse(sessionStorage.getItem("experience")) || [];
    experienceList.push(details);
    sessionStorage.setItem("experience", JSON.stringify(experienceList));
  }

  loadExperience() {
    let experienceList = JSON.parse(sessionStorage.getItem("experience")) || [];
    let htmlContent = "";

    experienceList.forEach((experience, index) => {
      if (experience.designation && experience.organisation && experience.duration) {
        htmlContent += `
            <div class="experience-entry">
              <p>Designation: ${experience.designation}</p>
              <p>Organisation: ${experience.organisation}</p>
              <p>Duration: ${experience.duration}</p>
              <button class="exdelete-btn" data-index="${index}">Delete</button>
            </div>
          `;
      } else {
        htmlContent += `
            <div class="experience-entry">
              <p>Error: Incomplete experience information.</p>
            </div>
          `;
      }
    });

    if (experienceList.length === 0) {
      htmlContent = `
          <div class="experience-entry">
            <p>No experience details available.</p>
          </div>
        `;
    }

    this.experienceDisplay.innerHTML = htmlContent;
  }

  displayExperienceDetails() {
    this.loadExperience();
  }

  deleteExperience(index) {
    let experienceList = JSON.parse(sessionStorage.getItem("experience")) || [];
    experienceList.splice(index, 1);
    sessionStorage.setItem("experience", JSON.stringify(experienceList));
    this.loadExperience();
  }
}

const experienceManager = new ExperienceManager();
