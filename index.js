function submitData(userName, userEmail) {
  const body = document.querySelector("body");
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    const dataContent = document.createElement("p");
    dataContent.innerHTML = data.id;
    body.appendChild(dataContent);
  })
  .catch(error => {
    alert("Error Here!");
    console.log(error.message);
    const errorContent = document.createElement("p");
    errorContent.innerHTML = error.message;
    body.appendChild(errorContent)
  });
}
