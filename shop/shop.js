document.addEventListener("DOMContentLoaded", async function () {
  const signup = document.querySelector("#productList");

});
async function fetchProducts() {
  try {
    const response = await fetch("http://195.26.245.5:9505/api/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${activeUser?.token}`
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await response.json();
    filteredProducts = [...products];
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
    productList.innerHTML = `<p class="text-danger text-center">Failed to load products.</p>`;
  }
}
