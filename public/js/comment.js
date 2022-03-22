const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#comment-desc').value.trim();
  const name = document.querySelector('#comment-name').value.trim();
  var pathArray = window.location.pathname.split('/');
  var tech_id = pathArray[2];
  if (description) {


    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ name, description, tech_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(window.location.pathname);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
