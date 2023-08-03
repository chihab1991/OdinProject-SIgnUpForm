const errorMsg = document.querySelector(".error");
const myForm = document.querySelector(".my-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

myForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (password.value !== confirmPassword.value) {
		errorMsg.style.display = "block";
		return;
	}
	errorMsg.style.display = "none";
});
