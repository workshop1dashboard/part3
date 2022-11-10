<template>
  <div v-show="value3" id="container">
    <div id="tabs">
      <p :style="color1"  id="lt" class="tabs" @click="loginTabFun()">Log in</p>
      <p :style="color2" id="rt" class="tabs" @click="regTabFun()">Register</p>

      <div id="clear"></div>
    </div>

    <div id="cont">
      <div v-show="value1" id="login" class="comm">
        <h3>Sign in</h3>

        <input id="se" type="email" placeholder="Email" required/>
        <input id="sp" type="password" placeholder="Password" required/>
        <input type="submit" @click="login()" value="Submit"/>
      </div>
      <div v-show="value2" id="register" class="comm">
        <h3>Register</h3>

        <input id="re" type="email" placeholder="Email" required/>
        <input id="rp" type="password" placeholder="Password" required/>
        <input id="rrp" type="password" placeholder="Re write Password" required/>
        <input type="submit" @click="register()" value="Submit"/>

      </div >
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'LoginItem',
  data() {
    return {
      emailArray: [],
      passwordArray: [],
      loginBox: document.getElementById("login"),
      regBox: document.getElementById("register"),
      loginTab: document.getElementById("lt"),
      regTab: document.getElementById("rt"),
      value1: true,
      value2: false,
      value3: true,
      color1: {
        backgroundColor: "#5D737E"
      },
      color2: {
        backgroundColor: ""
      }
    }
  },
  methods: {
    regTabFun() {
      this.value2 = true;
      this.value1 = false;

      this.color2 = "rgb(12, 132, 189)";
      this.color1 = "rgba(11, 177, 224, 0.82)";
    },

    loginTabFun() {
      this.value2 = false;
      this.value1= true;

      this.color1 = "rgb(12, 132, 189)";
      this.color2 = "rgba(11, 177, 224, 0.82)";
    },

    async register() {
      let email = document.getElementById("re").value;
      let password = document.getElementById("rp").value;
      let passwordRetype = document.getElementById("rrp").value;
      const users = await axios.get(`http://workshoppart3.herokuapp.com/user`);
      let checkEmail = false;
      for (let i = 0; i < users.data.length; i++) {
        if (users.data[i].email === email) checkEmail = true;
      }
      if (email === "") alert("Email Obligatoire");
      else if (password === "") alert("Mot de passe obligatoire");
      else if (passwordRetype === "") alert("Mot de passe obligatoire");
      else if (password !== passwordRetype) alert("Mot de passe différent");
      else if (!checkEmail) {
        await axios.post(`http://workshoppart3.herokuapp.com/user`, {'email': email, 'password': password});
        alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById("re").value = "";
        document.getElementById("rp").value = "";
        document.getElementById("rrp").value = "";
      } else alert(email + " existe déjà");
    },

    async login() {
      let email = document.getElementById("se").value;
      let password = document.getElementById("sp").value;
      let check = false;
      const users = await axios.get(`http://workshoppart3.herokuapp.com/user`);
      for (let i = 0; i < users.data.length; i++) {
        if (users.data[i].email === email && users.data[i].password === password) {
          check = true;
        }
      }
      if (check) {
        document.getElementById("se").value = "";
        document.getElementById("sp").value = "";
        this.value3 = false;
        this.$router.push('/init-quiz');
      } else {
        alert("Erreur dans les identifiants");
      }

    }
  }
}
</script>


<style scoped>

.tabs {
  display: table-cell;
  width: 30%;
  background-color: #5D737E;
  padding: 10px;
  float: left;
  text-align: center;
  vertical-align: middle;
  border: 2px solid #ffffff;
  border-bottom: 0;
  position: relative;
  font-size: 1.3em;
  color: #ffffff;
}

.tabs:hover, p{
  cursor: pointer;
}

#lt {
  background-color: #5D737E;
}

#cont {
  width: 100%;
  height: 300px;
  background-color: #5D737E;
  border: 2px solid #ffffff;
}

#clear {
  clear: both;
}

.comm {
  position: absolute;
}

p {
  padding: 10px 15px;
  font-size: 1.3em;
  color: #ffffff;
}

</style>
