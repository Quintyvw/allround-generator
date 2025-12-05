function generatePoem(event) {
  event.preventDefault();

  const poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter("#poem", {
    strings: "The poem will go here",
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
