/*
  بيانات المينيو — عدّل الأسعار والأصناف من هون بس.
  - price: سعر واحد
  - prices: سعر لكل حجم بنفس ترتيب sizes للقسم، و null للحجم الي مش موجود
  - art: اسم الرسمة من مجلد images/illustrations (بدون .svg)
  - img: (اختياري) صورة حقيقية للصنف، مثلاً "images/dishes/crepe-lotus.jpg" — بتحل محل الرسمة وبتكبّر الكرت
*/
window.MENU = {
  tabs: [
    { id: "food", label: "أكل", icon: "i-sandwich" },
    { id: "drinks", label: "مشروبات", icon: "i-cup" }
  ],
  sections: [
    {
      id: "sandwiches", tab: "food", ar: "ساندويشات", en: "Sandwiches", icon: "i-sandwich", type: "sandwich",
      items: [
        { ar: "ساندويش بوراتا", art: "sandwich-burrata", ingredients: ["بوراتا", "طماطم كرزية", "جرجير", "ريحان طازج", "بيستو", "زيت زيتون", "ملح وفلفل أسود"] },
        { ar: "ساندويش صدر وز", art: "sandwich-duck", ingredients: ["صدر وز مدخن", "جرجير", "تفاح أخضر", "جبنة كريمية خفيفة", "خردل ديجون", "عسل خفيف"] },
        { ar: "ساندويش صدر حبش مدخن", art: "sandwich-turkey", ingredients: ["صدر حبش مدخن", "جرجير", "جبنة موزاريلا", "طماطم", "خيار", "خردل ديجون", "صوص زبادي خفيف"] },
        { ar: "ساندويش تونا", art: "sandwich-tuna", ingredients: ["تونا", "خس", "ذرة", "خيار", "بصل أحمر", "طماطم", "صوص ليمون", "فلفل أسود"] },
        { ar: "ساندويش حلومي بيستو", art: "sandwich-halloumi", ingredients: ["حلومي مشوي", "بيستو", "جرجير", "طماطم مجففة", "طماطم كرزية", "زيت زيتون", "فلفل أسود"] },
        { ar: "ساندويش جبنة بلغارية", art: "sandwich-bulgarian", ingredients: ["جبنة بلغارية", "طماطم", "خيار", "جرجير", "زيتون أسود", "زعتر", "زيت زيتون"] },
        { ar: "ساندويش سالمون تارتار", art: "toast-salmon", ingredients: ["سلمون تارتار", "أفوكادو", "خيار", "شبت طازج", "كبر", "بصل أحمر مفروم ناعم", "عصير ليمون", "زيت زيتون", "فلفل أسود", "صوص خردل ديجون"] },
        { ar: "ساندويش أفوكادو", art: "toast-avocado", ingredients: ["أفوكادو", "بيض مسلوق", "جرجير", "طماطم كرزية", "بذور الشمس", "ليمون", "زيت زيتون", "فلفل أسود"] }
      ]
    },
    {
      id: "crepe", tab: "food", ar: "كريب", en: "Crepe", icon: "i-crepe", type: "single", art: "crepe",
      items: [
        { ar: "كريب ساندويش", en: "Crepe Sandwich", price: 12 },
        { ar: "كريب", en: "Crepe", price: 20 },
        { ar: "كريب مقطع", en: "Sliced Crepe", price: 25 },
        { ar: "كريب كندر", en: "Crepe Kinder", price: 25 },
        { ar: "كريب أوريو", en: "Crepe Oreo", price: 25 },
        { ar: "كريب لوتس", en: "Crepe Lotus", price: 25 },
        { ar: "كريب بستاشيو", en: "Crepe Pistachio", price: 25 },
        { ar: "كريب بون بون", en: "Crepe Bon Bon", price: 25 },
        { ar: "كريب الفصول الأربعة", en: "Crepe Four Seasons", price: 28 },
        { ar: "كريب فخفخينا (فواكه + آيس كريم)", en: "Crepe Fakhfakhena – Fruit & Ice Cream", price: 38 },
        { ar: "كريب دبي", en: "Crepe Dubai", price: 35 }
      ]
    },
    {
      id: "pancake", tab: "food", ar: "بان كيك", en: "Pancake", icon: "i-pancake", type: "single", art: "pancake",
      items: [
        { ar: "بان كيك", en: "Pancake", price: 25 },
        { ar: "بان كيك الفصول الأربعة", en: "Pancake Four Seasons", price: 30 },
        { ar: "بان كيك فخفخينا (فواكه + آيس كريم)", en: "Pancake Fakhfakhena – Fruit & Ice Cream", price: 38 }
      ]
    },
    {
      id: "waffle", tab: "food", ar: "وافل", en: "Waffle", icon: "i-waffle", type: "single", art: "waffle",
      items: [
        { ar: "وافل", en: "Waffle", price: 25 },
        { ar: "وافل بلجيكي (عسل + آيس كريم)", en: "Belgian Waffle – Honey & Ice Cream", price: 25 },
        { ar: "وافل الفصول الأربعة", en: "Waffle Four Seasons", price: 30 },
        { ar: "وافل فخفخينا (فواكه + آيس كريم)", en: "Waffle Fakhfakhena – Fruit & Ice Cream", price: 35 },
        { ar: "أصابع وافل", en: "Waffle Fingers", price: 8, note: "للإصبع الواحد" }
      ]
    },
    {
      id: "fashafish", tab: "food", ar: "فشافيش وميني بان كيك", en: "Fashafish & Mini Pancake", icon: "i-pancake", type: "sized",
      sizes: ["S", "M", "L"],
      items: [
        { ar: "فشافيش", art: "fashafish", en: "Fashafish", prices: [10, 18, 30] },
        { ar: "ميني بان كيك", art: "mini-pancake", en: "Mini Pancake", prices: [10, 15, 30] }
      ]
    },
    {
      id: "hot", tab: "drinks", ar: "مشروبات ساخنة", en: "Hot Drinks", icon: "i-cup", type: "sized",
      sizes: ["M", "L"],
      items: [
        { en: "Espresso", art: "espresso", prices: [7, 10] },
        { en: "Espresso Macchiato", art: "macchiato", prices: [7, 10] },
        { en: "Americano", art: "americano", prices: [8, 12] },
        { en: "Cortado", art: "cortado", prices: [8, 12] },
        { en: "Flat White", art: "flat-white", prices: [8, 12] },
        { en: "Cappuccino", art: "cappuccino", prices: [8, 12] },
        { en: "Latte", art: "latte", prices: [8, 12] },
        { en: "Dark Mocha", art: "mocha", prices: [10, 14] },
        { en: "White Mocha", art: "white-mocha", prices: [10, 14] },
        { en: "Spanish Latte", art: "spanish-latte", prices: [10, 14] },
        { en: "Pistachio Latte", art: "pistachio-latte", prices: [10, 14] },
        { en: "Caramel Latte", art: "caramel-latte", prices: [10, 14] },
        { en: "Salted Caramel", art: "caramel-latte", prices: [10, 14] },
        { en: "Hot Chocolate", art: "hot-chocolate", prices: [10, 14] }
      ]
    },
    {
      id: "iced", tab: "drinks", ar: "مشروبات باردة", en: "Iced Drinks", icon: "i-glass", type: "sized",
      sizes: ["M", "L"],
      items: [
        { en: "Iced Latte", art: "iced-latte", prices: [10, 14] },
        { en: "Iced Americano", art: "iced-americano", prices: [10, 14] },
        { en: "Iced Spanish Latte", art: "iced-spanish", prices: [12, 16] },
        { en: "Iced Caramel Latte", art: "iced-caramel", prices: [10, 14] },
        { en: "Iced Salted Caramel Latte", art: "iced-salted-caramel", prices: [12, 16] },
        { en: "Iced Mocha", art: "iced-mocha", prices: [12, 16] },
        { en: "Iced White Mocha", art: "iced-white-mocha", prices: [12, 16] },
        { en: "Iced Pistachio Latte", art: "iced-pistachio", prices: [12, 16] },
        { en: "Iced Vanilla Latte", art: "iced-vanilla", prices: [12, 16] },
        { en: "Iced Coffee", art: "iced-coffee", prices: [10, 14] },
        { en: "Iced Coffee Diet", art: "iced-coffee", prices: [12, 16] }
      ]
    },
    {
      id: "fresh", tab: "drinks", ar: "فريش", en: "Fresh Juice", icon: "i-juice", type: "sized",
      sizes: ["M", "L", "XL"],
      items: [
        { ar: "جزر", art: "juice-carrot", prices: [8, 10, 13] },
        { ar: "تفاح", art: "juice-apple", prices: [10, 12, 15] },
        { ar: "برتقال", art: "juice-orange", prices: [10, 12, 15] },
        { ar: "جريب فروت", art: "juice-grapefruit", prices: [10, 12, 15] },
        { ar: "ليمون", art: "juice-lemon", prices: [10, 12, 15] },
        { ar: "ليمون ونعنع", art: "juice-lemon-mint", prices: [10, 12, 15] },
        { ar: "رمان", art: "juice-pomegranate", prices: [12, 14, 18] },
        { ar: "فراولة", art: "juice-strawberry", prices: [14, 16, 20] },
        { ar: "ليمون فراولة", art: "juice-lemon-strawberry", prices: [14, 16, 20] },
        { ar: "برتقال فراولة", art: "juice-orange-strawberry", prices: [14, 16, 20] },
        { ar: "منجا", art: "juice-mango", prices: [14, 16, 20] },
        { ar: "أناناس", art: "juice-pineapple", prices: [14, 16, 20] },
        { ar: "منجا وأناناس", art: "juice-mango-pineapple", prices: [14, 16, 20] },
        { ar: "مكس مس فلورا", art: "juice-miss-flora", prices: [15, 17, 22] }
      ]
    },
    {
      id: "smoothie", tab: "drinks", ar: "سموذي صحي", en: "Healthy Smoothies", icon: "i-glass", type: "sized",
      sizes: ["M", "L", "XL"],
      items: [
        { ar: "دايت", art: "smoothie-diet", prices: [14, 16, 20] },
        { ar: "جيم", art: "smoothie-gym", prices: [14, 16, 20] },
        { ar: "بريك فاست", art: "smoothie-breakfast", prices: [14, 16, 20] },
        { ar: "بروتين", art: "smoothie-protein", prices: [null, 16, 20] }
      ]
    },
    {
      id: "mojito", tab: "drinks", ar: "موهيتو", en: "Mojito", icon: "i-mojito", type: "mojito",
      price: 15,
      items: [
        { ar: "كلاسيك", art: "mojito-classic" }, { ar: "بلوبيري", art: "mojito-blueberry" }, { ar: "مكس بيري", art: "mojito-mixed-berry" }, { ar: "فراولة", art: "mojito-strawberry" }, { ar: "بطيخ", art: "mojito-watermelon" },
        { ar: "كيوي", art: "mojito-kiwi" }, { ar: "تفاح", art: "mojito-apple" }, { ar: "مس فلورا", art: "mojito-miss-flora" }, { ar: "مانجا", art: "mojito-mango" }, { ar: "مكس موهيتو حسب الطلب", art: "mojito-mix" }
      ]
    },
    {
      id: "fakhfakhina", tab: "drinks", ar: "فخفخينا", en: "Fakhfakhina Cocktails", icon: "i-cocktail", type: "sized",
      signature: true,
      sizes: ["M", "L", "XL"],
      items: [
        { ar: "كوكتيل", art: "fakhfakhina", prices: [10, 13, 17] },
        { ar: "كاشو وعسل", art: "fakh-cashew-honey", prices: [14, 16, 20] },
        { ar: "قشطة وعسل", art: "fakh-cream-honey", prices: [12, 14, 18] },
        { ar: "إكسترا", art: "fakh-extra", prices: [14, 16, 20] },
        { ar: "قشطة كاشو عسل", art: "fakh-cream-cashew-honey", prices: [16, 20, 24] },
        { ar: "أفوكادو", art: "fakh-avocado", prices: [14, 16, 20] },
        { ar: "مصري", art: "fakh-masri", prices: [14, 16, 20] },
        { ar: "موز وحليب", art: "banana-milk", prices: [10, 12, 15] },
        { ar: "موز وحليب فراولة", art: "banana-strawberry", prices: [12, 15, 18] },
        { ar: "موز وحليب تمر", art: "banana-date", prices: [12, 15, 18] },
        { ar: "موز وحليب ومنجا", art: "banana-mango", prices: [12, 16, 20] },
        { ar: "موز وحليب وعسل", art: "banana-honey", prices: [12, 16, 20] }
      ]
    },
    {
      id: "milkshake", tab: "drinks", ar: "ميلك شيك", en: "Milkshake", icon: "i-milkshake", type: "sized",
      sizes: ["M", "L", "XL"],
      items: [
        { ar: "فانيلا وشوكولاتة", art: "shake-vanilla-choc", prices: [14, 16, 20] },
        { ar: "أوريو", art: "milkshake-oreo", prices: [14, 16, 20] },
        { ar: "جلاكسي", art: "shake-galaxy", prices: [14, 16, 20] },
        { ar: "لوتس", art: "shake-lotus", prices: [14, 16, 20] },
        { ar: "كندر", art: "shake-kinder", prices: [14, 16, 20] },
        { ar: "سنيكرز", art: "shake-snickers", prices: [14, 16, 20] },
        { ar: "نوتيلا", art: "shake-nutella", prices: [14, 16, 20] },
        { ar: "بون بون", art: "shake-bonbon", prices: [14, 16, 20] },
        { ar: "بستاشيو", art: "shake-pistachio", prices: [14, 16, 20] },
        { ar: "مكس بيري", art: "shake-mixed-berry", prices: [14, 16, 20] },
        { ar: "بلوبيري", art: "shake-blueberry", prices: [14, 16, 20] },
        { ar: "بازوكا", art: "shake-bazooka", prices: [12, 16, 20] },
        { ar: "كراميل", art: "shake-caramel", prices: [14, 16, 20] },
        { ar: "ليمون ونعنع", art: "shake-lemon-mint", prices: [14, 16, 20] },
        { ar: "فراولة منجا", art: "shake-strawberry-mango", prices: [14, 16, 20] },
        { ar: "بينا كولادا", art: "shake-pina-colada", prices: [14, 16, 20] },
        { ar: "الوصفة المميزة", art: "shake-special", en: "Special Recipe", prices: [14, 16, 20], special: true }
      ]
    }
  ]
};
