export class Login {

    constructor() {
        this.emailArray = [];
        this.passwordArray = [];
        this.loginBox = document.getElementById("login");
        this.regBox = document.getElementById("register");
        this.loginTab = document.getElementById("lt");
        this.regTab = document.getElementById("rt");
    }

    regTabFun(event) {
        event.preventDefault();

        this.regBox.style.visibility = "visible";
        this.loginBox.style.visibility = "hidden";

        this.regTab.style.backgroundColor = "rgb(12, 132, 189)";
        this.loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
    }

    loginTabFun(event) {
        event.preventDefault();

        this.regBox.style.visibility = "hidden";
        this.loginBox.style.visibility = "visible";

        this.loginTab.style.backgroundColor = "rgb(12, 132, 189)";
        this.regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
    }

    forTabFun(event) {
        event.preventDefault();

        this.regBox.style.visibility = "hidden";
        this.loginBox.style.visibility = "hidden";

        this.regTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";
        this.loginTab.style.backgroundColor = "rgba(11, 177, 224, 0.82)";

    }

    register(event) {
        event.preventDefault();

        let email = document.getElementById("re").value;
        let password = document.getElementById("rp").value;
        let passwordRetype = document.getElementById("rrp").value;

        if (email === "") alert("Email required.");
        else if (password === "") alert("Password required.");
        else if (passwordRetype === "") alert("Password required.");
        else if (password !== passwordRetype) alert("Password don't match retype your Password.");
        else if (this.emailArray.indexOf(email) === -1) {
            this.emailArray.push(email);
            this.passwordArray.push(password);
            // console.log(db);
            // db.user = {'email': email, 'password': password};
            alert(email + "  Thanks for registration. \nTry to login Now");

            document.getElementById("re").value = "";
            document.getElementById("rp").value = "";
            document.getElementById("rrp").value = "";
        } else alert(email + " is already register.");
    }

    login(event) {
        event.preventDefault();

        let email = document.getElementById("se").value;
        let password = document.getElementById("sp").value;

        let i = this.emailArray.indexOf(email);

        if (this.emailArray.indexOf(email) === -1) {
            if (email === "") {
                alert("Email required.");
                return;
            }
            alert("Email does not exist.");
        } else if (this.passwordArray[i] !== password) {
            if (password === "") {
                alert("Password required.");
                return;
            }
            alert("Password does not match.");
        } else {
            document.querySelector('.settings').style.visibility = 'visible';
            document.querySelector('#container').style.visibility = 'hidden';
            document.querySelector('#login').style.visibility = 'hidden';
            document.querySelector('#container').style.height = '0';
            alert(email + " yor are login Now \n welcome to our website.");

            document.getElementById("se").value = "";
            document.getElementById("sp").value = "";
        }

    }
}
