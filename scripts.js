// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Cargar publicaciones en la página de inicio
    loadPosts();

    // Manejar búsqueda en search.html
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = document.getElementById('search-query').value;
            searchPosts(query);
        });
    }

    // Manejar creación de nuevos hashtags
    const createHashtagForm = document.getElementById('create-hashtag-form');
    if (createHashtagForm) {
        createHashtagForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newHashtag = document.getElementById('new-hashtag').value;
            createHashtag(newHashtag);
        });
    }

    // Manejar la creación de publicaciones
    const createPostForm = document.getElementById('create-post-form');
    if (createPostForm) {
        createPostForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(createPostForm);

            // Enviar los datos del formulario al servidor
            // Puedes usar fetch o XMLHttpRequest para enviar los datos
            fetch('/api/posts', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Manejar la respuesta del servidor
                console.log('Publicación creada con éxito', data);
                // Redirigir o actualizar la interfaz de usuario
            })
            .catch(error => {
                console.error('Error al crear publicación:', error);
            });
        });
    }
});

function loadPosts() {
    // Ejemplo de lógica para cargar y mostrar publicaciones
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            postsContainer.innerHTML = '';
            posts.forEach(post => {
                // Crear y agregar elementos para cada publicación
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <img src="${post.imageUrl}" alt="Imagen del post">
                    <p>${post.description}</p>
                    <div>Hashtags: ${post.hashtags.join(', ')}</div>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error al cargar publicaciones:', error);
        });
}

function searchPosts(query) {
    // Lógica para buscar publicaciones por hashtag
    fetch(`/api/posts/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(results => {
            const resultList = document.getElementById('result-list');
            resultList.innerHTML = '';
            results.forEach(post => {
                const resultItem = document.createElement('li');
                resultItem.innerHTML = `
                    <img src="${post.imageUrl}" alt="Imagen del post">
                    <p>${post.description}</p>
                    <div>Hashtags: ${post.hashtags.join(', ')}</div>
                `;
                resultList.appendChild(resultItem);
            });
        })
        .catch(error => {
            console.error('Error al buscar publicaciones:', error);
        });
}

function createHashtag(hashtag) {
    // Lógica para crear un nuevo hashtag
    fetch('/api/hashtags', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hashtag })
    })
    .then(response => response.json())
    .then(data => {
        // Manejar la respuesta del servidor
        console.log('Hashtag creado con éxito', data);
        // Actualizar la lista de hashtags populares
        updateHashtags();
    })
    .catch(error => {
        console.error('Error al crear hashtag:', error);
    });
}

function updateHashtags() {
    // Ejemplo de lógica para actualizar la lista de hashtags populares
    fetch('/api/hashtags')
        .then(response => response.json())
        .then(hashtags => {
            const hashtagList = document.getElementById('hashtag-list');
            hashtagList.innerHTML = '';
            hashtags.forEach(hashtag => {
                const hashtagItem = document.createElement('li');
                hashtagItem.innerHTML = `
                    ${hashtag.name} (${hashtag.count} publicaciones)
                `;
                hashtagList.appendChild(hashtagItem);
            });
        })
        .catch(error => {
            console.error('Error al actualizar hashtags:', error);
        });
}
