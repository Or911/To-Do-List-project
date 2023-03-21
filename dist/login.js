// Get the form and submit button elements
const loginForm = $('#login-form');
const loginBtn = $('#login-btn');

// Add an event listener for the form submit event
loginForm.on('submit', function(event) {
  event.preventDefault();

  const username = $('#username').val();
  const password = $('#password').val();

  $.ajax({
    url: '/login',method: 'POST',
    dataType: 'json',contentType: 'application/json',
    data: JSON.stringify({ username, password }),
    
    success: function(data) {
      localStorage.setItem('token', data.accessToken);
      console.log(data.accessToken);
      window.location.href = '/App/index.html';
    },

    error: function(error, textStatus, errorThrown) {
      if (error.status === 401) {
        console.log('Unauthorized error:', errorThrown);
      } else {
        console.log('Request failed:', errorThrown);
      }
    }
  });
});
