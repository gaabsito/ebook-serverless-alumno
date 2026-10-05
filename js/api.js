const API_URL =
  'https://uu42r7dtck.execute-api.us-west-2.amazonaws.com/dev/contact';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.ebook-download-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('ebook-form-name').value.trim();
    const email = document.getElementById('ebook-email').value.trim();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? 'Error al enviar');
      }

      alert(result.message);
      form.reset();
    } catch (error) {
      console.error('Error API:', error);
      alert(error.message);
    }
  });
});