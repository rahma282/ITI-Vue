<template>
   <div class="cent">
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <h2 class="not-found-subtitle">Oops! Page Not Found</h2>
      <p class="not-found-message">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <a href="/" class="not-found-button">Go Back to Home</a>
    </div>
    <img
      class="not-found-image"
      src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
      alt="Not Found Illustration"
    />
  </div>
</div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  /* General Styles */
.cent {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.not-found-container {
  text-align: center;
  max-width: 800px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

/* Content */
.not-found-content {
  flex: 1;
  padding-right: 40px;
}

.not-found-title {
  font-size: 120px;
  font-weight: 700;
  color: #ff6b6b;
  margin: 0;
  line-height: 1;
}

.not-found-subtitle {
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
}

.not-found-message {
  font-size: 18px;
  color: #666;
  margin: 20px 0;
}

.not-found-button {
  display: inline-block;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #ff6b6b;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.not-found-button:hover {
  background-color: #ff4c4c;
  transform: translateY(-3px);
}

/* Image */
.not-found-image {
  max-width: 300px;
  height: auto;
  border-radius: 15px;
  animation: float 3s ease-in-out infinite;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
  
  </style>