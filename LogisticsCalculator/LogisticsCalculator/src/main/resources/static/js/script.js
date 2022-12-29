function init(){
    const myMap = new ymaps.Map("map", {
        center: [53.9, 27.64],
        zoom: 9,
    });

    const routePanelControl = new ymaps.control.RoutePanel({
        options: {
            showHeader: true,
            title: 'Расчёт доставки'
        }
    })
    myMap.controls.add(routePanelControl);


    const multiRoutePromise = routePanelControl.routePanel.getRouteAsync();

    multiRoutePromise.then(function(multiRoute) {
        // Подписка на событие обновления мультимаршрута.
        multiRoute.model.events.add('requestsuccess', function() {
            // Получение ссылки на активный маршрут.
            const activeRoute = multiRoute.getActiveRoute();
            // Когда панель добавляется на карту, она
            // создает маршрут с изначально пустой геометрией.
            // Только когда пользователь выберет начальную и конечную точки,
            // маршрут будет перестроен с непустой геометрией.
            // Поэтому для избежания ошибки нужно добавить проверку,
            // что маршрут не пустой.
            if (activeRoute) {
                // Вывод информации об активном маршруте.
                const first_input = document.getElementById("first_point");
                const second_input = document.getElementById("second_point");
                //Координаты
                const cords = activeRoute.properties.get("boundedBy");
                //Обратный геокодинг
                //Первая точка
                let myReverseGeocoder = ymaps.geocode(cords[0]);
                myReverseGeocoder.then( (res) => {
                    second_input.value = res.geoObjects.get(0).properties.get('text');
                })
                //Вторая точка
                myReverseGeocoder = ymaps.geocode(cords[1]);
                myReverseGeocoder.then( (res) => {
                    first_input.value = res.geoObjects.get(0).properties.get('text');
                })

                console.log("Длина: " + activeRoute.properties.get("distance").text);
                console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
                console.log(activeRoute.properties);
            }

        });
    }, function (err) {
        console.log(err);
    });
}

ymaps.ready(init);