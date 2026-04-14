$(function () {
  const modalElement = document.getElementById('videoModal');

  if (modalElement) {
    const videoModal = new bootstrap.Modal(modalElement);

    $('.btn-video').on('click', function () {
      const title = $(this).data('title');
      const video = $(this).data('video');
      const videoConAutoplay = video.includes('?')
        ? `${video}&autoplay=1`
        : `${video}?autoplay=1`;

      $('#videoModalLabel').text(title);
      $('#videoFrame').attr('src', videoConAutoplay);

      videoModal.show();
    });

    $('#videoModal').on('hidden.bs.modal', function () {
      $('#videoFrame').attr('src', '');
    });
  }
});
