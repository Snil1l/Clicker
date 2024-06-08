const count = document.querySelector('.count__click');
const pepe = document.querySelector('.pepe');
const btnBoost = document.querySelector('.btn__boost');
const price = document.querySelector('.price__boost');



pepe.addEventListener('click', clickTap)

btnBoost.addEventListener('click', clickD)



function clickTap() {
    count.textContent++;
    if (clickD) {
        let a = 2;
        let result = parseInt(count.textContent) + a;
        count.textContent = result;
    };
};



function clickD() {
    if (parseInt(count.textContent) >= parseInt(price.textContent)) {
        let result = count.textContent - price.textContent;
        count.textContent = result;
    };
};
