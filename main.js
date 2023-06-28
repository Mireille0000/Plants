(function () {
    const burgerButton = document.querySelector('.burger');
    const menu = document.querySelector('.navigation')
    const menuClose = document.querySelector('.header__navigation-close')

    const menuLinks = document.querySelectorAll('.header__link');

    const removeMenu = document.querySelector('nav');


    burgerButton.addEventListener('click', () => {
        menu.classList.add('navigation_active');
  });


    menuClose.addEventListener('click', () => {
        menu.classList.remove('navigation_active')
    })


    if (window.innerWidth <= 766) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('navigation_active');
            })
        } 
    }

    if (window.innerWidth <= 766) {
        removeMenu.addEventListener('click', () => {
            menu.classList.remove('navigation_active')
        })
        
    }

    // Plants-part 3 funtionality 

    // Service section starts

    const buttonsServiceSection1 = document.querySelector('.button_service-gardens');
    const buttonsServiceSection2 = document.querySelector('.button_service-lawn');
    const buttonsServiceSection3 = document.querySelector('.button_service-planting');

    const cardsGarden = document.querySelectorAll('.garden');
    const cardsLawn = document.querySelector('.lawn');
    const cardsPlanting = document.querySelectorAll('.planting');

    
    buttonsServiceSection1.addEventListener('click', () => {
        console.log('Hi');
        buttonsServiceSection1.classList.toggle('button_service-gardens_active');
        cardsLawn.classList.toggle('lawn_active');

        for (let i = 0; i < cardsPlanting.length; i += 1) {
            if (cardsPlanting[i]) {

            } cardsPlanting[i].classList.toggle('planting_active');
        }
    });



    buttonsServiceSection2.addEventListener('click', () => {
        console.log('Hi');
        buttonsServiceSection2.classList.toggle('button_service-lawn_active')
        for (let i = 0; i < cardsGarden.length; i += 1) {
            if (cardsGarden[i]) {

            } cardsGarden[i].classList.toggle('garden_active');
        }

        for (let i = 0; i < cardsPlanting.length; i += 1) {
            if (cardsPlanting[i]) {

            } cardsPlanting[i].classList.toggle('planting_active');
        }
    })

    
    buttonsServiceSection3.addEventListener('click', () => {
        console.log('Hi');

        cardsLawn.classList.toggle('lawn_active');
        buttonsServiceSection3.classList.toggle('button_service-planting_active')

        for (let i = 0; i < cardsGarden.length; i += 1) {
            if (cardsGarden[i]) {

            } cardsGarden[i].classList.toggle('garden_active');
        }

    })

    // Functionality for this part is not fully accomplished (point 2 of the task)
    // Service section end

    // Prices section starts
    

    const priceButtons = document.querySelectorAll('.btn_icon');
    const priceItems = document.querySelectorAll('.price_item');
    const priceButtonsActive = document.querySelectorAll('.dif_prices');
    const buttonIcon = document.querySelectorAll('.btn_icon');

    for (let i = 0; i < priceButtons.length; i += 1) {

    priceButtons[0].addEventListener('click', () => {
        console.log('Hi');

        for (let i = 0; i < priceButtonsActive.length; i += 1) {
            if (priceButtonsActive[0]) {
                priceButtonsActive[0].classList.toggle('dif_prices_active');
                priceButtonsActive[1].classList.remove('dif_prices_active')
                priceButtonsActive[2].classList.remove('dif_prices_active')
            };
        }

        for (let i = 0; i < priceItems.length; i += 1) {
            if (priceItems[0]) {
                priceItems[0].classList.toggle('price_item_active');
                priceItems[1].classList.remove('price_item_active');
                priceItems[2].classList.remove('price_item_active');
            };
        };

        for (let i = 0; i < buttonIcon.length; i += 1) {
            if (buttonIcon[0]) {
                buttonIcon[0].classList.toggle('btn_icon_active');
                buttonIcon[1].classList.remove('btn_icon_active');
                buttonIcon[2].classList.remove('btn_icon_active');
            }
        }
    })
}

    priceButtons[1].addEventListener('click', () => {
    console.log('Hi');

        for (let i = 0; i < priceButtonsActive.length; i += 1) {
           if (priceButtonsActive[1]) {
               priceButtonsActive[1].classList.toggle('dif_prices_active');
               priceButtonsActive[0].classList.remove('dif_prices_active');
               priceButtonsActive[2].classList.remove('dif_prices_active');

            };
        }

        for (let i = 0; i < priceItems.length; i += 1) {
            if (priceItems[1]) {
                priceItems[1].classList.toggle('price_item_active');
                priceItems[0].classList.remove('price_item_active');
                priceItems[2].classList.remove('price_item_active');
            };
        };

        for (let i = 0; i < buttonIcon.length; i += 1) {
            if (buttonIcon[1]) {
                buttonIcon[1].classList.toggle('btn_icon_active');
                buttonIcon[0].classList.remove('btn_icon_active');
                buttonIcon[2].classList.remove('btn_icon_active');
            }
        }
    })

    priceButtons[2].addEventListener('click', () => {
    console.log('Hi');

    for (let i = 0; i < priceButtonsActive.length; i += 1) {
            if (priceButtonsActive[2]) {
                priceButtonsActive[2].classList.toggle('dif_prices_active');
                priceButtonsActive[0].classList.remove('dif_prices_active');
                priceButtonsActive[1].classList.remove('dif_prices_active');
            };
        }

        for (let i = 0; i < priceItems.length; i += 1) {
            if (priceItems[2]) {
                priceItems[2].classList.toggle('price_item_active');
                priceItems[0].classList.remove('price_item_active');
                priceItems[1].classList.remove('price_item_active');
            };
        };

        for (let i = 0; i < buttonIcon.length; i += 1) {
            if (buttonIcon[2]) {
                buttonIcon[2].classList.toggle('btn_icon_active');
                buttonIcon[0].classList.remove('btn_icon_active');
                buttonIcon[1].classList.remove('btn_icon_active');
            }
        }
    })

    // Prices section ends

    // Contact us section starts

    // City button
    const buttonCity = document.querySelector('.button_city');
    const locationList = document.querySelector('.location_list');
    const dropButton = document.querySelector('.drop_button')

    const cityCards1 = document.querySelector('.city_card1');
    const cityCards2 = document.querySelector('.city_card2');
    const cityCards3 = document.querySelector('.city_card3');
    const cityCards4 = document.querySelector('.city_card4');

    const cityChosen = document.querySelectorAll('.location_variant');
    const buttonText = document.querySelector('#button_city');

    buttonCity.addEventListener('click', () => {
        buttonCity.classList.toggle('button_city_active');
        locationList.classList.toggle('location_list_active');
        dropButton.classList.toggle('drop_button_active');

        cityCards1.classList.remove('city_card1_active');
        cityCards2.classList.remove('city_card2_active');
        cityCards3.classList.remove('city_card3_active');
        cityCards4.classList.remove('city_card4_active');

    })

    // Button's content

    for (let i = 1; i < cityChosen.length; i += 1) {

        if (cityChosen[0]) {
            cityChosen[0].addEventListener('click', () => {
                cityCards1.classList.toggle('city_card1_active');
                cityCards2.classList.remove('city_card2_active');
                cityCards3.classList.remove('city_card3_active');
                cityCards4.classList.remove('city_card4_active');
                locationList.classList.remove('location_list_active');
                buttonText.textContent = 'Canandajgoua, NY';
            })
         }  if (cityChosen[1]) {
              cityChosen[1].addEventListener('click', () => {
                    cityCards2.classList.toggle('city_card2_active');
                    cityCards1.classList.remove('city_card1_active');
                    cityCards3.classList.remove('city_card3_active');
                    cityCards4.classList.remove('city_card4_active');
                    locationList.classList.remove('location_list_active');
                    buttonText.textContent = 'New York City';
                })
        }  if (cityChosen[2]) {
             cityChosen[2].addEventListener('click', () => {
                cityCards3.classList.toggle('city_card3_active');
                cityCards2.classList.remove('city_card2_active');
                cityCards1.classList.remove('city_card1_active');
                cityCards4.classList.remove('city_card4_active');
                locationList.classList.remove('location_list_active');
                buttonText.textContent = 'Yonkers, NY';
             })
        }  if (cityChosen[3]) {
             cityChosen[3].addEventListener('click', () => {
                cityCards4.classList.toggle('city_card4_active');
                cityCards2.classList.remove('city_card2_active');
                cityCards3.classList.remove('city_card3_active');
                cityCards1.classList.remove('city_card1_active');
                locationList.classList.remove('location_list_active');
                buttonText.textContent =  'Sherrill, NY';
            })
        }
    }

    // Contact us section ends
}())