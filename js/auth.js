function showForm(type) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const loginTab = document.getElementById("loginTab");
  const registerTab = document.getElementById("registerTab");

  if (type === "login") {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  }
  
}
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(registerForm);

  try {
    const response = await fetch("http://localhost:7000/api/v1/users/register", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (response.ok) {
      alert("✅ Registered Successfully!");
      registerForm.reset();
    } else {
      alert("❌ Error: " + result.message || "Something went wrong");
    }
  } catch (err) {
    alert("❌ Network error or server down");
    console.error(err);
  }
});

