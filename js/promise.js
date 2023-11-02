function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not ok.");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

const userId = 1;
fetchUserData(userId)
  .then((user) => {
    console.log("User data:", user);
  })
  .catch((error) => {
    console.log("Error fetching user data:", error);
  });
