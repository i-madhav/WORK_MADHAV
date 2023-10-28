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
    const div = document.createElement("div")
div.setAttribute("class" , "reviewCon")
div.innerHTML = ` <p class="reviewCon-text">85% 5 star Reviews on</p>
<img src="https://s3-alpha-sig.figma.com/img/5ca6/7cb8/89584ee7047b48e4943dfc6a94057cc5?Expires=1699228800&Signature=FIwKXoHQ9lOi0XWqtDi-kjKWAtKOir~hfULgYE86hivGE-wUj1bmGnYpx1pnIVpqTW0JisqH0FpI5DsTtNxhg5nOpr-yomasfPxoRBxpXZrOK12AFYTunWhlBLkjAJK3hBM5dM4t5O6jyBd5O8qunHxOYmd6aIQkyvtV0OydlZm~ymGUuOd3leegfmLTT8zAOldHkqkRZRrl0CS5zbxzfZocqeY0nEzcwwyBwhpaeu7ZD-jdX52bRhs-xKTvQS-mcOmXrl3dOeEQ4n1JI7YWw930eAPB5kVs6zpU-nx914yJsP141Y6BqgX8luKANaBM9kMaz1uRH6jtblvu8xrJwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="photo" class="reviewCon-photo">`
document.querySelector(".payment-buttons").before(div)

document.querySelector(`[id="AddToCartForm-7622161694932"] .variant-wrapper.variant-wrapper--.js:nth-child(4) .variant__label`).textContent = "Size: "
document.querySelector(`[id="AddToCartForm-7622161694932"] .variant-wrapper.variant-wrapper--.js:nth-child(6) .variant__label`).textContent = "Material: "
//MOBILE CHNAGE ONLY
if(window.innerWidth <= 600){
    document.querySelector(`[id="AddToCartForm-7622161694932"] .variant-wrapper.variant-wrapper--.js:nth-child(5) .variant__label`).textContent = "Color: "
}
  },
  () => document.querySelectorAll('[id="AddToCartForm-7622161694932"]').length > 0,
  () => document.querySelectorAll(`.payment-buttons`).length > 0
);