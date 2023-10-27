
document.querySelector(".product__title").after(document.querySelector("#pwr-snippets"))
document.querySelector("#extra-btns-wrapper").style.display = "none"
document.querySelector(".add_cart_quantity").after(document.querySelector(".sezzle-shopify-info-button"))
document.querySelector(".sezzle-shopify-info-button").after(document.querySelector(".installment-section"))
document.querySelector(".add_cart_btn ").after(document.querySelector(".product__info-container .msgs-wrapper .announcement-message"))

const span = document.createElement("span"); 
span.textContent = "Style : "
document.querySelector("legend.form__label").prepend(span);
/* MOBILE */
if (window.innerWidth <= 400) {
document.querySelector(".header.header--middle-left").after(document.querySelector(".product__title"))
document.querySelector("#extra-btns-wrapper").style.display = "none"

document.querySelector(".product__info-wrapper .msgs-wrapper").after( document.querySelector(".sezzle-shopify-info-button"))

document.querySelector(".sezzle-shopify-info-button").after(document.querySelector(".installment-section"))

const span = document.createElement("span"); 
span.textContent = "Style : "
document.querySelector("legend.form__label").prepend(span);

const newSpan = document.createElement("p")
newSpan.setAttribute("class" , "madquan")
newSpan.textContent = "Quantity"
document.querySelector("variant-radios.no-js-hidden").after(newSpan)
}