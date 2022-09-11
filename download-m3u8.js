for (let i = 1; i <= 119; i++) {
  setTimeout(function timer() {
    var index = 0;
    window.location.href = `https://nlv14.videosection.com/5/f/a/5fad3014e0256b7e6c8d14961439af2b/stream/480p/hls-480p-p${i}.ts?e=1662889698&h=fcf9ab90df520159cd11b0302e5b4099`;
    console.log(index);
  }, i * 8000);
}

// copy /b hls-480p-p*.ts movie.mp4 