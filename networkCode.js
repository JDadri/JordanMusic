
  // Get the YouTube and TikTok anchor elements by their IDs
  const youtubeLink = document.getElementById('youtubeLink');
  const tiktokLink = document.getElementById('tiktokLink');

  // Add event listeners for hover effect
  youtubeLink.addEventListener('mouseover', () => {
    youtubeLink.classList.add('hoverEffect');
  });

  youtubeLink.addEventListener('mouseout', () => {
    youtubeLink.classList.remove('hoverEffect');
  });

  tiktokLink.addEventListener('mouseover', () => {
    tiktokLink.classList.add('hoverEffect');
  });

  tiktokLink.addEventListener('mouseout', () => {
    tiktokLink.classList.remove('hoverEffect');
  });

  // Add event listener for click behavior (open links in a new tab)
  youtubeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default click behavior
    window.open(youtubeLink.href, '_blank'); // Open the link in a new tab
  });

  tiktokLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default click behavior
    window.open(tiktokLink.href, '_blank'); // Open the link in a new tab
  });

