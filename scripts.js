// scripts.js

import data from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Get the 'page' and 'id' parameters from the URL
  const params = new URLSearchParams(window.location.search);
  const page = params.get('page') || 'home';
  const id = params.get('id');

  const content = document.getElementById('content');

  // Render the appropriate page
  switch (page) {
    case 'home':
      renderHomePage();
      break;
    case 'projects':
      if (id) {
        renderProjectDetail(id);
      } else {
        renderProjectsPage();
      }
      break;
    case 'about':
      renderAboutPage();
      break;
    case 'contact':
      renderContactPage();
      break;
    default:
      renderNotFoundPage();
  }
});

// Function to render the Home Page
function renderHomePage() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background"></div>
      <div class="hero-content">
        <h1>Embark on the Journey Toward Mastery</h1>
        <p>Discover innovative storytelling and experimental media.</p>
        <a href="index.html?page=projects" class="cta-button">Explore Our Projects</a>
      </div>
    </section>
    <!-- Introduction Section -->
    <section class="introduction">
      <div class="container">
        <h2>Welcome to BLUE BELT</h2>
        <p>We are a creative media brand focused on the journey towards mastery.</p>
      </div>
    </section>
  `;
}

// Function to render the Projects Overview Page
function renderProjectsPage() {
  const content = document.getElementById('content');
  let projectsHTML = '';
  data.projects.forEach(project => {
    projectsHTML += `
      <div class="project-card" data-id="${project.id}">
        <img src="${project.thumbnail}" alt="${project.title}">
        <div class="overlay">
          <h3>${project.title}</h3>
        </div>
      </div>
    `;
  });

  content.innerHTML = `
    <section class="projects-overview">
      <div class="container">
        <h1>Our Projects</h1>
        <div class="projects-grid">
          ${projectsHTML}
        </div>
      </div>
    </section>
  `;

  // Add event listeners to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-id');
      window.location.href = `index.html?page=projects&id=${projectId}`;
    });
  });
}

// Function to render a Project Detail Page
function renderProjectDetail(projectId) {
  const project = data.projects.find(p => p.id === projectId);
  if (!project) {
    renderNotFoundPage();
    return;
  }

  const content = document.getElementById('content');
  let featuresHTML = '';
  project.features.forEach(feature => {
    featuresHTML += `<li>${feature}</li>`;
  });

  content.innerHTML = `
    <!-- Project Hero Section -->
    <section class="project-hero" style="background-image: url('${project.heroImage}');">
      <div class="container">
        <h1>${project.title}</h1>
      </div>
    </section>
    <!-- Project Details -->
    <section class="project-details">
      <div class="container">
        <h2>About the Project</h2>
        <p>${project.description}</p>
        <!-- Video Section -->
        <div class="video-section">
          <video controls>
            <source src="${project.video}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
        <!-- Additional Information -->
        <h2>Key Features and Themes</h2>
        <ul>
          ${featuresHTML}
        </ul>
        <!-- Back to Projects Link -->
        <a href="index.html?page=projects" class="back-link">&larr; Back to Projects</a>
      </div>
    </section>
  `;
}

// Function to render the About Us Page
function renderAboutPage() {
  const content = document.getElementById('content');
  let teamHTML = '';
  data.team.forEach(member => {
    teamHTML += `
      <div class="team-member">
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
        <p>${member.bio}</p>
      </div>
    `;
  });

  content.innerHTML = `
    <section class="about-us">
      <div class="container">
        <h1>About Us</h1>
        <p>We are a team of creatives dedicated to pushing the boundaries of media.</p>
        <div class="team-grid">
          ${teamHTML}
        </div>
      </div>
    </section>
  `;
}

// Function to render the Contact Page
function renderContactPage() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <section class="contact">
      <div class="container">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  `;

  // Add event listener to the contact form
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}

// Function to render a 404 Not Found Page
function renderNotFoundPage() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <section class="not-found">
      <div class="container">
        <h1>Page Not Found</h1>
        <p>We're sorry, but the page you're looking for doesn't exist.</p>
        <a href="index.html">Go Back Home</a>
      </div>
    </section>
  `;
}
