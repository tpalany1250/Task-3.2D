<template>

  <br><br>


  <div class="login-container">
    <h2>Admin Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>

  <br>

</template>

<script>
export default {
  data() {
    return {
      isAdminLoggedIn: false,
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // admin username and password
      const adminUsername = "admin";
      const adminPassword = "password";

      if (this.username === adminUsername && this.password === adminPassword) {
        alert("Login successful! You are now logged in as admin.");

        // Store the admin login status in localStorage
        localStorage.setItem("isAdminLoggedIn", "true");

        // Update the isAdminLoggedIn status in the component
        this.isAdminLoggedIn = true;
      } else {
        alert("Login failed. Please check your username and password.");
      }

      // Clear input fields
      this.username = '';
      this.password = '';
    },
  },
  created() {
    // Initialize isAdminLoggedIn based on the value in localStorage
    this.isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
  },
  watch: {
    isAdminLoggedIn(newStatus) {
      // Log the isAdminLoggedIn status to the console when it changes
      console.log("Admin logged in:", newStatus);
    }
  }
};
</script>

  
  <style scoped>
  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    color: black;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>