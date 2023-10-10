<template>
  <br><br><br><br><br>

  <h1 style="margin-left: 100px">Contact Us</h1>

  <br>

    <div class="about-us-form">
      <h2>Feedback</h2>
      <br>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
  
        <div class="form-group">
          <label for="feedback">Feedback:</label>
          <textarea id="feedback" v-model="formData.feedback" required></textarea>
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  <br><br>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    feedback: ''
  });
  
  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log(formData.value);
  
    // Reset the form
    formData.value = {
      name: '',
      email: '',
      feedback: ''
    };
  };
  </script>
  
  <style scoped>
  .about-us-form {
    background-color: white;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* margin-right: 10px */
    color: black;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  