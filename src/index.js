
function generateLink(className) {
  className = className || "mainreport-link";
  const a = document.createElement("a");
  a.classList.add(className);
  a.innerText = "Raporu Göster";
  const icon = document.createElement("svg");
  icon.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
    >
        <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
        style="stroke: currentColor; stroke-width: 1.5; fill: none"
        />
    </svg>`;
  a.append(icon);

  return a;
} 

 function createMainTitleCard(title, body) {
  const mainCard = document.createElement("div");
  mainCard.classList.add("maincard-all");

  const container = document.createElement("div");
  container.classList.add("maincard-container");
  // Burada title ve diger p elementleri

  const mainTitleContainer = document.createElement("div");
  mainTitleContainer.classList.add("maintitle-container");
  const titleElem = document.createElement("h1");
  titleElem.innerHTML = title;
  mainTitleContainer.appendChild(titleElem);
  const date = document.createElement("span");
  date.innerHTML = "22.01.2024";
  mainTitleContainer.appendChild(date);
  container.appendChild(mainTitleContainer);

  const p = document.createElement("p");
  p.innerText = body;
  container.appendChild(p);

  container.appendChild(generateLink("mainreport-link"));

  mainCard.appendChild(container);

  const image = document.createElement("img");
  image.src = "mainimage.png";
  image.alt = "Energy Solutions";
  image.classList.add("maincard-img");
  mainCard.appendChild(image);

  return mainCard;
} 

function createGridCard(title, body) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");
  const titleElem = document.createElement("h2");
  titleElem.innerHTML = title;
  titleElem.title = title;
  titleContainer.appendChild(titleElem);
  const date = document.createElement("span");
  date.innerHTML = "22.01.2024";
  titleContainer.appendChild(date);
  cardContainer.appendChild(titleContainer);

  const parag = document.createElement("p");
  parag.classList.add("card-exp");
  parag.innerText = body;
  cardContainer.appendChild(parag);

  cardContainer.append(generateLink("report-link"));

  const img = document.createElement("img");
  img.src = "image.png";
  img.alt = "Energy Solutions";
  img.classList.add("card-img");
  cardContainer.append(img);

  return cardContainer;
}

async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const mainData = data.shift();
  const mainCard1 = createMainTitleCard(mainData.title, mainData.body);
  document.querySelector(".big-header").after(mainCard1);

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const smallCard = createGridCard(element.title, element.body);
    document.querySelector(".grid-container").appendChild(smallCard);
  }

}

document.addEventListener("DOMContentLoaded", init);


/*alternative function*/

/*function init() {
  fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .then(data => {
          const mainData = data[0]; // İlk elemanı al
          const mainCard1 = createMainTitleCard(mainData.title, mainData.body);
          document.querySelector(".big-header").after(mainCard1); // Ana kartı ekle

          // Kalan veriler için küçük kartlar oluşturma
          data.slice(1).forEach(element => {
              const smallCard = createGridCard(element.title, element.body);
              document.querySelector(".grid-container").appendChild(smallCard); // Küçük kartı ekle
          });
      })
      .catch(error => {
          console.error("Veri alınırken bir hata oluştu:", error);
      });
}

document.addEventListener("DOMContentLoaded", init); */





