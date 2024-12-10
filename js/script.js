const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })

    const forms = document.querySelector(".forms");
const loginLink = document.querySelector(".login-link");
const signupLink = document.querySelector(".signup-link");
const forgotLink = document.querySelector(".forgot-link");

signupLink.addEventListener("click", () => forms.classList.add("show-signup"));
loginLink.addEventListener("click", () => {
    forms.classList.remove("show-signup");
    forms.classList.remove("show-forgot-password");
});
forgotLink.addEventListener("click", () => forms.classList.add("show-forgot-password"));

})