function toggleBio(id) {
  const bio = document.querySelector(`.guest-bio:nth-of-type(${id})`);
  if (bio) {
    const currentDisplay = getComputedStyle(bio).display;
    bio.style.display = currentDisplay === 'none' ? 'block' : 'none';
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const bioContents = document.querySelectorAll(".guest-bio");
  bioContents.forEach(function (bio) {
    bio.style.display = 'none';
  });
});
