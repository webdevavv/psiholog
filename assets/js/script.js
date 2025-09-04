$(".mobile-nav-btn ").on("click", ".nav-icon", function () {
  $(".menu").slideToggle();
  $(".nav-icon").toggleClass("active");
  $(".menu li").slideRight();
});

function initVideoPauseControl() {
  const videoGrid = document.querySelector(".video__grid");
  const videos = document.querySelectorAll(".video__grid-item video");

  // Функция для паузы всех видео кроме текущего
  function pauseOtherVideos(currentVideo) {
    videos.forEach((video) => {
      if (video !== currentVideo && !video.paused) {
        video.pause();
      }
    });
  }

  // Добавляем обработчики событий для каждого видео
  videos.forEach((video) => {
    video.addEventListener("play", function () {
      pauseOtherVideos(this);
    });
  });

  // Также можно добавить обработчик для клика по сетке (опционально)
  videoGrid.addEventListener("click", function (e) {
    if (e.target.tagName === "VIDEO") {
      pauseOtherVideos(e.target);
    }
  });
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  initVideoPauseControl();
});
