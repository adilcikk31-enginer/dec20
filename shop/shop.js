document.addEventListener("DOMContentLoaded", async function () {
  // const signup = document.querySelector("#productList");
  await fetchProducts();
  await fetchCategories();
});
async function fetchProducts() {
  let user = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch("http://195.26.245.5:9505/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await response.json();
    filteredProducts = [...products];
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    loadProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
    productList.innerHTML = `<p class="text-danger text-center">Failed to load products.</p>`;
  }
}

async function fetchCategories() {
  let user = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch("http://195.26.245.5:9505/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user?.token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    categories = await response.json();
    filteredCategories = [...categories];
    localStorage.setItem("categories", JSON.stringify(filteredCategories));
    loadCategories();
  } catch (error) {
    console.error("Error fetching categories:", error);
    categoryList.innerHTML = `<p class="text-danger text-center">Failed to load categories.</p>`;
  }
}

function loadCategories() {
  const categoryList = document.getElementById("categories");
  const categories = JSON.parse(localStorage.getItem("categories"));

  if (!categories || categories.length === 0) {
    categoryList.innerHTML = `<p class="text-danger text-center">No categories available.</p>`;
    return;
  }

  categoryList.innerHTML = "";
  categories.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.className = "nav-item category-item";
    categoryItem.innerHTML = `<a class="nav-link" href="#">${category.name}</a>`;
    categoryList.appendChild(categoryItem);
  });
}

document.getElementById("categories").addEventListener("click", function (event) {
  if (event.target.classList.contains("nav-link")) {
    const selectedCategory = event.target.textContent.trim();
    const categories = JSON.parse(localStorage.getItem("categories"));
    const products = JSON.parse(localStorage.getItem("products"));

    const matchedCategory = categories.find(
      (category) => category.name === selectedCategory
    );

    if (matchedCategory) {
      const filteredProducts = products.filter(
        (product) => product.categoryId === matchedCategory.id
      );

      loadProducts(filteredProducts); 
    }
  }
});


function loadProducts(filteredProducts) {
  const productList = document.getElementById("productCards");
  const products = filteredProducts || JSON.parse(localStorage.getItem("products"));
  if (!products || products.length === 0) {
    productList.innerHTML = `<p class="text-danger text-center">No products available.</p>`;
    return;
  }

  productList.innerHTML = products.map(
    (product) => ` 
    <div class="col-md-3">
      <div class="card product-card">
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        <div class="card-body  text-center"">
          <h5 class="card-title">${product.brand} </br> ${product.model}</h5>
          <p class="card-text">${product.price}</p>
          <p>★★★★★ (62)</p>
          <a href="../produckpage/produckpage.html" class="btn btn-dark w-100" onclick="setProductDetails(${product.id})">məhsula bax</a>
        </div>
      </div>
    </div>`
  );
}

function setProductDetails(productId) {
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((p) => p.id === productId);
  if (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  }
}