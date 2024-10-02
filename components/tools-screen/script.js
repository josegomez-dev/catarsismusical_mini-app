document.querySelectorAll('#dropdown-content-tools a').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    // Get the ID of the content to be shown from the data-content-id attribute
    const contentId = item.getAttribute('data-content-id');

    // Get the content div corresponding to the selected item
    const contentDiv = document.getElementById(contentId);

    // Clear the content area
    const contentArea = document.getElementById('content-area-tools');
    contentArea.innerHTML = '';

    // Clone the selected content and append it to the content area
    contentArea.appendChild(contentDiv.cloneNode(true));

    // Ensure the content is visible
    contentArea.querySelector('.hidden-content').style.display = 'block';

    // Hide the dropdown after selection
    document.getElementById('dropdown-content-tools').style.display = 'none';
  });
});

// Re-show dropdown when clicking the dropdown button
document.querySelector('#dropdown-btn-tools').addEventListener('click', () => {
  const dropdownContent = document.getElementById('dropdown-content-tools');
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});


