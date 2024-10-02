// Open modal with smooth animation
function openEditUserModal() {
  const modal = document.getElementById('profileModal');
  modal.classList.add('show');
}

// Close modal
function closeEditUserModal() {
  const modal = document.getElementById('profileModal');
  modal.classList.remove('show');
}

// Save profile data (Dummy function, expand as needed)
function saveProfile() {
  const newUsername = document.getElementById('editUsername').value;
  const newBio = document.getElementById('editBio').value;

  // Update the profile section with new values
  document.getElementById('username').textContent = newUsername;
  document.getElementById('bio').textContent = newBio;

  // Close the modal after saving
  closeEditUserModal();
}
