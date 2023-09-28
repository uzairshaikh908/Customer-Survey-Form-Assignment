document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(this);
    let formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    // Display popup with form values
    const popupContent = Object.entries(formValues)
        .map(([key, value]) => `<strong>${key}:</strong> ${value}`)
        .join("<br>");

    const popup = window.open("", "Form Data", "width=400,height=400");
    popup.document.write(`<div>${popupContent}</div>`);
    popup.document.close();

    // Reset the form
    this.reset();
});

document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("survey-form").reset();
});