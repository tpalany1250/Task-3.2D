<template>
    <footer class="amazing-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/resume">Resume</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p><i class="fas fa-map-marker-alt"></i> 221 Burwood Hwy, Burwood VIC 3125</p>
          <p><i class="fas fa-phone"></i> +1 234 567 890</p>
          <p><i class="fas fa-envelope"></i> s223383229@deakin.edu.au</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </template>

  

  <style scoped>
.amazing-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
}

.footer-content {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  margin-bottom: 20px;
}

.footer-section h4 {
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.footer-section p, .footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #e74c3c;
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #34495e;
  padding-top: 20px;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-section {
    flex: 1;
    margin-right: 20px;
  }

  .footer-section:last-child {
    margin-right: 0;
  }
}
</style>
  