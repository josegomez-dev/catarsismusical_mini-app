document.querySelectorAll('#dropdown-content-courses a').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    // Get the ID of the content to be shown from the data-content-id attribute
    const contentId = item.getAttribute('data-content-id');

    // Get the content div corresponding to the selected item
    const contentDiv = document.getElementById(contentId);

    // Clear the content area
    const contentArea = document.getElementById('content-area-courses');
    contentArea.innerHTML = '';

    // Clone the selected content and append it to the content area
    contentArea.appendChild(contentDiv.cloneNode(true));

    // Ensure the content is visible
    contentArea.querySelector('.hidden-content').style.display = 'block';

    // Remove the active class from all links
    document.querySelectorAll('#dropdown-content-courses a').forEach(link => {
      link.classList.remove('active-select-option');
    });

    // Add the active class to the clicked item
    item.classList.add('active-select-option');
  });
});

