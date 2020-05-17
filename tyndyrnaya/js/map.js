ymaps.ready(function () {
    var myMap = new ymaps.Map('map1', {
            center: [44.730533, 37.742312],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([44.730533, 37.742312], {
            hintContent: 'Тандыр джан',
            balloonContent: 'Тандыр джан',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map-w.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -25],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);


    // Отключаем лишний скрол
    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "Акт. карту"
        },
        options: {
            position: {
                right: 10,
                top: 110
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = 'Акт. карту';

        if ( target.data.get('content') == text ) {
            text = 'Деакт. карту';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

    myMap.controls.add(activeMapButton);


    var myMap = new ymaps.Map('map2', {
            center: [44.737442, 37.729278],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([44.737442, 37.729278], {
            hintContent: 'Тандыр джан',
            balloonContent: 'Тандыр джан',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map-w.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -25],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);


    // Отключаем лишний скрол
    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "Акт. карту"
        },
        options: {
            position: {
                right: 10,
                top: 110
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = 'Акт. карту';

        if ( target.data.get('content') == text ) {
            text = 'Деакт. карту';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

    myMap.controls.add(activeMapButton);

var myMap = new ymaps.Map('map3', {
            center: [44.736207, 37.798161],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([44.736207, 37.798161], {
            hintContent: 'Тандыр джан',
            balloonContent: 'Тандыр джан',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map-w.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -25],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);


    // Отключаем лишний скрол
    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "Акт. карту"
        },
        options: {
            position: {
                right: 10,
                top: 110
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = 'Акт. карту';

        if ( target.data.get('content') == text ) {
            text = 'Деакт. карту';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

    myMap.controls.add(activeMapButton);

var myMap = new ymaps.Map('map4', {
            center: [44.690036, 37.789914],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([44.690036, 37.789914], {
            hintContent: 'Тандыр джан',
            balloonContent: 'Тандыр джан',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map-w.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -25],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);


    // Отключаем лишний скрол
    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "Акт. карту"
        },
        options: {
            position: {
                right: 10,
                top: 110
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = 'Акт. карту';

        if ( target.data.get('content') == text ) {
            text = 'Деакт. карту';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

    myMap.controls.add(activeMapButton);

var myMap = new ymaps.Map('map5', {
            center: [44.681730, 37.780563],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([44.681730, 37.780563], {
            hintContent: 'Тандыр джан',
            balloonContent: 'Тандыр джан',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo-map-w.png',
            // Размеры метки.
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -25],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);


    // Отключаем лишний скрол
    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "Акт. карту"
        },
        options: {
            position: {
                right: 10,
                top: 110
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = 'Акт. карту';

        if ( target.data.get('content') == text ) {
            text = 'Деакт. карту';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

    myMap.controls.add(activeMapButton);

});