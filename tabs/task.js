const tab = Array.from(document.querySelectorAll(`.tab`));
const tabContent = Array.from(document.querySelectorAll(`.tab__content`));
const tabActive = document.getElementsByClassName(`tab_active`);
const tabContentActive = document.getElementsByClassName(`tab__content_active`);
tab.forEach((el, i) => {
    el.addEventListener(`click`, () => {
        tabActive[0].classList.remove(`tab_active`);
        tabContentActive[0].classList.remove(`tab__content_active`);
        tab[i].classList.add(`tab_active`);
        tabContent[i].classList.add(`tab__content_active`);

    })
})

