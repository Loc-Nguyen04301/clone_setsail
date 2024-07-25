document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const container = document.querySelector("#grid-gallery-trip");
    const itemData = [
      {
        location: "Tarragona",
        rating: "5.0 Good",
        price: "$1740",
        imgSrc: "../assets/item-grid-3.jpg",
      },
    ];

    function createGridItem(data) {
      const item = document.createElement("div");
      item.className = "image-container w-100 position-relative";

      item.innerHTML = `
        <img src="${data.imgSrc}" alt="${data.location}" />
        <div class="position-absolute w-100 bottom-0 image-text">
          <div class="d-flex justify-content-around align-items-center text-white fw-bold gap-5">
            <div>
              <span>${data.location}</span>
              <p>${data.rating}</p>
            </div>
            <span class="price-text">${data.price}</span>
          </div>
        </div>
      `;
      return item;
    }

    for (let i = 0; i < 8; i++) {
      container.appendChild(createGridItem(itemData[0]));
    }
  }, 1000);

  setTimeout(function () {
    const container = document.querySelector("#grid-introduce");
    const itemData = [
      {
        title: "Restaurants",
        description: "Aenean commodo ligula eget dolor. Lorem ipsum",
        imgSrc: "../assets/introduce-image-1.png",
      },
    ];

    function createGridItem(data) {
      const item = document.createElement("div");
      item.className = "image-container w-100 position-relative px-5";

      item.innerHTML = `
          <div>
            <img src="${data.imgSrc}" />
            <div class="mt-3">
                <span style="font-size: 18px; font-weight: 600;">${data.title}</span>
            </div>
            <div>
                <span>${data.description}</span>
            </div>
        </div>
      `;
      return item;
    }

    for (let i = 0; i < 4; i++) {
      container.appendChild(createGridItem(itemData[0]));
    }
  }, 1000);
});
