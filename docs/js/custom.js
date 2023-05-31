if (window.location.pathname === '/') {
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        if (data.country === 'DE') {
          window.location.href = '/mkdocs-Ludaro-Wiki/deutsch/willkommen/';
        } else {
          window.location.href = '/mkdocs-Ludaro-Wiki/englisch/welcome';
        }
      });
  }
