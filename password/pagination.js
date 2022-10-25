const baseArr = [1,2,3,4,5,6,7,8,9,10];
const perPage = 3;
let active = 1;
const pageCount = Math.ceil(baseArr.length / perPage);

function paginationInit() {
    console.log("paginationInit")
    const returnArr = [];
    // let i = 1;
    //
    // do {
    //     returnArr.push(i);
    //     i++;
    // } while (i <= pageCount);

    for (let j = 1; j <= pageCount; j++) {
        returnArr.push(j);
    }
    return returnArr;
}

function showSlice(page) {
    console.log("showSlice", page)
    active = page;
    const to = active * perPage;
    const from = to - perPage;

    const content = document.querySelector(".content");
    let html = "";
    baseArr.slice(from, to).forEach(value => {
        html += `<p>${value}</p>`
    });
    content.innerHTML = html;

    checkActive()
    const buttonLeft = document.querySelector('.left');
    const buttonRight = document.querySelector('.right');

    if(active === 1) {
        buttonLeft.style.visibility = 'hidden';
    } else {
        buttonLeft.style.visibility = 'visible';
    }
    if(active === pageCount) {
        buttonRight.style.visibility = 'hidden';
    } else {
        buttonRight.style.visibility = 'visible';
    }
}

const paginator = document.querySelector(".pagination-content");
let page = "";
paginationInit().forEach(value => {
    page += `<button onclick="showSlice(${value})">${value}</button>`;
})
paginator.innerHTML = page;

showSlice(active);

function checkActive() {
    for (let i = 0; i < paginator.children.length; i++) {
        console.log(paginator.children[i]);

        if(active === (i + 1)) {
            paginator.children[i].classList.add("active");
        } else {
            paginator.children[i].classList.remove("active");
        }
    }
}

function leftButton() {
    active--;
    showSlice(active);

}
function rightButton() {
    active++;
    showSlice(active);
}