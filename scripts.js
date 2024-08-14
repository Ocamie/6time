const hashtags = {}; // Guardar hashtags y su popularidad

document.getElementById('hashtags').addEventListener('input', function(event) {
  const input = event.target.value;
  
  // Sugerir hashtags populares
  if (input in hashtags) {
    // Mostrar popularidad del hashtag
  }
});

document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener y guardar hashtags
  const inputTags = document.getElementById('hashtags').value.split(' ');
  inputTags.forEach(tag => {
    if (hashtags[tag]) {
      hashtags[tag]++;
    } else {
      hashtags[tag] = 1;
    }
  });

  // Subir la publicación
});
