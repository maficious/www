const loading = document.getElementById("loading");
const imagesContainer = document.querySelector("main");

// Let's use some of that javascript magic
// which we don't benefit from.
(async function () {
  // Fetch images
  const res = await fetch("https://mjoork-api.herokuapp.com/cursedcatimages", {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: "spelunki",
    },
  });

  // Get object
  res.json().then((data) => {
    // Remove loading indicator
    loading.remove();
    // Add images
    data.images.forEach((image) => {
      imagesContainer.innerHTML += `<img src="${image.link}" alt="Cursed cat image with ID: ${image.id}"/>`;
    });
  });
})();
