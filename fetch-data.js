async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContanier = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    dataContanier.innerHTML = "";
    const useList = document.createElement("<ul>");
    users.foreach((user) => {
      const listItem = document.createElement("ul");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    dataContanier.appendChild(listItem);
  } catch (error) {
    dataContanier.innerHTML = "";
    dataContanier.textContent = "Failed to load user data";
  }
}
