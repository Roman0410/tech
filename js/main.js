Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".more").click(function (event) {
  $(".text-block").toggleClass("open");
  $(".about-company")
    .find(".btn")
    .text(function (i, text) {
      return text === "read more" ? "close" : "read more";
    });
});
$(".faq-item").click(function (event) {
  $(this).closest("li").find(".unsver").toggleClass("open");
  $(this).closest("li").find("img").toggleClass("open");
});
$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});

const forms = document.querySelectorAll("#main-form form");
if (forms.length) {
  forms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const res = await fetch(form.attributes.action.value, {
        method: form.attributes.method.value,
        body: formData,
      }).then((res) => res.json());
    });
  });
}

let gallery = document.getElementById("gallery");
let loadMoreButton = document.getElementById("loadMoreButton");
let images = Array.from(gallery.getElementsByTagName("a"));
let visibleImagesCount = 9;
let allImagesVisible = false;

function hideImages() {
  images.forEach(function (image, index) {
    if (index < visibleImagesCount) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

hideImages();

loadMoreButton.addEventListener("click", function () {
  if (!allImagesVisible) {
    visibleImagesCount = images.length;
    loadMoreButton.textContent = "hide";
  } else {
    visibleImagesCount = 9;
    loadMoreButton.textContent = " Load more";
  }

  allImagesVisible = !allImagesVisible;

  hideImages();
});
