import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal, Button } from "react-bootstrap"; // Import Modal and Button from React-Bootstrap

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalProduct, setModalProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setCategories([...new Set(data.map((product) => product.category))]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Function to handle category change for filtering
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products); // Show all products if no category is selected
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  // Function to open the modal with the specific product
  const handleOpenModal = (product) => {
    setModalProduct(product);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setModalProduct(null); // Clear the product when closing the modal
  };

  // Function to shorten the product title to 20 characters
  const shortenTitle = (title, maxLength = 30) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h1>Our Products</h1>

        {/* Search Input */}
        <input
          type="text"
          className="form-control"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{ width: "300px" }}
        />

        {/* Category Dropdown using React-Bootstrap */}
        <Dropdown onSelect={handleCategoryChange} className="float-right">
          <Dropdown.Toggle variant="secondary" id="categoryDropdown">
            {selectedCategory || "Filter by Category"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="">All Categories</Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item key={category} eventKey={category}>
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Products Grid */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <div className="col-12">No products found</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-5">
              <div
                className="card"
                style={{ minHeight: "500px", alignItems: "center" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{shortenTitle(product.title)}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="btn btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Bootstrap Modal using React-Bootstrap */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={modalProduct?.image}
            alt={modalProduct?.title}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "300px",
            }}
          />
          <p>{modalProduct?.description}</p>
          <p>
            <strong>Price: </strong>${modalProduct?.price}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Products;
