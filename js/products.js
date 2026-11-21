
const products = [
    // =========================
    // КОМП'ЮТЕРИ
    // =========================
    {
        id: 1,
        name: "Ігровий ПК Gaming Pro RTX 4060",
        category: "pc",
        price: 38999,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900",
        description: "Потужний ігровий комп'ютер для сучасних ігор, роботи з графікою та повсякденних завдань. Відеокарта RTX 4060 підтримує сучасні графічні технології.",
        specifications: {
            "Процесор": "Intel Core i5-12400F",
            "Відеокарта": "NVIDIA GeForce RTX 4060 8GB",
            "Оперативна пам'ять": "16 GB DDR4",
            "Накопичувач": "SSD 1 TB",
            "Материнська плата": "B760",
            "Блок живлення": "650W"
        }
    },
    {
        id: 2,
        name: "Ігровий ПК Gaming Ultra RTX 4070",
        category: "pc",
        price: 56999,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900",
        description: "Продуктивний комп'ютер для вимогливих ігор, монтажу відео та роботи з великими проєктами. Оснащений сучасною відеокартою RTX 4070.",
        specifications: {
            "Процесор": "AMD Ryzen 7 5700X",
            "Відеокарта": "NVIDIA GeForce RTX 4070 12GB",
            "Оперативна пам'ять": "32 GB DDR4",
            "Накопичувач": "SSD 1 TB NVMe",
            "Материнська плата": "B550",
            "Блок живлення": "750W"
        }
    },
    {
        id: 3,
        name: "Офісний ПК Office Basic",
        category: "pc",
        price: 16999,
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=900",
        description: "Надійний комп'ютер для офісної роботи, навчання, перегляду відео та роботи з документами.",
        specifications: {
            "Процесор": "Intel Core i3-12100",
            "Відеокарта": "Intel UHD Graphics",
            "Оперативна пам'ять": "16 GB DDR4",
            "Накопичувач": "SSD 512 GB",
            "Материнська плата": "H610",
            "Блок живлення": "500W"
        }
    },
    {
        id: 4,
        name: "Комп'ютер Creator Workstation",
        category: "pc",
        price: 72999,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900",
        description: "Робоча станція для професійної роботи з графікою, відеомонтажу, 3D-моделювання та складних обчислень.",
        specifications: {
            "Процесор": "AMD Ryzen 9 7900X",
            "Відеокарта": "NVIDIA RTX 4070 SUPER 12GB",
            "Оперативна пам'ять": "64 GB DDR5",
            "Накопичувач": "SSD 2 TB NVMe",
            "Материнська плата": "X670",
            "Блок живлення": "850W"
        }
    },
    {
        id: 17,
        name: "Ігровий ПК Gaming Starter",
        category: "pc",
        price: 29999,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900",
        description: "Доступний ігровий комп'ютер для популярних кіберспортивних ігор та повсякденного використання. Має сучасний багатоядерний процесор і дискретну графіку.",
        specifications: {
            "Процесор": "AMD Ryzen 5 5600",
            "Відеокарта": "GeForce RTX 3060 12GB",
            "Оперативна пам'ять": "16 GB DDR4",
            "Накопичувач": "SSD 1 TB",
            "Материнська плата": "B550",
            "Блок живлення": "600W"
        }
    },
    {
        id: 18,
        name: "Ігровий ПК RGB Extreme",
        category: "pc",
        price: 64999,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900",
        description: "Стильний комп'ютер із підсвічуванням корпусу та високою продуктивністю. Підійде для сучасних ігор, стримінгу та роботи з графікою.",
        specifications: {
            "Процесор": "Intel Core i7-13700F",
            "Відеокарта": "GeForce RTX 4070 12GB",
            "Оперативна пам'ять": "32 GB DDR5",
            "Накопичувач": "SSD 2 TB",
            "Охолодження": "Рідинне",
            "Блок живлення": "750W"
        }
    },
    {
        id: 19,
        name: "Компактний ПК Mini Office",
        category: "pc",
        price: 21999,
        image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=900",
        description: "Компактний комп'ютер для офісу, навчання та домашніх завдань. Не займає багато місця на робочому столі.",
        specifications: {
            "Процесор": "Intel Core i5-12400",
            "Графіка": "Intel UHD Graphics",
            "Оперативна пам'ять": "16 GB DDR4",
            "Накопичувач": "SSD 512 GB",
            "Формат": "Mini Tower"
        }
    },
    {
        id: 20,
        name: "ПК Professional Work",
        category: "pc",
        price: 48999,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=900",
        description: "Універсальна робоча система для програмування, роботи з великими таблицями, багатозадачності та мультимедіа.",
        specifications: {
            "Процесор": "AMD Ryzen 7 7700",
            "Відеокарта": "Radeon Graphics",
            "Оперативна пам'ять": "32 GB DDR5",
            "Накопичувач": "SSD 1 TB",
            "Материнська плата": "B650",
            "Блок живлення": "650W"
        }
    },

    // =========================
    // НОУТБУКИ
    // =========================
    {
        id: 5,
        name: "Ноутбук ASUS TUF Gaming F15",
        category: "laptop",
        price: 42999,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=900",
        description: "Ігровий ноутбук із продуктивною графікою та дисплеєм із високою частотою оновлення. Підходить для ігор, навчання та роботи.",
        specifications: {
            "Процесор": "Intel Core i5",
            "Відеокарта": "NVIDIA GeForce RTX 4050",
            "Оперативна пам'ять": "16 GB",
            "Накопичувач": "SSD 512 GB",
            "Дисплей": "15.6 дюйма Full HD",
            "Операційна система": "Windows 11"
        }
    },
    {
        id: 6,
        name: "Ноутбук Lenovo IdeaPad 5",
        category: "laptop",
        price: 27999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
        description: "Універсальний ноутбук для навчання, офісної роботи та мультимедіа. Має компактний корпус і швидкий накопичувач.",
        specifications: {
            "Процесор": "AMD Ryzen 5",
            "Відеокарта": "AMD Radeon Graphics",
            "Оперативна пам'ять": "16 GB",
            "Накопичувач": "SSD 512 GB",
            "Дисплей": "15.6 дюйма",
            "Операційна система": "Windows 11"
        }
    },
    {
        id: 7,
        name: "Ноутбук HP Pavilion 15",
        category: "laptop",
        price: 31999,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900",
        description: "Практичний ноутбук для щоденного використання, навчальних програм, відеоконференцій та перегляду мультимедіа.",
        specifications: {
            "Процесор": "Intel Core i5",
            "Відеокарта": "Intel Iris Xe",
            "Оперативна пам'ять": "16 GB",
            "Накопичувач": "SSD 512 GB",
            "Дисплей": "15.6 дюйма Full HD",
            "Операційна система": "Windows 11"
        }
    },
    {
        id: 8,
        name: "Ноутбук Acer Nitro V 15",
        category: "laptop",
        price: 39999,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900",
        description: "Ноутбук для геймерів і користувачів, яким потрібна хороша графічна продуктивність. Підходить для навчання та творчих завдань.",
        specifications: {
            "Процесор": "Intel Core i5",
            "Відеокарта": "NVIDIA GeForce RTX 4050",
            "Оперативна пам'ять": "16 GB DDR5",
            "Накопичувач": "SSD 512 GB",
            "Дисплей": "15.6 дюйма",
            "Операційна система": "Windows 11"
        }
    },
    {
        id: 21,
        name: "Ноутбук ASUS VivoBook 15",
        category: "laptop",
        price: 24999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
        description: "Зручний ноутбук для студентів, офісних працівників і домашнього використання. Поєднує мобільність та достатню продуктивність для щоденних завдань.",
        specifications: {
            "Процесор": "Intel Core i5",
            "Оперативна пам'ять": "16 GB",
            "Накопичувач": "SSD 512 GB",
            "Дисплей": "15.6 дюйма Full HD",
            "Підключення": "USB, HDMI, Wi-Fi"
        }
    },
    {
        id: 22,
        name: "Ноутбук Lenovo Legion 5",
        category: "laptop",
        price: 52999,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=900",
        description: "Потужний ігровий ноутбук із продуктивною графікою та якісним дисплеєм. Підходить для сучасних ігор та професійних програм.",
        specifications: {
            "Процесор": "AMD Ryzen 7",
            "Відеокарта": "GeForce RTX 4060",
            "Оперативна пам'ять": "16 GB DDR5",
            "Накопичувач": "SSD 1 TB",
            "Дисплей": "16 дюймів",
            "Охолодження": "Активне"
        }
    },
    {
        id: 23,
        name: "Ноутбук Apple MacBook Air M2",
        category: "laptop",
        price: 45999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900",
        description: "Легкий ноутбук для роботи, навчання та творчості. Має компактний корпус, якісний дисплей і енергоефективний процесор Apple.",
        specifications: {
            "Процесор": "Apple M2",
            "Оперативна пам'ять": "8 GB",
            "Накопичувач": "SSD 256 GB",
            "Дисплей": "13.6 дюйма",
            "Операційна система": "macOS"
        }
    },
    {
        id: 24,
        name: "Ноутбук Dell Inspiron 16",
        category: "laptop",
        price: 34999,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=900",
        description: "Універсальний ноутбук із великим дисплеєм для роботи з документами, навчання та мультимедіа.",
        specifications: {
            "Процесор": "Intel Core i7",
            "Оперативна пам'ять": "16 GB",
            "Накопичувач": "SSD 512 GB",
            "Дисплей": "16 дюймів",
            "Графіка": "Intel Iris Xe"
        }
    },

    // =========================
    // КОМПЛЕКТУЮЧІ
    // =========================
    {
        id: 9,
        name: "Відеокарта GeForce RTX 4060",
        category: "parts",
        price: 14999,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=900",
        description: "Сучасна відеокарта для ігрових систем. Підтримує трасування променів та технології масштабування зображення.",
        specifications: {
            "Виробник": "NVIDIA",
            "Модель": "GeForce RTX 4060",
            "Відеопам'ять": "8 GB GDDR6",
            "Інтерфейс": "PCI Express 4.0",
            "Підключення": "DisplayPort, HDMI"
        }
    },
    {
        id: 10,
        name: "Відеокарта GeForce RTX 4070 SUPER",
        category: "parts",
        price: 29999,
        image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=900",
        description: "Потужна відеокарта для сучасних ігор, графічних програм і роботи з відео.",
        specifications: {
            "Виробник": "NVIDIA",
            "Модель": "GeForce RTX 4070 SUPER",
            "Відеопам'ять": "12 GB GDDR6X",
            "Інтерфейс": "PCI Express 4.0",
            "Підключення": "DisplayPort, HDMI"
        }
    },
    {
        id: 11,
        name: "Процесор Intel Core i5-12400F",
        category: "parts",
        price: 5499,
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=900",
        description: "Шестиядерний процесор для ігрових і робочих комп'ютерів. Забезпечує хорошу продуктивність у повсякденних завданнях.",
        specifications: {
            "Виробник": "Intel",
            "Модель": "Core i5-12400F",
            "Ядра": "6",
            "Потоки": "12",
            "Сокет": "LGA 1700",
            "Частота": "До 4.4 GHz"
        }
    },
    {
        id: 12,
        name: "Процесор AMD Ryzen 7 5700X",
        category: "parts",
        price: 6999,
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=900",
        description: "Восьмиядерний процесор для продуктивних домашніх систем. Підходить для ігор, багатозадачності та обробки відео.",
        specifications: {
            "Виробник": "AMD",
            "Модель": "Ryzen 7 5700X",
            "Ядра": "8",
            "Потоки": "16",
            "Сокет": "AM4",
            "Частота": "До 4.6 GHz"
        }
    },
    {
        id: 13,
        name: "Оперативна пам'ять Kingston Fury 16GB",
        category: "parts",
        price: 1899,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=900",
        description: "Модуль оперативної пам'яті для підвищення швидкодії комп'ютера та комфортної роботи з кількома програмами.",
        specifications: {
            "Виробник": "Kingston",
            "Обсяг": "16 GB",
            "Тип": "DDR4",
            "Частота": "3200 MHz",
            "Формат": "DIMM"
        }
    },
    {
        id: 14,
        name: "Оперативна пам'ять Corsair Vengeance 32GB",
        category: "parts",
        price: 3499,
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=900",
        description: "Комплект оперативної пам'яті для ігрових і робочих комп'ютерів. Забезпечує достатній обсяг пам'яті для багатозадачності.",
        specifications: {
            "Виробник": "Corsair",
            "Обсяг": "32 GB",
            "Тип": "DDR4",
            "Частота": "3600 MHz",
            "Формат": "DIMM"
        }
    },
    {
        id: 15,
        name: "SSD Samsung 990 EVO 1TB",
        category: "parts",
        price: 3999,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        description: "Швидкий твердотільний накопичувач для операційної системи, програм та ігор.",
        specifications: {
            "Виробник": "Samsung",
            "Обсяг": "1 TB",
            "Тип": "NVMe SSD",
            "Формат": "M.2",
            "Інтерфейс": "PCIe"
        }
    },
    {
        id: 16,
        name: "Блок живлення Corsair 750W",
        category: "parts",
        price: 4299,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900",
        description: "Блок живлення для сучасних ігрових і робочих систем. Забезпечує стабільне живлення компонентів.",
        specifications: {
            "Виробник": "Corsair",
            "Потужність": "750 W",
            "Формат": "ATX",
            "Охолодження": "Вентилятор",
            "Призначення": "ПК"
        }
    },
    {
        id: 25,
        name: "Материнська плата ASUS PRIME B550M",
        category: "parts",
        price: 4299,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        description: "Материнська плата для складання комп'ютера на платформі AMD AM4. Підтримує сучасні накопичувачі та оперативну пам'ять DDR4.",
        specifications: {
            "Виробник": "ASUS",
            "Сокет": "AM4",
            "Чипсет": "B550",
            "Пам'ять": "DDR4",
            "Формат": "Micro-ATX"
        }
    },
    {
        id: 26,
        name: "Материнська плата MSI PRO B760",
        category: "parts",
        price: 5999,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        description: "Материнська плата для систем на базі процесорів Intel. Підходить для домашніх ігрових та робочих комп'ютерів.",
        specifications: {
            "Виробник": "MSI",
            "Сокет": "LGA 1700",
            "Чипсет": "B760",
            "Пам'ять": "DDR5",
            "Формат": "ATX"
        }
    },
    {
        id: 27,
        name: "SSD Kingston NV2 1TB",
        category: "parts",
        price: 2899,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        description: "Компактний NVMe SSD для встановлення операційної системи, програм та зберігання файлів.",
        specifications: {
            "Виробник": "Kingston",
            "Обсяг": "1 TB",
            "Тип": "NVMe",
            "Формат": "M.2 2280",
            "Інтерфейс": "PCIe 4.0"
        }
    },
    {
        id: 28,
        name: "SSD Samsung 870 EVO 500GB",
        category: "parts",
        price: 2399,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        description: "Твердотільний накопичувач SATA для модернізації настільного комп'ютера або ноутбука.",
        specifications: {
            "Виробник": "Samsung",
            "Обсяг": "500 GB",
            "Тип": "SATA SSD",
            "Формат": "2.5 дюйма",
            "Інтерфейс": "SATA III"
        }
    },
    {
        id: 29,
        name: "Кулер DeepCool AK400",
        category: "parts",
        price: 1399,
        image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?w=900",
        description: "Повітряний кулер для охолодження процесора. Допомагає підтримувати робочу температуру системи.",
        specifications: {
            "Виробник": "DeepCool",
            "Тип": "Повітряне охолодження",
            "Вентилятор": "120 мм",
            "Сумісність": "Intel та AMD",
            "Підсвічування": "Залежить від версії"
        }
    },
    {
        id: 30,
        name: "Корпус Zalman S2",
        category: "parts",
        price: 2199,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=900",
        description: "Корпус для складання домашнього або ігрового ПК. Має просторий внутрішній простір для встановлення компонентів.",
        specifications: {
            "Виробник": "Zalman",
            "Формат": "Mid Tower",
            "Материнські плати": "ATX, Micro-ATX",
            "Охолодження": "Вентилятори",
            "Матеріал": "Сталь"
        }
    },

    // =========================
    // МОНІТОРИ ТА ПЕРИФЕРІЯ
    // =========================
    {
        id: 31,
        name: "Монітор Samsung 24 дюйми",
        category: "parts",
        price: 5999,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900",
        description: "Універсальний монітор для роботи, навчання та домашнього використання. Забезпечує чітке зображення для документів і мультимедіа.",
        specifications: {
            "Виробник": "Samsung",
            "Діагональ": "24 дюйми",
            "Роздільна здатність": "Full HD",
            "Тип матриці": "IPS",
            "Підключення": "HDMI"
        }
    },
    {
        id: 32,
        name: "Монітор LG UltraGear 27",
        category: "parts",
        price: 10999,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900",
        description: "Ігровий монітор із великим екраном і високою частотою оновлення. Підходить для динамічних ігор та мультимедіа.",
        specifications: {
            "Виробник": "LG",
            "Діагональ": "27 дюймів",
            "Роздільна здатність": "Full HD",
            "Тип матриці": "IPS",
            "Частота": "144 Hz"
        }
    },
    {
        id: 33,
        name: "Клавіатура Logitech G213",
        category: "parts",
        price: 2499,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900",
        description: "Зручна клавіатура для ігор і щоденної роботи. Має підсвічування та повнорозмірне розташування клавіш.",
        specifications: {
            "Виробник": "Logitech",
            "Модель": "G213",
            "Тип": "Мембранна",
            "Підключення": "USB",
            "Підсвічування": "RGB"
        }
    },
    {
        id: 34,
        name: "Мишка Logitech G502 HERO",
        category: "parts",
        price: 1999,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900",
        description: "Ігрова мишка з налаштуванням чутливості та додатковими кнопками. Підходить для ігор і продуктивної роботи.",
        specifications: {
            "Виробник": "Logitech",
            "Модель": "G502 HERO",
            "Тип": "Оптична",
            "Підключення": "USB",
            "Кнопки": "11"
        }
    },
    {
        id: 35,
        name: "Гарнітура HyperX Cloud II",
        category: "parts",
        price: 3299,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=900",
        description: "Гарнітура для спілкування, ігор та прослуховування музики. Має мікрофон і зручні амбушури.",
        specifications: {
            "Виробник": "HyperX",
            "Модель": "Cloud II",
            "Тип": "Повнорозмірна",
            "Мікрофон": "Знімний",
            "Підключення": "USB / 3.5 мм"
        }
    },
    {
        id: 36,
        name: "Вебкамера Logitech C920",
        category: "parts",
        price: 2999,
        image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=900",
        description: "Вебкамера для онлайн-навчання, відеоконференцій та спілкування. Підходить для домашнього робочого місця.",
        specifications: {
            "Виробник": "Logitech",
            "Модель": "C920",
            "Роздільна здатність": "Full HD 1080p",
            "Мікрофон": "Вбудований",
            "Підключення": "USB"
        }
    },
    {
        id: 37,
        name: "Килимок SteelSeries QcK",
        category: "parts",
        price: 799,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=900",
        description: "Килимок для мишки з тканинною поверхнею. Забезпечує комфортне переміщення мишки під час роботи та ігор.",
        specifications: {
            "Виробник": "SteelSeries",
            "Модель": "QcK",
            "Матеріал": "Тканина",
            "Основа": "Гумова",
            "Призначення": "Ігри та робота"
        }
    },
    {
        id: 38,
        name: "Колонки Logitech Z313",
        category: "parts",
        price: 1799,
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=900",
        description: "Компактна акустична система для комп'ютера. Підходить для прослуховування музики, перегляду відео та ігор.",
        specifications: {
            "Виробник": "Logitech",
            "Модель": "Z313",
            "Тип": "2.1",
            "Підключення": "3.5 мм",
            "Призначення": "Комп'ютерна акустика"
        }
    },
    {
        id: 39,
        name: "USB-флешка Kingston DataTraveler 128GB",
        category: "parts",
        price: 599,
        image: "https://images.unsplash.com/photo-1618410320928-25228d811631?w=900",
        description: "Компактний накопичувач для перенесення та зберігання документів, фотографій і навчальних матеріалів.",
        specifications: {
            "Виробник": "Kingston",
            "Обсяг": "128 GB",
            "Інтерфейс": "USB",
            "Призначення": "Зберігання файлів"
        }
    },
    {
        id: 40,
        name: "Зовнішній HDD Seagate 2TB",
        category: "parts",
        price: 3299,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=900",
        description: "Зовнішній жорсткий диск для резервного копіювання та зберігання великих обсягів інформації.",
        specifications: {
            "Виробник": "Seagate",
            "Обсяг": "2 TB",
            "Тип": "HDD",
            "Підключення": "USB 3.0",
            "Формат": "Зовнішній"
        }
    }
];
