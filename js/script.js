const videoGrid = document.getElementById("videoGrid");

videos.forEach(video => {
  const card = document.createElement("div");
  card.className = "video-card";
  card.innerHTML = `
    <img src="${video.thumbnail}" alt="${video.title}" />
    <div class="video-info">
      <div class="video-title">${video.title}</div>
      <div class="channel-name">${video.channel}</div>
    </div>
  `;
  videoGrid.appendChild(card);
});
