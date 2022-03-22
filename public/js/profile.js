const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#tech-name').value.trim();
  const shortDescription = document.querySelector('#tech-desc').value.trim();


  if (title && shortDescription) {
    const response = await fetch(`/api/techs`, {
      method: 'POST',

      body: JSON.stringify({ title, shortDescription }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Added to homepage');
      document.location.replace('/profile');
    } else {
      alert('Failed to create');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/techs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
