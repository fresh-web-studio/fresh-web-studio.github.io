ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.193251, 37.615867],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        /// Добавляем свою иконку
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([54.193251, 37.615867], {
            hintContent: 'Промышленные полы: Выполняем работы по всей территории России',
            balloonContent: 'Промышленные полы: Выполняем работы по всей территории России',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [45, 45],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-19, 5],
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
                top: 10
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
    // Удалим с карты «Ползунок масштаба».
    myMap.controls.remove('zoomControl');
    // Удалим с карты «Пробки».
    myMap.controls.remove('trafficControl');
    // Удалим с карты «Слои».
    myMap.controls.remove('typeSelector');
    // Удалим с карты «Полный экран».
    myMap.controls.remove('fullscreenControl');
    // Удалим с карты «Поиск».
    myMap.controls.remove('searchControl');
    // Удалим с карты «GPS».
    myMap.controls.remove('geolocationControl');
});