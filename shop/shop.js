document.addEventListener("DOMContentLoaded", async function () {
  // const signup = document.querySelector("#productList");
  await fetchProducts();
});
async function fetchProducts() {
  let user = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch("http://195.26.245.5:9505/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user?.token}`
      }
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


function loadProducts() {
  const productList = document.getElementById("productCards");
  const products = JSON.parse(localStorage.getItem("products"));

  if (!products || products.length === 0) {
    productList.innerHTML = `<p class="text-danger text-center">No products available.</p>`;
    return;
  }

  productList.innerHTML = products.map(product => ` 
    <div class="col-md-3">
      <div class="card product-card">
        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
        <div class="card-body  text-center"">
          <h5 class="card-title">${product.brand} </br> ${product.model}</h5>
          <p class="card-text">${product.price}</p>
          <p>★★★★★ (62)</p>
          <a href="../produckpage/produckpage.html" class="btn btn-dark w-100">məhsula bax</a>
        </div>
      </div>
    </div>`);
}
