if (window.location.pathname === '/mkdocs-Ludaro-Wiki/') {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data.country === 'DE') {
          window.location.href = '/deutsch/willkommen';
        } else {
          window.location.href = '/englisch/welcome';
        }
      });
  }
