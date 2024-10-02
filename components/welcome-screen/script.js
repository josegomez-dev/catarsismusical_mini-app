// Function to show the main content and hide the welcome screen
function showMainContent() {
  const welcomeScreen = document.getElementById('welcome-screen');
  const app = document.getElementById('app');
  const footerNavigator = document.getElementById('nav-footer');

  // Hide the welcome screen
  welcomeScreen.style.display = 'none';

  // Show the main content
  app.style.display = 'block';
  footerNavigator.style.display = 'block';

  triggerAnimation();
}

// Event listener for the start button
document.getElementById('start-button').addEventListener('click', showMainContent);

