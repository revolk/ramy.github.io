/* eslint-disable */
import keys from "../../config/keys"; // تأكد من أن المسار صحيح

export const displayMap = locations => {
  // تعيين توكن Mapbox
  mapboxgl.accessToken = keys.mapBoxAccessToken;

  // إنشاء خريطة جديدة
  const map = new mapboxgl.Map({
    container: "map", // اسم عنصر HTML الذي سيتم عرض الخريطة فيه
    style: "mapbox://styles/rasedmia/ck3cmgrsx1qa61cpiuonp0dja", // نمط الخريطة
    scrollZoom: false // تعطيل التكبير عند التمرير
  });

  // إعداد الحدود لتحديد نطاق العرض
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // إنشاء علامة
    const el = document.createElement("div");
    el.className = "marker"; // إضافة فئة CSS للعلامة

    // إضافة العلامة إلى الخريطة
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom" // تحديد نقطة الربط للعلامة
    })
      .setLngLat(loc.coordinates) // تعيين إحداثيات العلامة
      .addTo(map); // إضافة العلامة إلى الخريطة

    // إضافة نافذة منبثقة (popup) للعلامة
    new mapboxgl.Popup({
      offset: 30 // تحديد الإزاحة للنافذة المنبثقة
    })
      .setLngLat(loc.coordinates) // تعيين إحداثيات النافذة المنبثقة
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`) // محتوى النافذة المنبثقة
      .addTo(map); // إضافة النافذة المنبثقة إلى الخريطة

    // توسيع حدود الخريطة لتشمل الموقع الحالي
    bounds.extend(loc.coordinates);
  });

  // ضبط حدود الخريطة
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
