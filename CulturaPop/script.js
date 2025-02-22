document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('collapse');
    });

    // Função para pausar todos os vídeos
    function pauseVideos() {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0; // Reseta o vídeo para o início
        });
    }

    // Adiciona event listener para pausar os vídeos ao mudar de slide
    const carousel = document.getElementById('videoCarousel');
    carousel.addEventListener('slide.bs.carousel', pauseVideos);
});