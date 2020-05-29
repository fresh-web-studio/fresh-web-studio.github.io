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
            iconImageSize: [41, 41],
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
                top: 50
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