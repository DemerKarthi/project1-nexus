function validation() {
    var passwd = document.getElementById("pass").value;
    var cpasswd = document.getElementById("cpass").value;
    let user = document.getElementById("username").value;
    let email = document.getElementById("emailid").value;

    if (user == "") {
        document.getElementById("message").innerHTML = " Enter username !";
        return false;
    }
    if (email == "") {
        document.getElementById("message").innerHTML = " Enter the email id !";
        return false;
    }

    if (passwd == "") {
        document.getElementById("message").innerHTML = " Enter the password !";
        return false;
    }

    if (passwd.length < 8) {
        document.getElementById("message").innerHTML = " Password lenght must be <br>atleast 8 characters";
        return false;
    }

    if (cpasswd == "") {
        document.getElementById("message").innerHTML = " Enter the confirm password !";
        return false;
    }

    if (passwd != cpasswd) {
        document.getElementById("message").innerHTML = " Password not match !";
        return false;
    }


    if (passwd.value == cpasswd.value) {
        popup.classList.add("open-slide")
        return false;
    }
}


function closePopup() {
    let popup = document.getElementById("popup");

    popup.classList.remove("open-slide")
}

const lock = document.querySelectorAll(".icon");
let popup = document.getElementById("popup");
lock.forEach((locks) => {
    locks.addEventListener("click", () => {
        const passInput = locks.parentElement.querySelector("input");
        if (passInput.type === "password") {
            locks.classList.replace("bx-lock-alt", "bxs-lock-open-alt");
            return (passInput.type = "text");
        }
        locks.classList.replace("bxs-lock-open-alt", "bx-lock-alt");
        passInput.type = "password";
    })
})