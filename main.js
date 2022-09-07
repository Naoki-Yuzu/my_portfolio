// ハンバーガーメニューを取得


const hambergerButton = document.querySelector(`#js-side-menu-button`)
const hambergerButtonDesign = document.querySelector(`#js-side-menu-button-design`)

// サイドメニューを取得

const sideMenuNav = document.querySelector(`#js-side-menu-list`)

// モバイル版webサイトのサイドメニュー内のリストを取得

const sideMemuToProfile = document.querySelector(`#js-scroll-to-profile`)
const sideMemuToSkills = document.querySelector(`#js-scroll-to-skills`)
const sideMemuToWorks = document.querySelector(`#js-scroll-to-works`)

// セクションを取得

const sectionProfile = document.querySelector("#section-profile-heading")
const sectionSkills = document.querySelector("#section-skills-heading")
const sectionWorks = document.querySelector("#section-works-heading")

// 特定の位置にスクロール

const scrollParticularPosition = function(section) {
  const left = section.offsetLeft;
  const top = section.offsetTop;
  window.scrollTo({
    left: left,
    top: top - 20,
    behavior: "smooth"
  });
  console.log(top - 20);
}

// 特定の位置にスクロール(safariのios専用)

const scrollParticularPositionForSafariFromIos = function(section) {
  const scrollSpeed = 300;
  const timerStep = 20;
  
  const scrollPosition = window.pageYOffset;
  const sectionPosition = section.offsetTop - 20;

  const scrollStep = sectionPosition / (scrollSpeed / timerStep);
  var currentScroll = scrollPosition;

  const smoothScrollTimer = setInterval(function() {
    if (currentScroll >= sectionPosition) {
      window.scrollTo(section.offsetLeft, sectionPosition);
      clearInterval(smoothScrollTimer);
    } else {
      currentScroll += scrollStep;
      window.scrollTo(section.offsetLeft, currentScroll);
    }
  }, timerStep);
  
}

// ハンバーガーメニューがタップされたら、サイドメニューを表示/非表示

hambergerButton.addEventListener(`click`, function() {
  hambergerButtonDesign.classList.toggle(`active`);
  sideMenuNav.classList.toggle(`active`);
});

// サイドメニューのリストがタップされたときのイベント処理

sideMemuToProfile.addEventListener(`click`, function() {
  hambergerButtonDesign.classList.toggle(`active`);
  sideMenuNav.classList.toggle(`active`);
  if(`scrollBehavior` in document.documentElement.style) {
    setTimeout(function(){
      scrollParticularPosition(sectionProfile)
    }, 500);
  } else {
    setTimeout(function(){
      scrollParticularPositionForSafariFromIos(sectionProfile)
    }, 500);
  }
});

sideMemuToSkills.addEventListener(`click`, function() {
  hambergerButtonDesign.classList.toggle(`active`);
  sideMenuNav.classList.toggle(`active`);
  if(`scrollBehavior` in document.documentElement.style) {
    setTimeout(function(){
      scrollParticularPosition(sectionSkills)
    }, 500);
  } else {
    setTimeout(function(){
      scrollParticularPositionForSafariFromIos(sectionSkills)
    }, 500);
  }
});

sideMemuToWorks.addEventListener(`click`, function() {
  hambergerButtonDesign.classList.toggle(`active`);
  sideMenuNav.classList.toggle(`active`);
  if(`scrollBehavior` in document.documentElement.style) {
    setTimeout(function(){
      scrollParticularPosition(sectionWorks)
    }, 500);
  } else {
    setTimeout(function(){
      scrollParticularPositionForSafariFromIos(sectionWorks)
    }, 500);
  }
});

// 記録用 : 実現不可ゾーン

// const sideMenuNavLinks = document.getElementsByClassName(`side-menu-items`)
// const arrayOfsideMenuNavLinks = Array.from(sideMenuNavLinks)

// arrayOfsideMenuNavLinks.forEach(function(sideMenuNavLink) {

//   sideMenuNavLink.addEventListener(`click`, function() {
//     console.log(arrayOfsideMenuNavLinks);
//     hambergerButtonDesign.classList.toggle(`active`);
//     sideMenuNav.classList.toggle(`active`);
//     setTimeout(scrollParticularPosition, 1000);
//   });  
// });