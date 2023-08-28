let dummyData = [
  {
    query: "laptop",
    title: "ThinkPad X13 Gen 2 (13, Intel)",
    description: "The ultimate in mobile productivity",
    url: "https://m.media-amazon.com/images/I/51wxxj3vBNL._AC_UY436_FMwebp_QL65_.jpg",
    imageUrl:
      "https://m.media-amazon.com/images/I/51wxxj3vBNL._AC_UY436_FMwebp_QL65_.jpg",
  },
  {
    query: "smartphone",
    title: "Phone Zone",
    description: "Get the latest smartphones at unbeatable prices",
    url: "https://www.phonezone.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/03/94/54/07/1000_F_394540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "headphone",
    title: "Audio Store",
    description: "Premium quality headphones for the ultimate audio experience",
    url: "https://www.audiostore.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/04/94/54/07/1000_F_494540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "gaming",
    title: "Game World",
    description: "Top-tier gaming gear for hardcore gamers",
    url: "https://www.gameworld.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/05/94/54/07/1000_F_594540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "books",
    title: "Book Haven",
    description: "A wide range of books from all genres",
    url: "https://www.bookhaven.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/06/94/54/07/1000_F_694540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "kitchen appliances",
    title: "Kitchen Store",
    description: "High-quality appliances for your kitchen",
    url: "https://www.kitchenstore.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/07/94/54/07/1000_F_794540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "furniture",
    title: "Furniture Mart",
    description: "Stylish and comfortable furniture for your home",
    url: "https://www.furnituremart.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/08/94/54/07/1000_F_894540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "office supplies",
    title: "Office Depot",
    description: "All the supplies you need for your office",
    url: "https://www.officedepot.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/09/94/54/07/1000_F_994540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "home decor",
    title: "Decor House",
    description: "Beautiful decor items to brighten up your home",
    url: "https://www.decorhouse.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/10/94/54/07/1000_F_1094540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
  {
    query: "toys",
    title: "Toy World",
    description: "Fun and educational toys for children of all ages",
    url: "https://www.toyworld.com",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/11/94/54/07/1000_F_1194540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
  },
];

window.addEventListener("load", function () {
  if (window.location.href.indexOf("google") > -1) {
    console.log("Google");
    googleCode();
  } else if (window.location.href.indexOf("amazon") > -1) {
    console.log("Amazon");
    amazonCode();
  }
});

function amazonCode() {
  let searchQuery = document.querySelector(
    'input[name="field-keywords"]'
  ).value; // Get the search query
  console.log(searchQuery);
  let grid = document.querySelector(
    ".s-main-slot.s-result-list.s-search-results.sg-row"
  );
  console.log(grid);
  if (grid) {
    let searchQueryWords = searchQuery.toLowerCase().split(" ");
    let data = dummyData.find((item) => {
      let itemQueryWords = item.query.toLowerCase().split(" ");
      return searchQueryWords.some((word) => itemQueryWords.includes(word));
    });
    if (data) {
      console.log("Found");
      // Create the main container element for the component
      const componentContainer = document.createElement("div");
      componentContainer.innerHTML = `<div data-asin="B0CCDRPGD8" data-index="5" data-uuid="c597e740-04d3-4a52-aa26-3ffa0b543ab5" data-component-type="s-search-result" class="sg-col-20-of-24 s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 sg-col s-widget-spacing-small sg-col-12-of-16" data-component-id="14" data-cel-widget="search_result_5">
      <div class="sg-col-inner">
        <div cel_widget_id="MAIN-SEARCH_RESULTS-5" class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3" data-csa-c-pos="3" data-csa-c-item-id="amzn1.asin.1.B0CCDRPGD8" data-csa-op-log-render="" data-csa-c-type="item" data-csa-c-id="a32jgp-r5t92p-utant0-r0a6mp" data-cel-widget="MAIN-SEARCH_RESULTS-5">
          <div class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t1 puis-include-content-margin puis puis-v3b48cl1js792724v4d69zlbwph s-latency-cf-section s-card-border">
            <div class="a-section">
              <div class="sg-row">
                <div class="sg-col sg-col-4-of-12 sg-col-4-of-16 sg-col-4-of-20 sg-col-4-of-24 s-list-col-left">
                  <div class="sg-col-inner">
                    <div class="a-section a-spacing-none aok-relative puis-status-badge-container s-list-status-badge-container">
                    </div>
                    <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small s-flex-expand-height puis puis-v3b48cl1js792724v4d69zlbwph">
                      <div class="aok-relative">
                        <span data-component-type="s-product-image" class="rush-component" data-version-id="v3b48cl1js792724v4d69zlbwph" data-render-id="r2s5wz5zrphz3j1yh8xkt193hsy" data-component-id="15">
                            <div class="a-section aok-relative s-image-fixed-height">
                              <img class="s-image" src="${data.imageUrl}" srcset="https://m.media-amazon.com/images/I/51cNQIk3q9L._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/51cNQIk3q9L._AC_UY327_FMwebp_QL65_.jpg 1.5x, ${data.imageUrl} 2x, https://m.media-amazon.com/images/I/51cNQIk3q9L._AC_UY545_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/51cNQIk3q9L._AC_UY654_FMwebp_QL65_.jpg 3x" alt=""
                                data-image-index="3" data-image-load="" data-image-latency="s-product-image" data-image-source-density="1">
                            </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sg-col sg-col-4-of-12 sg-col-8-of-16 sg-col-12-of-20 sg-col-12-of-24 s-list-col-right">
                  <div class="sg-col-inner">
                    <div class="a-section a-spacing-small a-spacing-top-small">
                      <div class="a-section a-spacing-none puis-padding-right-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-2">
                            <span class="a-size-medium a-color-base a-text-normal">${data.title}</span>
                        </h2>
                      </div>
                  
                      <div class="sg-row">
                        <div class="sg-col sg-col-4-of-12 sg-col-4-of-16 sg-col-4-of-20 sg-col-4-of-24">
                          <div class="sg-col-inner">
                            <div class="a-section a-spacing-none a-spacing-top-micro puis-price-instructions-style">
                              <div class="a-row a-size-base a-color-base">
                                  <span class="a-price" data-a-size="xl" data-a-color="base"><span class="a-offscreen">₹16,499</span><span aria-hidden="true"><span class="a-price-symbol">₹</span><span
                                        class="a-price-whole">16,499</span></span></span>

                              </div>
                              <div>
                              <a>buy it </a>
                              <a>remove it </a>
                              </div>
                          </div>
                        </div>
                        <div class="sg-col sg-col-4-of-12 sg-col-4-of-16 sg-col-8-of-20 sg-col-8-of-24">
                          <div class="sg-col-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
      const carousal = `<div class="carousel">
    <div class="carousel-container">
        <div class="carousel-post">${componentContainer.innerHTML}</div>
        <div class="carousel-post">${componentContainer.innerHTML}</div>
        <div class="carousel-post">${componentContainer.innerHTML}</div>
        <div class="carousel-post">${componentContainer.innerHTML}</div>
    </div>
    <div class="carousel-controls">
        <button id="prevBtn">&lt;</button>
        <div class="carousel-dots"></div>
        <button id="nextBtn">&gt;</button>
    </div>
</div>`;
      const carouselCss = `
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-post {
  flex: 0 0 100%;

}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

#prevBtn,
#nextBtn {
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: gray;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.active-dot {
  background-color: black;
}`;
      const carouselDiv = document.createElement("div");
      carouselDiv.innerHTML = carousal;

      grid.insertBefore(carouselDiv, grid.children[1]);
      var styleSheet = document.createElement("style");
      styleSheet.innerText = carouselCss;
      document.head.appendChild(styleSheet);
      const carouselContainer = document.querySelector(".carousel-container");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const dotsContainer = document.querySelector(".carousel-dots");
      const posts = document.querySelectorAll(".carousel-post");

      let currentIndex = 0;

      function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;

        const activeDot = dotsContainer.querySelector(".active-dot");
        if (activeDot) {
          activeDot.classList.remove("active-dot");
        }
        dotsContainer.children[currentIndex].classList.add("active-dot");
      }

      function moveToNext() {
        currentIndex = (currentIndex + 1) % posts.length;
        updateCarousel();
      }

      function moveToPrev() {
        currentIndex = (currentIndex - 1 + posts.length) % posts.length;
        updateCarousel();
      }

      function createDots() {
        for (let i = 0; i < posts.length; i++) {
          const dot = document.createElement("div");
          dot.classList.add("dot");
          if (i === currentIndex) {
            dot.classList.add("active-dot");
          }
          dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
          });
          dotsContainer.appendChild(dot);
        }
      }

      nextBtn.addEventListener("click", moveToNext);
      prevBtn.addEventListener("click", moveToPrev);
      createDots();
    } else {
      console.log("Not Found");
    }
  }
}

function googleCode() {
  let searchQuery = document.querySelector('input[name="q"]').value; // Get the search query
  let searchResult = document.querySelector(".g"); // Select only the first search result
  if (searchResult && searchQuery) {
    // Check if the search result and search query exist
    let searchQueryWords = searchQuery.toLowerCase().split(" ");
    let data = dummyData.find((item) => {
      let itemQueryWords = item.query.toLowerCase().split(" ");
      return searchQueryWords.some((word) => itemQueryWords.includes(word));
    });
    if (data) {
      createUI(data.title, data.description, data.url, data.imageUrl);
    }
  }
}

function createUI(title, description, url, imageUrl) {
  let searchResult = document.querySelector(".g"); // Select only the first search result
  if (searchResult) {
    // a title, a subtitle, a image and button on trailing
    const componentContainer = document.createElement("div");
    componentContainer.innerHTML = `<div class="tile">
    <div class="tile-content">
      <h2 class="tile-title">${title}</h2>
      <p class="tile-subtitle">${description}</p>
      <a href="${url}">buy now</a>
    </div>
    <img class="tile-image" src=${imageUrl} alt="Trailing Image">
  </div>`;
  const componentCss = `  .tile {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .tile-content {
    flex-grow: 1;
  }

  .tile-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
  }

  .tile-subtitle {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }

  .tile-image {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
    margin-left: 10px;
  }`;

  const carousal = `<div class="carousel">
  <div class="carousel-container">
      <div class="carousel-post">${componentContainer.innerHTML}</div>
      <div class="carousel-post">${componentContainer.innerHTML}</div>
      <div class="carousel-post">${componentContainer.innerHTML}</div>
      <div class="carousel-post">${componentContainer.innerHTML}</div>
  </div>
  <div class="carousel-controls">
      <button id="prevBtn">&lt;</button>
      <div class="carousel-dots"></div>
      <button id="nextBtn">&gt;</button>
  </div>
</div>`;
    const carouselCss = `
.carousel {
position: relative;
width: 100%;
overflow: hidden;
}

.carousel-container {
display: flex;
transition: transform 0.5s ease-in-out;
}

.carousel-post {
flex: 0 0 100%;

}

.carousel-controls {
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
}

#prevBtn,
#nextBtn {
font-size: 1.5rem;
background: none;
border: none;
cursor: pointer;
}

.carousel-dots {
display: flex;
justify-content: center;
align-items: center;
}

.dot {
width: 10px;
height: 10px;
background-color: gray;
border-radius: 50%;
margin: 0 5px;
cursor: pointer;
}

.active-dot {
background-color: black;
}`;
  
  const styleSheet = document.createElement("style");
  styleSheet.innerText = componentCss;
  document.head.appendChild(styleSheet);
  const styles = document.createElement("style");
  styles.innerText = carouselCss;
  document.head.appendChild(styles);

  const carousalDiv = document.createElement("div");
  carousalDiv.innerHTML = carousal;
    searchResult.insertBefore(carousalDiv, searchResult.children[0]);
    const carouselContainer = document.querySelector(".carousel-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.querySelector(".carousel-dots");
    const posts = document.querySelectorAll(".carousel-post");

    let currentIndex = 0;

    function updateCarousel() {
      carouselContainer.style.transform = `translateX(-${
        currentIndex * 100
      }%)`;

      const activeDot = dotsContainer.querySelector(".active-dot");
      if (activeDot) {
        activeDot.classList.remove("active-dot");
      }
      dotsContainer.children[currentIndex].classList.add("active-dot");
    }

    function moveToNext() {
      currentIndex = (currentIndex + 1) % posts.length;
      updateCarousel();
    }

    function moveToPrev() {
      currentIndex = (currentIndex - 1 + posts.length) % posts.length;
      updateCarousel();
    }

    function createDots() {
      for (let i = 0; i < posts.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === currentIndex) {
          dot.classList.add("active-dot");
        }
        dot.addEventListener("click", () => {
          currentIndex = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      }
    }

    nextBtn.addEventListener("click", moveToNext);
    prevBtn.addEventListener("click", moveToPrev);
    createDots();

  }
}
