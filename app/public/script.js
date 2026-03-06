const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    bookName: document.getElementById("bookName").value,
    authorName: document.getElementById("authorName").value,
  };

  const response = await fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  if (response.ok) {
    message.innerText = result.message;
    form.reset();
  } else {
    message.innerText = "Registration Failed";
  }
});