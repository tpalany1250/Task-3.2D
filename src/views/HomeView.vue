<template>

  <div class="divider">
    <section class="portfolio-home">
      <br>
      <header class="portfolio-header">
        <h1>Thrrymund Palany</h1>
        <p>Web Developer & Designer</p>
      </header>

      <section class="portfolio-intro">
        <p>
          Hello! I'm Thrrymund, a passionate web developer who has just began his experience. I love creating responsive and user-friendly websites. Check out my projects below!
        </p>
      </section>

      <section class="portfolio-projects">
        <h2 style="margin-left: 50px; color: white;">My Projects</h2>
        <br>
        <div class="projects-grid">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <img :src="project.image" :alt="project.name" />
            <h3 style="color: rgb(255, 255, 255);">{{ project.name }}</h3>
            <p style="margin: 15px">{{ project.description }}</p>
            <br>
          </div>
        </div>
      </section>

      <footer class="portfolio-footer">
        <p>Thank you for visiting! Let's <a href="mailto:john@example.com">connect</a>.</p>
      </footer>
    </section>
  </div>

</template>

<script setup>
import { ref } from 'vue';

import projectImage2 from '../assets/images/Feature-Image-Business-Collaboration.webp';
import projectImage3 from '../assets/images/getty_568777661_101264.jpg';
import projectImage4 from '../assets/images/istockphoto-887088424-612x612.jpg';
import projectImage5 from '../assets/images/istockphoto-1308583114-612x612.jpg';


const projects = ref([
  {
    id: 1,
    name: 'Basic HTML & CSS',
    description: 'This project involves the use of basic HTML & CSS concepts.',
    image: projectImage5
  },
  {
    id: 2,
    name: 'Web Responsiveness',
    description: 'This project shows how to modify a web page to look good in all devices no matter the size',
    image: projectImage2
  },
  {
    id: 3,
    name: 'Vue Concepts',
    description: 'This project utilises vue concepts to develop a responsive web page',
    image: projectImage4
  },
  {
    id: 4,
    name: 'Website Project',
    description: 'This project showcases my development through the unit by demonstrating my very own website',
    image: projectImage3
  },
]);
</script>

<style scoped>
.portfolio-home {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 50px;
  /* margin-left: 110px; */
}

.portfolio-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.portfolio-intro {
  text-align: center;
  margin-bottom: 50px;
  margin-left: 50px;
  margin-right: 60px
}

.portfolio-projects {
  margin-bottom: 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  text-align: center;
  /* margin-left: 40px; */
}

.project-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
}

.project-card img {
  width: 100%;
  height: auto;
}

.project-card h3 {
  text-align: center;
  padding: 10px 0;
}

.portfolio-footer {
  text-align: center;
}

.content-container {
  /* margin-left: 100px */
  display: flex;
  justify-content: flex-end;
  text-align: center;
}

.content-text ul {
  list-style: none; /* Remove bullet points */
    padding: 0; /* Remove default padding */
    margin: 25px;
    margin-left: 250px;
    margin-right: 250px;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #ddd;;
}

.content-text p {
  margin-left: 130px;
  margin-right: 130px;
}

</style>