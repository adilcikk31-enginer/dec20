document.addEventListener("DOMContentLoaded", function () {
  const createProductForm = document.querySelector("#myForm");
  const categoryId = document.querySelector("#categoryId");

  let categoryArr = [];

  // ✅ Kategoriyalar səhifə yüklənəndə alınsın
  let user = JSON.parse(localStorage.getItem("user"));
  fetch("http://195.26.245.5:9505/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user?.token}`,
    },
  })
    .then((response) => response.json())
    .then((categories) => {
      categoryArr = categories;
      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.name; // Seçim dəyəri kateqoriya adı olur
        option.innerHTML = category.name;
        categoryId.append(option);
      });
    });

  createProductForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(createProductForm);
    const productData = Object.fromEntries(formData.entries());

    if (Object.values(productData).some((value) => value.trim() === "")) {
      return;
    }

    // ✅ Kateqoriya adını ID-yə çevir
    const selectedCategory = categoryArr.find(cat => cat.name === productData.categoryId);
    if (selectedCategory) {
      productData.categoryId = selectedCategory.id;
    } else {
      return;
    }

    fetch("http://195.26.245.5:9505/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user?.token}`,
      },
      body: JSON.stringify(productData),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Product created:", data);
      window.location.href ="userProduck.html"
      })
      .catch(error => {
        console.error("Error creating product:", error);
      });
  });
});
