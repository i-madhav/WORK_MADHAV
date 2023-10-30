function waitForConditions(callback, ...conditions) {
  const promises = conditions.map(
    (condition) =>
      new Promise((resolve) => {
        let interval = setInterval(() => {
          if (condition()) {
            clearInterval(interval);
            resolve(true);
          }
        }, 100);
      })
  );

  Promise.all(promises).then(() => {
    callback();
  });
}
waitForConditions(
  () => {
    const div = document.createElement("div");
    div.setAttribute("class", "reviewCon");
    div.innerHTML = ` <p class="reviewCon-text">85% 5 star Reviews on</p>
  <img src="https://s3-alpha-sig.figma.com/img/5ca6/7cb8/89584ee7047b48e4943dfc6a94057cc5?Expires=1699228800&Signature=FIwKXoHQ9lOi0XWqtDi-kjKWAtKOir~hfULgYE86hivGE-wUj1bmGnYpx1pnIVpqTW0JisqH0FpI5DsTtNxhg5nOpr-yomasfPxoRBxpXZrOK12AFYTunWhlBLkjAJK3hBM5dM4t5O6jyBd5O8qunHxOYmd6aIQkyvtV0OydlZm~ymGUuOd3leegfmLTT8zAOldHkqkRZRrl0CS5zbxzfZocqeY0nEzcwwyBwhpaeu7ZD-jdX52bRhs-xKTvQS-mcOmXrl3dOeEQ4n1JI7YWw930eAPB5kVs6zpU-nx914yJsP141Y6BqgX8luKANaBM9kMaz1uRH6jtblvu8xrJwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="photo" class="reviewCon-photo">`;
    document.querySelector(".payment-buttons").before(div);

    document.querySelector(
      `[id*="AddToCartForm"] .variant-wrapper.variant-wrapper--.js:nth-child(4) .variant__label`
    ).textContent = "Size: ";
    document.querySelector(
      `[id*="AddToCartForm"] .variant-wrapper.variant-wrapper--.js:nth-child(6) .variant__label`
    ).textContent = "Material: ";
    //MOBILE CHNAGE ONLY
    if (window.innerWidth <= 600) {
      document.querySelector(
        `[id*="AddToCartForm"] .variant-wrapper.variant-wrapper--.js:nth-child(5) .variant__label`
      ).textContent = "Color: ";
    }
  },
  () => document.querySelectorAll('[id*="AddToCartForm"]').length > 0,
  () => document.querySelectorAll(`.payment-buttons`).length > 0
);

waitForConditions(
  () => {
    var desTabData = jQuery(
      ".product-template-additional-content-container-right .collapsibles-wrapper.collapsibles-wrapper--tabs .collapsibles-content-wrapper > div:nth-child(1)"
    ).html();
    var includeTabData = jQuery(
      ".product-template-additional-content-container-right .collapsibles-wrapper.collapsibles-wrapper--tabs .collapsibles-content-wrapper > div:nth-child(2)"
    ).html();
    var guideTabData = jQuery(
      ".product-template-additional-content-container-right .collapsibles-wrapper.collapsibles-wrapper--tabs .collapsibles-content-wrapper > div:nth-child(3)"
    ).html();

    var accordiionsHtml = `<div class="neo-accordions-wrapper">
        <div class="neo-accordions-item">
            <div class="neo-accordions-item-header">
                <h6>Description</h6>
                <p>+</p>
            </div>
            <div class="neo-accordions-item-content">
                ${desTabData}
            </div>
        </div>
        <div class="neo-accordions-item">
            <div class="neo-accordions-item-header">
                <h6>What's Included?</h6>
                <p>+</p>
            </div>
            <div class="neo-accordions-item-content">
                ${includeTabData}
            </div>
        </div>
        <div class="neo-accordions-item">
            <div class="neo-accordions-item-header">
                <h6>Installation Guides</h6>
                <p>+</p>
            </div>
            <div class="neo-accordions-item-content">
                ${guideTabData}
            </div>
        </div>
        </div>`;

    jQuery(
      ".product-template-additional-content-container-right .collapsibles-wrapper.collapsibles-wrapper--tabs"
    ).before(accordiionsHtml);

    jQuery(".neo-accordions-item-header").click((ele) => {
      jQuery(ele.currentTarget)
        .closest(".neo-accordions-item")
        .toggleClass("active");
    });
  },
  () =>
    document.querySelectorAll(
      ".product-template-additional-content-container-right .collapsibles-wrapper.collapsibles-wrapper--tabs .collapsibles-content-wrapper > div"
    ).length > 2,
  () =>
    document.querySelectorAll(
      ".product-template-additional-content-container-right .collapsibles-wrapper.collapsibles-wrapper--tabs"
    ).length > 0,
  () => window.innerWidth < 768,
  () => typeof jQuery == "function"
);

waitForConditions(
  () => {
    var sliderCuArrowHtml = `<div class="sliderCuArrow-wrapper">
        <div class="sliderCuArrow sliderCuArrow-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                <path d="M8.54547 11.8611L2.00002 6.86139L8.54547 1.86169" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
        </div>
        <div class="sliderCuArrow sliderCuArrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                <path d="M8.54547 11.8611L2.00002 6.86139L8.54547 1.86169" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
        </div>
        </div>`;
    jQuery(".product__main-photos-wrapper").prepend(sliderCuArrowHtml);

    jQuery(".sliderCuArrow.sliderCuArrow-right").click(() => {
      jQuery(".product__photo-dots .slick-dots li.slick-active")
        .next("li")
        .click();
    });
    jQuery(".sliderCuArrow.sliderCuArrow-left").click(() => {
      jQuery(".product__photo-dots .slick-dots li.slick-active")
        .prev("li")
        .click();
    });
  },
  () => document.querySelectorAll(".product__main-photos-wrapper").length > 0,
  () => window.innerWidth < 768,
  () => typeof jQuery == "function"
);
