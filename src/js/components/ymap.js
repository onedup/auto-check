initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer} = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("contacts__map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [37.43003999999997, 55.82614406891907],

        // Уровень масштабирования
        zoom: 17,
      },
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}
