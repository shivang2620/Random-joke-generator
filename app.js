const jokeSetup = document.querySelector("#joke-setup");
const jokepunchline = document.querySelector("#joke-punchline");
const jokebtn = document.querySelector("#joke-btn");
const jokeImage = document.querySelector("#joke-image");

async function fetchJokes() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    jokeSetup.textContent = data.setup;
    jokepunchline.textContent = data.punchline;
  } catch (error) {
    console.error("Error fetching jokes:", error);
    jokeSetup.textContent = "Error fetching jokes";
    jokepunchline.textContent = "please try again later";
  }
}

jokebtn.addEventListener("click", fetchJokes);
fetchJokes();

