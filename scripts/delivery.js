// Function to check browser form validation
function checkBuyerValidation(event) {
  event.preventDefault(); // Prevent the form from submitting

  const form = document.getElementById("buyerForm");

  // Check if the form is valid
  if (form.checkValidity()) {
    // If the form is valid, show the question
    document.getElementById("question").removeAttribute("hidden");
  } else {
    // If the form is invalid, trigger browser validation messages
    form.reportValidity();
  }
}

// Function to check browser form validation
function checkReceiverValidation(event) {
  event.preventDefault(); // Prevent the form from submitting

  const form = document.getElementById("receiverForm");

  // Check if the form is valid
  if (form.checkValidity()) {
    // If the form is valid, show the question
    document.getElementById("delivery").removeAttribute("hidden");
  } else {
    // If the form is invalid, trigger browser validation messages
    form.reportValidity();
  }
}

// Function to check browser form validation
function pageValidation(event) {
  event.preventDefault(); // Prevent the form from submitting

  const bform = document.getElementById("buyerForm");
  const rform = document.getElementById("receiverForm");
  const dform = document.getElementById("deliveryForm");

  // Check if the buyer form is valid
  if (bform.checkValidity()) {
    // If the form is valid, show the question
    true;
  } else {
    // If the form is invalid, trigger browser validation messages
    bform.reportValidity();
  }

  // Check if the receiver form is valid
  if (rform.checkValidity()) {
    // If the form is valid, show the question
    true;
  } else {
    // If the form is invalid, trigger browser validation messages
    rform.reportValidity();
  }

  // Check if the delivery form is valid
  if (dform.checkValidity()) {
    // If the form is valid, show the question
    document.getElementById("buyer").setAttribute("hidden", "");
    document.getElementById("question").setAttribute("hidden", "");
    document.getElementById("receiver").setAttribute("hidden", "");
    document.getElementById("delivery").setAttribute("hidden", "");
    document.getElementById("orderComplete").removeAttribute("hidden");
  } else {
    // If the form is invalid, trigger browser validation messages
    bform.reportValidity();
    rform.reportValidity();
    dform.reportValidity();
  }
}
