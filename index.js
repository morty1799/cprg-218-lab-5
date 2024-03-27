

const apiKey = 'bfd5e58e786a4424a7faa50ef71c916f'; 
const url = 'https://newsapi.org/v2/everything?q=space&from=2024-03-25&to=2024-03-25&sortBy=popularity&pageSize=50&apiKey=' + apiKey;

fetch(url)
  .then(response => response.json())  
  .then(data => {
    const articles = data.articles;
    console.log(articles);  // Example: Log the data to the console
    let dropdown = document.getElementById('dropdown');
    for (let article of articles) {
      let option = document.createElement("option");
      option.value = article.url;
      option.text = article.title;
      dropdown.appendChild(option);
      //console.log(article.title, article.url);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);  
  });
  
  const form = document.getElementById('articles');
  const formBtn = document.getElementById('submit-button');
  formBtn.addEventListener('click', function(event) {
    // Prevent default form submission (if applicable)
    event.preventDefault();
    // Get the selected value of the dropdown (assuming ID is 'dropdown')
    const Url = document.getElementById('dropdown').value;
    window.location = Url;
  });


  /*  To redirect 
  formBtn.click(() => {
    //get the selected value of dropdown
    //use the selected dropdown item url to go to...
    //window.location = (the url from above)
  });
  */

  /* Just in case
  async function fetchNewsData(url) {
    try {
      // Replace with your News API endpoint URL
      const url = 'https://newsapi.org/v2/everything?q=space&from=2024-03-25&to=2024-03-25&sortBy=popularity&pageSize=50&apiKey=bfd5e58e786a4424a7faa50ef71c916f'
      const response = await fetch(url);
      const data = await response.json();
      return data.articles;  // Assuming your response has an "articles" key with news data
      //Error handling
    } catch (error) {
      console.log(error);
    }
  }
  */


