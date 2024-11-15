const displayProductData = async () => {
  const productContainer = document.getElementById("productContainer");
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await response.json();
    console.log(data);

    let productcard = "";
    data.forEach((product) => {
      const shortTitle =
        product.title.length > 30
          ? product.title.substring(0, 30) + "..."
          : product.title;
      const shortDescription =
        product.description.length > 80
          ? product.description.substring(0, 80) + "..."
          : product.description;
      productcard += `<div class='col'>
        <div class ='card'>
            <div class = 'card-body'>
            <img src="${product.image}" alt="${shortTitle}" class="card-img-top" />
                <h5 class = 'card-title'>${shortTitle} </h5>
                <p class="card-text">Price: ${product.price}</p>
                <p class="card-text">Description: ${shortDescription}</p>
               
            </div>
        </div>
       </div>`;
    });
    productContainer.innerHTML = productcard;
  } catch (error) {
    // Display an error message if fetching data fails
    userContainer.innerHTML = "An error occurred while fetching data.";
    console.error(error);
  }
};

displayProductData();
