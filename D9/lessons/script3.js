// Function expression to fetch and display user data

const displayUserData = async () => {
  // Select the user container element
  const userContainer = document.getElementById("userContainer");

  try {
    // Fetch user data from the JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // Check if the response is not successful
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    // Extract JSON data from the response
    const data = await response.json();

    console.log(data);
    let html = "";

    data.forEach((user) => {
      // Generate HTML markup for each user
      html += `<div class='col'>
        <div class ='card'>
            <div class = 'card-body'>
                <h5 class = 'card-title'>${user.name} </h5>
                <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
                <p class="card-text">Username: ${user.username}</p>
                <p class="card-text">Phone: ${user.phone}</p>
                <a href="${user.website}" class="card-link">Website</a>
            </div>
        </div>
       </div>
       `;
    });

    userContainer.innerHTML = html;
  } catch (error) {
    // Display an error message if fetching data fails
    userContainer.innerHTML = "An error occurred while fetching data.";
    console.error(error);
  }
};

// Button click event listener to call the displayUserData function
const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);
