ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.927004, 30.414413],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // ������ ����� �����������.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([59.927004, 30.414413], {
            hintContent: '������� ����: ������� ����� � �������',
            balloonContent: '������� ����: ������� ����� � �������',
        }, {
            // �����.
            // ���������� ������� ������ ��� ������.
            iconLayout: 'default#imageWithContent',
            // ��� ����������� ������ �����.
            iconImageHref: 'img/logo-map-w.png',
            // ������� �����.
            iconImageSize: [38, 38],
            // �������� ������ �������� ���� ������ ������������
            // � "�����" (����� ��������).
            iconImageOffset: [-19, -19],
            // �������� ���� � ���������� ������������ ���� � ���������.
            iconContentOffset: [15, 15],
            // ����� �����������.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);

    var events = ['scrollZoom','drag','dblClickZoom','multiTouch'];

    myMap.behaviors.disable(events);

    var activeMapButton = new ymaps.control.Button({
        data: {
            content: "���. �����"
        },
        options: {
            position: {
                right: 10,
                top: 450
            },
            maxWidth: [200]
        }
    });

    activeMapButton.events.add('click', function (e) {

        var target = e.get('target');
        var text = '���. �����';

        if ( target.data.get('content') == text ) {
            text = '�����. �����';
            myMap.behaviors.enable(events);
        } else {
            myMap.behaviors.disable(events);
        }

        target.data.set('content', text);

        t = target;

    });

});