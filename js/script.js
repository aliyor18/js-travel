var intro = "Xush kelibsiz!";
var hero = "Sayohatga chiqishga tayormisiz?";


var elBody = document.querySelector("body");
var elInner = document.querySelector(".hero__inner");
var elTitle = document.querySelector(".hero__title");
var elInfo = document.querySelector(".hero__info");
var elDesc = document.querySelector(".hero__desc-1");
var elDesc2 = document.querySelector(".hero__desc-2");
var elDesc3 = document.querySelector(".hero__desc-3");
var elForm = document.querySelector(".hero__form");
var elInput = document.querySelector(".hero__input");
var elButton = document.querySelector(".hero__button");
var elBtn = document.querySelector(".hero__btn");
var elP = document.createElement("span");



elBody.appendChild(elInner);
elInner.appendChild(elTitle);
elInner.appendChild(elInfo);
elInner.appendChild(elForm);
elInfo.appendChild(elDesc);
elInfo.appendChild(elDesc2);
elInfo.appendChild(elDesc3);
elForm.appendChild(elInput);
elForm.appendChild(elButton);
elForm.appendChild(elBtn);
elForm.appendChild(elP);



var alertIntro = alert(intro);
var alertHero = confirm(hero);


elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

if (elInput.value >= 5000000 && elInput.value <= 10000000) {
  elP.textContent = "Sizning pulingiz Standart sayohat turiga yetadi!"
} else if (elInput.value >= 10000000 && elInput.value <= 20000000) {
  elP.textContent = "Sizning pulingiz Gold sayohat turiga yetadi!"
} else if (elInput.value >= 20000000) {
  elP.textContent = "Sizning pulingiz Vip sayohat turiga yetadi!"
} else if (isNaN(elInput.value)) {
  elP.textContent = "Faqat son kiriting!"
} else {
  elP.textContent = "Uzr sizning pulingiz yetmaydi!"
}
})