
 const title = document.querySelector('input[name="post-title"]');
 const text = document.getElementById("post-body");

async function newFormHandler(event) {
    event.preventDefault();
  console.log(title.value);
  console.log(text.value);
  
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title:title.value,
        text:text.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
  
  document.getElementById('new-post-form').addEventListener('submit', newFormHandler);