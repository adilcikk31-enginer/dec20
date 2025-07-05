const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

console.log(selectedProduct);
let productPage = document.getElementById("product-details");
productPage.innerHTML = `<div class="row g-5">
        <div class="col-md-6">
          <img src="${selectedProduct.imageUrl}" alt="${selectedProduct.name}" class="img-fluid rounded">
        </div>
        <div class="col-md-6">
          <h3>${selectedProduct.brand} ${selectedProduct.model}</h3>
          <div class="d-flex align-items-center mb-2">
            <div class="text-warning me-2">
              ★★★★☆
            </div>
            <span>(150 reviews)</span>
            <span class="ms-3 text-success">1 in stock</span>
          </div>
          <h4 class="text-danger">${selectedProduct.price}</h4>
          <p>${selectedProduct.description}</p>
          <button class="btn btn-danger mb-4">sebete ekle</button>

          <div class="card p-3 mb-3">
            <div class="d-flex align-items-center">
              <i class="bi bi-truck me-2"></i>
              <div>Free Delivery <br><small>Enter your postal code for Delivery Availability</small></div>
            </div>
          </div>
          <div class="card p-3">
            <div class="d-flex align-items-center">
              <i class="bi bi-arrow-counterclockwise me-2"></i>
              <div>Return Delivery <br><small>Free 30 days Delivery Returns. <a href="#">Details</a></small></div>
            </div>
          </div>
        </div>
      </div>`;
