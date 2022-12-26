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
                const first = document.getElementById("first_point");
                const second = document.getElementById("second_point");
                first.value = activeRoute.properties.get("boundedBy")[0];
                second.value = activeRoute.properties.get("boundedBy")[1];
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