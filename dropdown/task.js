const dropList = Array.from(document.querySelectorAll(`.dropdown__list`));
const dropdown = Array.from(document.querySelectorAll(`.dropdown__value`));
const dropItem = Array.from(document.querySelectorAll(`.dropdown__link`))
dropdown.forEach(el => {
    el.addEventListener(`click`, () => {
        dropList[0].classList.toggle(`dropdown__list_active`);
    })
})
// dropItem.forEach(el => {
//     el.onclick = () => {
//         dropdown[0].textContent = el.textContent;
//         dropList[0].classList.remove(`dropdown__list_active`);
//         return false;
//     }
     
// })
   dropItem.forEach(el => {
       el.addEventListener(`click`, (el) => {
           console.log(el.textContent);
           el.preventDefault();
       })
   })