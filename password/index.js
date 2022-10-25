/* function send () {
    const form = document.querySelector('form');
    if(form) {
        const groups = form.querySelectorAll('.form-group');

        for (let a of groups ) {
            const input = a.querySelector('input');
            let required = false;
            let symbol = false;
            if (input.value === '') {
                required = true;
                a.classList.add('form-group--error');
                a.querySelector('.required').style = "display: block";
                if (input.id === 'new') {
                    a.querySelector('.not-symbol').style = "display: none";
                }
                if (input.id === 'confirm') {
                    a.querySelector('.repit').style = "display: none";
                }
            } else {
                if (input.id === 'new') {
                    a.querySelector('.required').style = "display: none";
                    if (!input.value.match(/\W+/)) {
                        symbol = true;
                        a.querySelector('.not-symbol').style = "display: block";
                        a.classList.add('form-group--error');
                    }
                }
                if (input.id === 'confirm') {
                    let newForm = document.getElementById('new')
                    let confirm = document.getElementById('confirm')
                    a.querySelector('.repit').style = "display: block";


                    if (newForm.value === confirm.value) {
                        a.querySelector('.required').style = "display: none";
                        a.querySelector('.repit').style = "display: none";
                        a.classList.remove('form-group--error');
                    }
                }


            }
            if(!required && !symbol) {
                a.classList.remove('form-group--error');
                a.querySelector('.required').style = "display: none";
                if (input.id === 'new') {
                    a.querySelector('.not-symbol').style = "display: none";
                }
                if (input.id === 'confirm') {
                    a.querySelector('.required').style = "display: none";
                }
            }
        }
    }
}


console.log(findWord('search', 'https://monthlyhotel.jp/search/ChIJ51cu8IcbXWARiRtXIothAS4?guests_number=1'));

function findWord(find, template) {
    const indexOfSearch = template.indexOf(find);
    if(indexOfSearch !== -1) {
        return `Yeah i find "${template.slice(indexOfSearch, indexOfSearch + find.length)}", on ${indexOfSearch} index`
    } else {
        return 'Soryan nema nichogo'
    }
}

function task6() {
    const form2 = document.getElementById('name-lastname');
    if(form2) {
        const input = form2.value.trim().split(' ');
        if (input.length === 2) {
            alert ("firstName - " + input[0] + "  lastName- " + input[1]);
        }
    }
}

function task2() {
    const form2 = document.getElementById('gg');
    if (form2.value.match(/^[A-Z]*$/)) {
        alert('good!')
    } else {
        alert('why not Big?!!')
    }
}

const numb = 15;
const str = 10;
console.log(+numb + str)

task3('       AsfasfasfFFFEgdgsasfasfGG asasas asgdsgsdgsd     sfsfs DDDDwd      ')
function task3(template) {
    if(template) {
        let trimmedTemplate = template.trim().toLowerCase();
        alert(trimmedTemplate[0].toUpperCase() + trimmedTemplate.slice(1))
    }
} */

function doubleNumbers(array) {
    // expert
    // return array.filter((x) => (!(x % 2)))

    // normal
    return array.filter(function (x) {
        return !(x % 2);
    })
}
function notNullFilter(array) {
    // expert
    // return array.filter((el) => (el && el.length !== 0));

    // normal
    return array.filter(function (el) {
        return el && el.length !== 0;
    });
}


console.log('doubleNumbers', doubleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log('notNullFilter', notNullFilter([1, 2, 0, false, [], 5, 0, 7, undefined, 9, null, -2]))


function createHotelElements(sortType) {
    const hotels = [
        {name: "Hotel", Image: "hotel", price: 1000,},
        {name: "Hotel", Image: "hotel", price: 10000,},
        {name: "Hotel", Image: "hotel", price: 800,},
        {name: "Hotel", Image: "hotel", price: 10,},
        {name: "Hotel", Image: "hotel", price: 2000,},
        {name: "Hotel", Image: "hotel", price: 2001,},
        {name: "Hotel", Image: "hotel", price: 20000,},
        {name: "Hotel", Image: "hotel", price: 10000,}
    ];
    if(sortType) {
        hotels.sort((a, b) => {
            if (a.price > b.price) {
                if (sortType === 'lower') {
                    return 1;
                } else if (sortType === 'higher') {
                    return -1;
                }
            }
            if (a.price < b.price) {
                if (sortType === 'lower') {
                    return -1;
                } else if (sortType === 'higher') {
                    return 1;
                }
            }
            return 0;
        });
    }
    const hotelElement = document.getElementsByClassName('hotel-list');
    if (hotelElement.length) {
        const hotelListDiv = hotelElement[0];
        let hotelHor = '';

        hotels.forEach( (value,index) => {
            value.name += ' ' + (index + 1);
            value.Image += '_' + (index + 1) + '.png';
            hotelHor += `<div class="hotels">
                    <img src="image/reviews/${value.Image}" alt="ffg">
                    <p class="name-review">${value.name}</p>
                     <p class="p-text">${value.price}</p>

                 </div>`
        });
        hotelListDiv.innerHTML = hotelHor;
    }
}

createHotelElements();

const someForm = {
    email: {
        required: false,
        email: false
    },
    password: {
        required: false,
        minLength: false,
        maxLength: false
    }
}
function checkValid(form) {
    const formKeys = Object.keys(form); // ['email', 'password'];
    return formKeys.every(value => { // 'email' - первий ход 'password' - другий ход
        const keyValues = Object.values(someForm[value]);
        /*
        someForm[value] {
            required: false,
            email: false
        } це обьєкт коли буде ключ (email)
        а от (keyValues) буде дорівнювати масив із значеннями [false, false]

        someForm[value] {
            required: false,
            minLength: false,
            maxLength: false
        } це обьєкт коли буде ключ (password)
        а от (keyValues) буде дорівнювати масив із значеннями [false, false, false]
         */

        // return keyValues.every(eValue => eValue === false); // щоб провірить що всі значення === false використовуємо every
        return keyValues.some((eValue) => {
            return eValue;
        }); // альтернатива
    }); // true
}

function checkValid2(form) {
    const formKeys = Object.values(form);
    /*
    поверне масив з значень
        [{
            required: false,
            email: false
        },
        {
            required: false,
            minLength: false,
            maxLength: false
        }]
     */
    return formKeys.every(value => { // внутрі велью уже буде обьєкт
        const keyValues = Object.values(value);
        /*
        (keyValues) буде дорівнювати масив із значеннями [false, false]

        (keyValues) буде дорівнювати масив із значеннями [false, false, false]
         */

        return keyValues.some((eValue) => {
            return eValue;
        }); // альтернатива
    }); // true
}

const baseArr = [1,2,3,4,5,6,7,8,9,10];
const perPage = 3;

console.log(paginationInit(baseArr))

function paginationInit(arr) {
    console.log("paginationInit")
    const pageCount = Math.ceil(baseArr.length / perPage);
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

console.log(showSlice(1));
function showSlice(page) {
    console.log("showSlice")

    const to = page * perPage;
    const from = to - perPage;
    return baseArr.slice(from, to)
}




