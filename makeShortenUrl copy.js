const axios = require('axios');

async function shortenPathWithRecut(fullUrl, recutToken) {
  const headers = {
    'Authorization': `Bearer ${recutToken}`,
    'Content-Type': 'application/json'
  };

  const payload = {
    url: fullUrl,
    domain: ''
  };

  try {
    const response = await axios.post('https://app.recut.in/api/url/add', payload, {headers});
    // response modeal => { error: 0 id: '', shorturl: '' }
    const shortUrl = response.data.shorturl;
    return shortUrl;
  } catch (error) {
    console.error('URL shortening failed:', error.message);
    return null;
  }
}

// recut api token
const recutToken = '';
// target full Url
const fullUrl = '';

shortenPathWithRecut(fullUrl, recutToken)
  .then(shortenedUrl => {
    if (shortenedUrl) {
      console.log('Shortened URL:', shortenedUrl);
    } else {
      console.log('URL shortening failed.');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });