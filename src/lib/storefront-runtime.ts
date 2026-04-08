import i18next from "i18next";

export type StorefrontLocale = "en" | "ru";
export type StorefrontCurrency = "USD" | "KGS";

export type StorefrontRuntimeState = {
  locale: StorefrontLocale;
  currency: StorefrontCurrency;
  usdExchangeRate: number;
};

const DEFAULT_RUNTIME_STATE: StorefrontRuntimeState = {
  locale: "en",
  currency: "KGS",
  usdExchangeRate: 89
};

let runtimeState: StorefrontRuntimeState = DEFAULT_RUNTIME_STATE;

const RU_DICTIONARY: Record<string, string> = {
  "Theme FAQ's": "FAQ по теме",
  "Need Help?": "Нужна помощь?",
  Home: "Главная",
  Pages: "Страницы",
  "Sale Page": "Страница распродажи",
  "Version 1": "Версия 1",
  "Version 2": "Версия 2",
  Vendor: "Продавцы",
  "All vendors": "Все продавцы",
  "Vendor store": "Магазин продавца",
  Shop: "Магазин",
  "Search product": "Поиск товара",
  "Single product": "Товар",
  Cart: "Корзина",
  Checkout: "Оформление",
  "Alternative Checkout": "Альтернативное оформление",
  Auth: "Авторизация",
  "Sign In": "Вход",
  "Sign Up": "Регистрация",
  "User Account": "Личный кабинет",
  DASHBOARD: "Панель",
  "ACCOUNT SETTINGS": "Настройки аккаунта",
  Orders: "Заказы",
  "Order List": "Список заказов",
  "Order Details": "Детали заказа",
  "Support Tickets": "Обращения",
  "Profile Info": "Информация профиля",
  Addresses: "Адреса",
  "Payment Methods": "Способы оплаты",
  Profile: "Профиль",
  "View Profile": "Просмотр профиля",
  "Edit Profile": "Редактировать профиль",
  Address: "Адреса",
  "Address List": "Список адресов",
  "Add Address": "Добавить адрес",
  "Support tickets": "Обращения",
  "All tickets": "Все обращения",
  "Ticket details": "Детали обращения",
  Wishlist: "Избранное",
  "Vendor Account": "Кабинет продавца",
  Dashboard: "Панель",
  Products: "Товары",
  "All products": "Все товары",
  "Add/Edit product": "Добавить/изменить товар",
  "Add New Product": "Добавить новый товар",
  "All orders": "Все заказы",
  "Track My Orders": "Отследить заказы",
  "Order details": "Детали заказа",
  "About Us": "О нас",
  "Customer Care": "Поддержка",
  "Contact Us": "Связаться с нами",
  Careers: "Карьера",
  "Our Stores": "Наши магазины",
  "Our Cares": "Наша забота",
  "Terms & Conditions": "Условия использования",
  "Privacy Policy": "Политика конфиденциальности",
  "Help Center": "Центр помощи",
  "How to Buy": "Как купить",
  "Track Your Order": "Отследить заказ",
  "Corporate & Bulk Purchasing": "Корпоративные и оптовые закупки",
  "Returns & Refunds": "Возвраты и возвраты средств",
  Categories: "Категории",
  "Top Categories": "Популярные категории",
  "Top Ratings": "Лучшие оценки",
  "Featured Brands": "Популярные бренды",
  "Big Discounts": "Большие скидки",
  "Flash Deals": "Суперпредложения",
  "New Arrivals": "Новые поступления",
  "More For You": "Еще для вас",
  "View all": "Смотреть все",
  "All Categories": "Все категории",
  Search: "Поиск",
  "Search and hit enter...": "Введите запрос и нажмите Enter...",
  "Searching for “{query}”": "Поиск: «{query}»",
  "results found": "результатов найдено",
  "Short by:": "Сортировка:",
  "Short by": "Сортировать",
  View: "Вид",
  "View:": "Вид:",
  "Brand:": "Бренд:",
  "Rated:": "Рейтинг:",
  "Stock Available": "В наличии",
  "Category": "Категория",
  Account: "Аккаунт",
  "Sold By:": "Продавец:",
  "Add to Cart": "В корзину",
  "Add To Cart": "В корзину",
  "Remove from Cart": "Убрать из корзины",
  "Checkout Now": "Оформить заказ",
  "View Cart": "Перейти в корзину",
  "Subtotal:": "Промежуточный итог:",
  "Total:": "Итого:",
  "Shipping:": "Доставка:",
  "Tax:": "Налог:",
  "Discount:": "Скидка:",
  "Add All to Cart": "Добавить все в корзину",
  "Back to Cart": "Назад в корзину",
  "Back to checkout details": "Назад к деталям оформления",
  "Proceed to Payment": "Перейти к оплате",
  "Save Changes": "Сохранить изменения",
  "Save product": "Сохранить товар",
  Description: "Описание",
  Stock: "Остаток",
  Tags: "Теги",
  Voucher: "Купон",
  "Additional Comments": "Дополнительные комментарии",
  Note: "Примечание",
  "Apply Voucher": "Применить купон",
  "Shipping Estimates": "Расчет доставки",
  Country: "Страна",
  "Enter your country": "Введите страну",
  "Select Country": "Выберите страну",
  "Bath Preparations": "Средства для ванны",
  "Bubble Bath": "Пена для ванны",
  "Bath Capsules": "Капсулы для ванны",
  Others: "Другие",
  "Eye Makeup Preparations": "Средства для макияжа глаз",
  Fragrance: "Парфюмерия",
  "Hair Preparations": "Средства для волос",
  State: "Регион",
  "Select State": "Выберите регион",
  "Zip Code": "Почтовый индекс",
  "Calculate Shipping": "Рассчитать доставку",
  "Welcome To Ecommerce": "Добро пожаловать в интернет-магазин",
  "Log in with email & password": "Войдите по email и паролю",
  "Email or Phone Number": "Email или телефон",
  Password: "Пароль",
  Login: "Войти",
  "Don’t have account?": "Нет аккаунта?",
  "Forgot your password?": "Забыли пароль?",
  "Reset It": "Сбросить",
  "Create Your Account": "Создайте аккаунт",
  "Please fill all forms to continued": "Заполните все поля, чтобы продолжить",
  "Full Name": "Полное имя",
  "Confirm Password": "Подтвердите пароль",
  "By signing up, you agree to": "Регистрируясь, вы соглашаетесь с",
  "Terms & Condition": "Условиями использования",
  "Already have account?": "Уже есть аккаунт?",
  "Create Account": "Создать аккаунт",
  "Name is required": "Укажите имя",
  "invalid email": "Некорректный email",
  "Email is required": "Укажите email",
  "Password is required": "Укажите пароль",
  "Please re-type password": "Повторите пароль",
  "Passwords must match": "Пароли должны совпадать",
  "You have to agree with our Terms and Conditions!": "Нужно согласиться с условиями использования!",
  "item": "товар",
  "items": "товаров",
  "Your shopping bag is empty. Start shopping": "Ваша корзина пуста. Начните покупки",
  "1 USD = {rate} KGS": "1 USD = {rate} KGS",
  "Brands": "Бренды",
  Shops: "Магазины",
  "View All Brands": "Посмотреть все бренды",
  Cars: "Автомобили",
  "View All Shops": "Посмотреть все магазины",
  "Select your language": "Выберите язык",
  "Select currency": "Выберите валюту",
  "Frequently Bought Together": "Часто покупают вместе",
  "Save {amount}": "Экономия {amount}",
  "Add to List": "В список",
  "Specification:": "Характеристики:",
  "Your order": "Ваш заказ",
  "Price Range": "Ценовой диапазон",
  "Ratings": "Рейтинги",
  "Colors": "Цвета",
  "On Sale": "Со скидкой",
  "In Stock": "В наличии",
  Featured: "Избранное",
  "Bonik is a marketplace for electronics, office equipment, and related services.":
    "Bonik - это маркетплейс электроники, офисной техники и сопутствующих услуг.",
  "minutes ago": "минут назад",
  "minute ago": "минуту назад",
  "hours ago": "часов назад",
  "hour ago": "час назад",
  "days ago": "дней назад",
  "day ago": "день назад",
  "months ago": "месяцев назад",
  "month ago": "месяц назад",
  "years ago": "лет назад",
  "year ago": "год назад",
  Back: "Назад",
  "Add New": "Добавить",
  "Add Product": "Добавить товар",
  "Edit Product": "Редактировать товар",
  "Add New Address": "Добавить новый адрес",
  "Edit Address": "Редактировать адрес",
  "Add New Payment Method": "Добавить новый способ оплаты",
  "Edit Payment Method": "Редактировать способ оплаты",
  "Payment Method": "Способ оплаты",
  "My Profile": "Мой профиль",
  "My Orders": "Мои заказы",
  "My Wish List": "Мой список желаний",
  "My Addresses": "Мои адреса",
  "Support Ticket": "Обращение",
  "Account Settings": "Настройки аккаунта",
  "Order #": "Заказ #",
  Status: "Статус",
  "Date purchased": "Дата покупки",
  Total: "Итого",
  Details: "Детали",
  Payment: "Оплата",
  Review: "Проверка",
  "Write a Review for this product": "Оставить отзыв о товаре",
  "Your Rating": "Ваша оценка",
  "Your Review": "Ваш отзыв",
  "Write a review here...": "Напишите отзыв здесь...",
  "Write a Review": "Оставить отзыв",
  "Estimated Delivery Date": "Ориентировочная дата доставки",
  Processing: "В обработке",
  Pending: "Ожидает",
  Delivered: "Доставлен",
  Cancelled: "Отменен",
  "Delivery Details": "Детали доставки",
  "Delivery Date": "Дата доставки",
  "Delivery Time": "Время доставки",
  "Delivery Address": "Адрес доставки",
  "Personal Details": "Личные данные",
  "Contact Information": "Контактная информация",
  "Payment Details": "Данные оплаты",
  "Saved Payment Methods": "Сохраненные способы оплаты",
  "9AM - 11AM": "9:00 - 11:00",
  "11AM - 1PM": "11:00 - 13:00",
  "3PM - 5PM": "15:00 - 17:00",
  "5PM - 7PM": "17:00 - 19:00",
  "I have a voucher.": "У меня есть купон.",
  "Enter voucher code here": "Введите код купона",
  Apply: "Применить",
  "Place Order": "Оформить заказ",
  "Pay with credit card": "Оплатить картой",
  "Pay with Paypal": "Оплатить через PayPal",
  "Cash On Delivery": "Оплата при получении",
  Submit: "Отправить",
  "Card Number": "Номер карты",
  "Exp Date": "Срок действия",
  "Exp. Date": "Срок действия",
  "Name on Card": "Имя на карте",
  "Paypal Email": "Email PayPal",
  CVC: "CVC",
  "Shipping Address": "Адрес доставки",
  "Billing Address": "Платежный адрес",
  "Same as shipping address": "Как адрес доставки",
  "Address 1": "Адрес 1",
  "Address 2": "Адрес 2",
  Company: "Компания",
  "Phone Number": "Номер телефона",
  "Email Address": "Эл. почта",
  "Order ID:": "ID заказа:",
  "Placed on:": "Размещен:",
  "Delivered on:": "Доставлен:",
  "Order Status": "Статус заказа",
  "Product properties:": "Характеристики товара:",
  "Customer's Note": "Примечание клиента",
  "Total Summary": "Итог по заказу",
  "Shipping fee:": "Стоимость доставки:",
  "Paid by Credit/Debit Card": "Оплачено кредитной/дебетовой картой",
  Sales: "Продажи",
  "Top Countries": "Топ стран",
  "Recommended Categories": "Рекомендуемые категории",
  "Related Products": "Похожие товары",
  "Also Available at": "Также доступно в",
  "Showing 1-9 of 1.3k Products": "Показано 1-9 из 1.3k товаров",
  "Get it on": "Скачайте в",
  "Download on the": "Скачать в",
  "Google Play": "Google Play",
  "App Store": "App Store",
  "Shop Now": "Купить сейчас",
  "Big Sale Upto 60% Off": "Большая распродажа до 60% скидки",
  "Handcrafted from genuine Italian Leather": "Изготовлено вручную из натуральной итальянской кожи",
  "SHOP NOW": "КУПИТЬ СЕЙЧАС",
  Fashion: "Мода",
  Accessories: "Аксессуары",
  Automotive: "Авто",
  "Baby Boy": "Мальчики",
  "Baby Girl": "Девочки",
  "Baby Toys": "Детские игрушки",
  Backpack: "Рюкзак",
  Bags: "Сумки",
  "Crossbody Bags": "Сумки через плечо",
  Bikes: "Велосипеды",
  Camera: "Камеры",
  Car: "Автомобили",
  Clothes: "Одежда",
  Desktop: "Настольные ПК",
  Electronics: "Электроника",
  Gifts: "Подарки",
  Groceries: "Продукты",
  "Health & Beauty": "Здоровье и красота",
  "Home & Garden": "Дом и сад",
  Laptop: "Ноутбуки",
  Man: "Мужчины",
  "Man Clothes": "Мужская одежда",
  Music: "Музыка",
  Pant: "Брюки",
  Pets: "Зоотовары",
  Shirt: "Рубашка",
  Shoes: "Обувь",
  "Side Bags": "Сумки через плечо",
  Slides: "Шлепанцы",
  "T- shirt": "Футболка",
  Toys: "Игрушки",
  Underwear: "Нижнее белье",
  Woman: "Женщины",
  "Woman Clothes": "Женская одежда",
  Gadget: "Гаджеты",
  Belt: "Ремень",
  Hat: "Шляпа",
  Watches: "Часы",
  Sunglasses: "Солнцезащитные очки",
  Sneakers: "Кроссовки",
  Sandals: "Сандалии",
  Formal: "Официальные",
  Casual: "Повседневные",
  Office: "Офис",
  "Office 2": "Офис 2",
  Primary: "Основной",
  Secondary: "Дополнительный",
  "Earnings (before taxes)": "Доходы (до налогов)",
  "after associated vendor fees": "после комиссий продавцов",
  "Your balance": "Ваш баланс",
  "Will be processed on Feb 15, 2021": "Будет обработано 15 фев 2021",
  "Pending Orders": "Ожидающие заказы",
  "7/3/2020 - 8/1/2020": "7/3/2020 - 8/1/2020",
  "United States": "Соединенные Штаты",
  "United Kingdom": "Великобритания",
  Canada: "Канада",
  India: "Индия",
  Jordan: "Иордания",
  Brazil: "Бразилия",
  "All Orders": "Все заказы",
  "Awaiting Payments": "Ожидают оплату",
  "Awaiting Shipment": "Ожидают отправку",
  "Awaiting Delivery": "Ожидают доставку",
  "Balance:": "Баланс:",
  "SILVER USER": "СЕРЕБРЯНЫЙ ПОЛЬЗОВАТЕЛЬ",
  "First Name": "Имя",
  "Last Name": "Фамилия",
  Email: "Эл. почта",
  Phone: "Телефон",
  "Birth Date": "Дата рождения",
  "Birth date": "Дата рождения",
  Name: "Имя",
  Street: "Улица",
  City: "Город",
  "Select your country": "Выберите страну",
  "Enter your first name": "Введите имя",
  "Enter your last name": "Введите фамилию",
  "Enter your email": "Введите email",
  "Enter your phone number": "Введите номер телефона",
  "Enter your city": "Введите город",
  "Enter your street": "Введите улицу",
  "Write your message here...": "Напишите сообщение здесь...",
  "Post message": "Отправить сообщение",
  "Select category": "Выберите категорию",
  "Regular price": "Обычная цена",
  "Regular Price": "Обычная цена",
  "Sale Price": "Цена со скидкой",
  "Showing {start}-{end} of {total} products": "Показано {start}-{end} из {total} товаров"
};

const i18n: any = i18next.createInstance();

i18n.init({
  resources: {
    en: { common: {} },
    ru: { common: RU_DICTIONARY }
  },
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common"],
  interpolation: {
    escapeValue: false,
    prefix: "{",
    suffix: "}"
  },
  keySeparator: false,
  nsSeparator: false,
  returnNull: false,
  returnEmptyString: false,
  initImmediate: false
});

function normalizeLocale(value?: string | null): StorefrontLocale {
  return String(value || "")
    .trim()
    .toLowerCase()
    .startsWith("ru")
    ? "ru"
    : "en";
}

function normalizeCurrency(value?: string | null): StorefrontCurrency {
  return String(value || "")
    .trim()
    .toUpperCase() === "USD"
    ? "USD"
    : "KGS";
}

function normalizeUsdExchangeRate(value?: number | string | null) {
  const parsed =
    typeof value === "number"
      ? value
      : typeof value === "string"
        ? Number(value.replace(",", "."))
        : NaN;
  return Number.isFinite(parsed) && parsed > 0 ? Number(parsed.toFixed(2)) : 89;
}

function getLocaleTag(locale: StorefrontLocale) {
  return locale === "ru" ? "ru-RU" : "en-US";
}

export function getStorefrontRuntimeState() {
  return runtimeState;
}

export function setStorefrontRuntimeState(
  next: Partial<StorefrontRuntimeState>,
) {
  runtimeState = {
    locale: normalizeLocale(next.locale ?? runtimeState.locale),
    currency: normalizeCurrency(next.currency ?? runtimeState.currency),
    usdExchangeRate: normalizeUsdExchangeRate(
      next.usdExchangeRate ?? runtimeState.usdExchangeRate,
    ),
  };
  return runtimeState;
}

export function resolveStorefrontLocale(value?: string | null) {
  return normalizeLocale(value);
}

export function resolveStorefrontCurrency(value?: string | null) {
  return normalizeCurrency(value);
}

export function formatExchangeRate(rate?: number) {
  const current = getStorefrontRuntimeState();
  const normalizedRate = normalizeUsdExchangeRate(rate ?? current.usdExchangeRate);
  return new Intl.NumberFormat(getLocaleTag(current.locale), {
    maximumFractionDigits: 2,
  }).format(normalizedRate);
}

export function t(text: string, params?: Record<string, string | number>) {
  const current = getStorefrontRuntimeState();
  const fixedT = i18n.getFixedT(current.locale, "common");
  return String(fixedT(text, params as never));
}

export function currency(price: number, fraction: number = 2) {
  const current = getStorefrontRuntimeState();
  const normalizedPrice = Number(price || 0);
  const divisor =
    current.currency === "USD"
      ? Math.max(normalizeUsdExchangeRate(current.usdExchangeRate), 1)
      : 1;
  const displayPrice = normalizedPrice / divisor;

  return new Intl.NumberFormat(getLocaleTag(current.locale), {
    style: "currency",
    currency: current.currency,
    maximumFractionDigits: fraction,
    minimumFractionDigits: fraction,
  }).format(displayPrice);
}

export function formatRelativeTime(value: number, unit: "minute" | "hour" | "day" | "month" | "year") {
  const current = getStorefrontRuntimeState();
  const suffix =
    current.locale === "ru"
      ? {
          minute: value === 1 ? "минуту назад" : "минут назад",
          hour: value === 1 ? "час назад" : "часов назад",
          day: value === 1 ? "день назад" : "дней назад",
          month: value === 1 ? "месяц назад" : "месяцев назад",
          year: value === 1 ? "год назад" : "лет назад",
        }[unit]
      : {
          minute: value === 1 ? "minute ago" : "minutes ago",
          hour: value === 1 ? "hour ago" : "hours ago",
          day: value === 1 ? "day ago" : "days ago",
          month: value === 1 ? "month ago" : "months ago",
          year: value === 1 ? "year ago" : "years ago",
        }[unit];

  return `${value} ${suffix}`;
}

export { normalizeLocale, normalizeCurrency, normalizeUsdExchangeRate };
