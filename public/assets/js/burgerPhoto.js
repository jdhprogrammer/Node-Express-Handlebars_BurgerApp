window.onload = function changeBurgerPhoto() {

    let burgerPhoto = document.querySelector("#burgerPhoto")

    for (let i = 0; i < 1; i++) {
        const burgerNumber = Math.floor(Math.random() * 8) + 1;
        burgerPhoto.src = `/assets/images/burger${burgerNumber}.jpeg`;
    };
}