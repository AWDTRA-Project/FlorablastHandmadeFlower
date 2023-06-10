// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
};
// Toggle search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchResults = document.querySelector(".search-results");
const productCards = document.querySelectorAll(".product-card");
const moreButton = document.getElementById("more");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

let isSearchActive = false; // Status pencarian aktif atau tidak

searchBox.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  // Menampilkan hasil pencarian yang cocok
  const matchedProducts = Array.from(productCards).filter((card) => {
    const productName = card
      .querySelector(".product-content h3")
      .innerText.toLowerCase();
    return productName.includes(searchTerm);
  });

  // Menampilkan atau menyembunyikan hasil pencarian
  if (matchedProducts.length > 0 || searchTerm !== "") {
    isSearchActive = true;
    searchResults.innerHTML = ""; // Menghapus hasil pencarian sebelumnya

    if (matchedProducts.length > 0) {
      matchedProducts.forEach((card) => {
        const productClone = card.cloneNode(true);
        searchResults.appendChild(productClone);
      });
    } else {
      searchResults.innerHTML = "<p>Tidak ada hasil pencarian.</p>";
    }

    moreButton.classList.add("active"); // Menambahkan kelas "active" pada tombol "more"
  } else {
    isSearchActive = false;
    searchResults.innerHTML = ""; // Menghapus hasil pencarian
    moreButton.classList.remove("active"); // Menghapus kelas "active" pada tombol "more"
  }

  if (isSearchActive && searchForm.classList.contains("active")) {
    moreButton.click(); // Mengklik tombol "more" saat form aktif dan ada hasil pencarian
  }
});

searchForm.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  moreButton.classList.toggle("active");

  if (isSearchActive && searchForm.classList.contains("active")) {
    moreButton.click(); // Mengklik tombol "more" saat form aktif dan ada hasil pencarian
  }
});

// untuk funsi search

//klik diluar element

const HM = document.querySelector("#hamburger-menu");
// const SB = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!HM.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // if (!SB.contains(e.target) && !searchForm.contains(e.target)) {
  //   searchForm.classList.remove("active");
  // }
});

//tombol search start

//tombol search end

// tombol tampilkan tiga menu diawal plus sembunyikan yang lainya start
$(document).ready(function () {
  var defaultVisible = 3; // Jumlah produk yang ingin ditampilkan secara default

  $(".product-card").hide(); // Sembunyikan semua produk

  $(".product-card:lt(" + defaultVisible + ")").show(); // Tampilkan produk secara default

  $(".show-more").click(function () {
    $(".product-card").toggle(); // Toggle menampilkan dan menyembunyikan produk
    $(this).toggleClass("active"); // Toggle class 'active' pada tombol
    var buttonText = $(this).text();
    $(this).text(buttonText === "Lihat Semua" ? "Sembunyikan" : "Lihat Semua");
  });
});
// tombol tampilkan tiga menu diawal plus sembunyikan yang lainya End
