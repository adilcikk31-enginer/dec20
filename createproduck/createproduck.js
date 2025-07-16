document.addEventListener("DOMContentLoaded", function () {
  const createProductForm = document.querySelector("#create-product form");
  
  createProductForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(createProductForm);
    const productData = Object.fromEntries(formData.entries());


    if (Object.values(productData).some((value) => value.trim() === "")) {
      showMessage("All fields are required!", "danger");
      return;
    }
    // Send productData to the server or process it as needed
    fetch("https://example.com/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Product created:", data);
      // Optionally, show a success message or redirect the user
    })
    .catch(error => {
      console.error("Error creating product:", error);
    });
  });
});     