

//to added header
// Fetch and inject the header
fetch('../additional_pages/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header_section').innerHTML = html;
  })
  .catch(error => console.error('Error fetching header:', error));


//to added footer
// Fetch and inject the header
fetch('../additional_pages/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer_section').innerHTML = html;
  })
  .catch(error => console.error('Error fetching header:', error));