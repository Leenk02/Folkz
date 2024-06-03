document.addEventListener('DOMContentLoaded', () => {
    console.log('Folketidende app is ready!');
});

document.querySelector('.custom-file-upload').addEventListener('click', function() {
    document.querySelector('#image-upload').click();
});

//links//
const links = document.querySelectorAll('.links a');
const content = document.querySelectorAll('.content');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Forhindrer standard browser-adfærd

        // Fjerner 'active'-klassen fra alt indhold
        content.forEach(c => c.classList.remove('active'));

        // Tilføjer 'active'-klassen til det valgte indhold
        const targetId = link.getAttribute('href');
        const targetContent = document.querySelector(targetId);
        targetContent.classList.add('active');
    });
});

