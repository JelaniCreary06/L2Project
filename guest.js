function toggleBio(id) {
  const guest = document.querySelector(`.guest:nth-of-type(${id})`);
  if (guest) {
    const bio = guest.querySelector('.guest-bio');
    if (bio) {
      const currentDisplay = getComputedStyle(bio).display;
      bio.style.display = currentDisplay === 'none' ? 'block' : 'none';
    } else {
      console.error(`Bio element not found for guest ${id}`);
    }
  } else {
    console.error(`Guest element not found for id ${id}`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const bioContents = document.querySelectorAll(".guest-bio");
  bioContents.forEach(function (bio) {
    bio.style.display = 'none';
  });
});
