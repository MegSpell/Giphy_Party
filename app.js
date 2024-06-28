console.log("Let's get this party started!");

const searchButton = document.querySelector("#searchBtn");
const input = document.querySelector("#searchInput");
const container = document.querySelector("#gifContainer");
const removeButton = document.querySelector("#removeBtn");

async function getRandomGif() {
  const response = await axios.get(
    "https://api.giphy.com/v1/gifs/random?api_key=xEFv1h5KX5oyu6FerrdgK2yOoFbNPfR9"
  );
  console.log(response);
  const img = document.createElement("img");
  img.src = response.data.data.images.original.url;
  container.appendChild(img);
}

async function searchRandomGif(input) {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=xEFv1h5KX5oyu6FerrdgK2yOoFbNPfR9&tag=${input}`;
    const response = await axios.get(url);
    const img = document.createElement("img");
    img.src = response.data.data.images.original.url;
    container.appendChild(img);
  } catch (err) {
    alert("Whoops, no gif found from your entry, try something else!");
  }
}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  searchRandomGif(input.value);
  input.value = "";
});

removeButton.addEventListener("click", function () {
  container.innerHTML = "";
});
