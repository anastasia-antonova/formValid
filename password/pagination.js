const baseArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const perPage = 2;
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
    active = page ;
    const to = active * perPage;
    const from = to - perPage;

    const content = document.querySelector(".content");
    let html = "";
    baseArr.slice(from, to).forEach(value => {
        html += `<p>${value}</p>`
    });
    content.innerHTML = html;

    showPaginationButtons();
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
function showPaginationButtons() {
    // const paginator = document.querySelector(".pagination-content");
    // let page = "";
    // paginationInit().forEach(value => {
    //     page += `<button onclick="showSlice(${value})">${value}</button>`;
    // })
    // paginator.innerHTML = page;
    const paginator = document.querySelector(".pagination-content");
    let page = "";
    paginationInit()
        .map((value, index, array) => {
            if (index === 0) {
                return value;
            } else if (index === (array.length - 1)) {
                return value;
            } else if ((index + 1) === active) {
                return value;
            } else if ((index + 1) === (active + 1)) {
                return value;
            } else if ((index + 1) === (active - 1)) {
                return value;
            } else {
                return false;
            }
        })
        .filter((value, index, array) => {
            if (value) {
                return true
            } else if (array[index] === false && array[index + 1] === false) {
                return false
            } else {
                return true
            }
        })
        .forEach(value => {
            if (value) {
                page += `<button onclick="showSlice(${value})">${value}</button>`;
            } else {
                page += `<button>...</button>`;
            }
        });
    // [1, 2, false, 8]


    //     .forEach((value, index, array) => {
    //     console.log("index");
    //     console.log(index);
    //     console.log(active);
    //
    //     if(index === 0) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if(index === (array.length - 1)) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if ((index + 1) === active) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if ((index + 1) === (active + 1)) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else if ((index + 1) === (active - 1)) {
    //         page += `<button onclick="showSlice(${value})">${value}</button>`;
    //     } else {
    //         page += `<button>...</button>`;
    //     }
    // });
    paginator.innerHTML = page;
    checkActive();
}

showPaginationButtons();
showSlice(active);


function checkActive() {
    const paginator = document.querySelector(".pagination-content");
    for (let i = 0; i < paginator.children.length; i++) {
        console.log(active, paginator.children[i].innerHTML);
        if(active === +paginator.children[i].innerHTML) {
            paginator.children[i].classList.add("active");
        } else {
            paginator.children[i].classList.remove("active");
        }

    }

}

function leftButton() {
    active--;
    showSlice(active);
    showPaginationButtons();
}
function rightButton() {
    active++;
    showSlice(active);
    showPaginationButtons();

}

