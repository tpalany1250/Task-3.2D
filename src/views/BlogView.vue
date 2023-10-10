<template>

<br>

    <div class="blog-page">
      <h2>Blog</h2>
  
      <br>
      <!-- Admin Actions (conditional rendering) -->
      <div v-if="isAdminLoggedIn">
        <button @click="toggleAddForm">Add Blog Post</button>
        <br><br>
        <div v-if="showAddForm || showEditForm">
          <!-- Blog Post Form -->
          <!-- Bind input fields to data properties (v-model) -->
          <input v-model="newPost.title" placeholder="Title" />
          <input v-model="newPost.date" placeholder="Date" />
          <textarea v-model="newPost.content" placeholder="Content"></textarea>
          <button @click="addOrUpdatePost">{{ showEditForm ? 'Save' : 'Add Post' }}</button>
          <button @click="cancelEdit">Cancel</button>
        </div>
      </div>
  
      <!-- Blog Posts List -->
      <div class="blog-posts">
        <div v-for="post in blogPosts" :key="post.id" class="blog-post">
          <!-- Display post title and make it clickable -->
          <h3 @click="togglePostDetails(post.id)">{{ post.title }}</h3>
  
          <!-- Display post details when expanded -->
          <div v-if="expandedPostId === post.id">
            <p>{{ post.date }}</p>
            <p>{{ post.content }}</p>
  
            <!-- Edit and Delete buttons (conditional rendering for admin) -->
            <div v-if="isAdminLoggedIn">
              <button @click="editPost(post.id)">Edit</button>
              <button @click="deletePost(post.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Existing blog posts
  const blogPosts = ref([
    {
      id: 1,
      title: "Blog Post 1 (Reflection of Task 1.1P)",
      date: "October 1, 2023",
      content: "In this task, I used my teachings from the workshops to help create a simple HTML page. This was a good first task as it incorporated the basic HTML tags and CSS styling in a webpage. As such through this exercise, it has allowed me to understand the fundamentals of creating an HTML page. Overall, I found this task fun as I created an HTML page from scratch and found it to be a good task to test my knowledge."
    },
    {
      id: 2,
      title: "Blog Post 2 (Reflection of Task 1.2P)",
      date: "October 5, 2023",
      content: "In this task, I learnt two things; the first was learning how to implement a responsive web design through HTML and CSS and the other was learning how to implement JavaScript concepts within an HTML file. This was an educational journey as I learnt new concepts and ways to make any website look more user friendly in any device and to also make it much more intriguing. Through these exercises, it has allowed me to understand the importance of creating a responsive web design in this day and age and of learning new skills. Overall, this task was fun and interesting as it built on the concept of creating a HTML page, making it a good educational experience."
    },
    {
      id: 3,
      title: "Blog Post 3 (Reflection of Task 1.3P)",
      date: "October 10, 2023",
      content: "In this task, I applied my knowledge of HTML, CSS, and Vue 3 Concepts to create a responsive portfolio website. It was exciting to showcase and provide my skills to show all the knowledge I have learnt during this unit. For HTML, I had structured the website to use semantics HTML tags such as ‘<nav>’, ‘<footer>’, as well as a Favicon. As well as this, when this website I had implemented multiple Vue components to represent different sections of the website. This made it easier to manage the website. CSS also played a role in the project’s design and layout. I had used Flexboxs and Grids to create a more responsive and visually appealing design for my portfolio. Media queries were used to adapt the portfolio into various screen sizes. This allowed the website to have a responsive web design. All these concepts were implemented through the Vue 3 app. I had also used the vue router in the app to navigate between different sections of the website using ‘<RouterLink>’. Overall, these factors allowed me to create a dynamic and visually appealing portfolio website."
    }
  ]);
  
  // State to track expanded post
  const expandedPostId = ref(null);
  
  // State for add and edit forms
  const newPost = ref({
    id: null,
    title: '',
    date: '',
    content: ''
  });
  const showAddForm = ref(false);
  const showEditForm = ref(false);
  
  // State to check if admin is logged in
  const isAdminLoggedIn = ref(localStorage.getItem("isAdminLoggedIn") === "true");
  
  // Function to toggle expanded post
  const togglePostDetails = (postId) => {
    if (expandedPostId.value === postId) {
      expandedPostId.value = null;
    } else {
      expandedPostId.value = postId;
    }
  };
  
  // Function to toggle add form
  const toggleAddForm = () => {
    showAddForm.value = !showAddForm.value;
    showEditForm.value = false;
  };
  
  // Function to add or update a post
  const addOrUpdatePost = () => {
    if (isAdminLoggedIn.value) {
      if (newPost.value.id === null) {
        blogPosts.value.push({
          id: blogPosts.value.length + 1,
          ...newPost.value
        });
      } else {
        const index = blogPosts.value.findIndex((post) => post.id === newPost.value.id);
        if (index !== -1) {
          blogPosts.value[index] = { ...newPost.value };
        }
      }
  
      newPost.value = { id: null, title: '', date: '', content: '' };
      showAddForm.value = false;
      showEditForm.value = false;
    }
  };
  
  // Function to edit a post
  const editPost = (id) => {
    if (isAdminLoggedIn.value) {
      const postToEdit = blogPosts.value.find((post) => post.id === id);
      if (postToEdit) {
        newPost.value = { ...postToEdit };
        showEditForm.value = true;
        showAddForm.value = false;
      }
    }
  };
  
  // Function to cancel edit
  const cancelEdit = () => {
    newPost.value = { id: null, title: '', date: '', content: '' };
    showEditForm.value = false;
  };
  
  // Function to delete a post
  const deletePost = (id) => {
    if (isAdminLoggedIn.value) {
      const index = blogPosts.value.findIndex((post) => post.id === id);
      if (index !== -1) {
        blogPosts.value.splice(index, 1);
      }
    }
  };
  </script>

  
  <style scoped>
  .blog-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* margin-right: 10px */
    color: black;
    background-color: white;
  }
  
  .blog-post {
    margin-bottom: 20px;
  }
  
  h2 {
    text-align: center;
  }
  
  h3 {
    margin-top: 0;
  }
  
  p {
    line-height: 1.5;
  }
  </style>