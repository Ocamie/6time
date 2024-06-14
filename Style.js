function navigateTo(section) {
    const mainContent = document.getElementById('main-content');

    switch (section) {
        case 'home':
            mainContent.innerHTML = `
                <div class="post-feed">
                    <!-- Contenido del feed de inicio -->
                </div>
            `;
            break;
        case 'profile':
            mainContent.innerHTML = `
                <div class="profile-section">
                    <!-- Contenido del perfil -->
                    <div class="profile-info">
                        <img src="profile-picture.jpg" alt="Profile Picture" class="profile-picture">
                        <h2>Nombre de Usuario</h2>
                        <p>Alias: Alias del Usuario</p>
                        <p>Descripción del perfil</p>
                        <button onclick="openEditProfile()">Editar perfil</button>
                    </div>
                </div>
            `;
            break;
        case 'settings':
            mainContent.innerHTML = `
                <div class="settings-section">
                    <!-- Contenido de ajustes -->
                    <h2>Ajustes</h2>
                    <!-- Otros elementos de ajustes -->
                </div>
            `;
            break;
        default:
            break;
    }

    event.preventDefault();
}

function openEditProfile() {
    // Aquí puedes mostrar un modal o una sección de edición de perfil
}
function openContentUploader() {
    // Aquí abres el modal o la sección para subir contenido
    console.log("Abriendo modal de subida de contenido");
}

document.addEventListener("DOMContentLoaded", function() {
    const floatingBtn = document.querySelector('.floating-btn');
    floatingBtn.addEventListener('click', openContentUploader);
});
