import type { Locale } from "@/lib/i18n";

export type ServiceItemRow = {
  price: string;
  nameBg: string;
  nameEn: string;
};

export type ServiceCategoryDef = {
  slug: string;
  emoji: string;
  titleBg: string;
  titleEn: string;
  items: ServiceItemRow[];
};

export const SERVICE_CATEGORIES: ServiceCategoryDef[] = [
  {
    slug: "maintenance",
    emoji: "🔧",
    titleBg: "Обслужване",
    titleEn: "Servicing",
    items: [
      {
        nameBg: "Масло + маслен филтър",
        nameEn: "Oil + oil filter",
        price: "€50 – €90",
      },
      {
        nameBg: "Пълно обслужване",
        nameEn: "Full service",
        price: "€80 – €130",
      },
      {
        nameBg: "Смяна на горивен филтър",
        nameEn: "Fuel filter replacement",
        price: "€30 – €50",
      },
      {
        nameBg: "Проверка и доливане на течности",
        nameEn: "Fluid check & top-up",
        price: "€15 – €25",
      },
      {
        nameBg: "Смяна на ангренажен комплект",
        nameEn: "Timing belt kit replacement",
        price: "€300 – €800",
      },
      {
        nameBg: "Смяна на пистов ремък",
        nameEn: "Auxiliary belt replacement",
        price: "€80 – €150",
      },
      {
        nameBg: "Смяна на водна помпа",
        nameEn: "Water pump replacement",
        price: "€120 – €250",
      },
      {
        nameBg: "Смяна на свещи (бензин)",
        nameEn: "Spark plugs (petrol)",
        price: "€50 – €90",
      },
      {
        nameBg: "Смяна на подгревни свещи",
        nameEn: "Glow plugs replacement",
        price: "€60 – €120",
      },
    ],
  },
  {
    slug: "brakes",
    emoji: "🛑",
    titleBg: "Спирачна система",
    titleEn: "Braking system",
    items: [
      { nameBg: "Накладки", nameEn: "Brake pads", price: "€50 – €90" },
      { nameBg: "Дискове", nameEn: "Brake discs", price: "€60 – €90" },
      {
        nameBg: "Дискове + накладки",
        nameEn: "Discs + pads",
        price: "€110 – €170",
      },
      {
        nameBg: "Спирачна течност",
        nameEn: "Brake fluid",
        price: "€50 – €80",
      },
      {
        nameBg: "Ревизия на спирачки",
        nameEn: "Brake inspection / service",
        price: "€70 – €130",
      },
      {
        nameBg: "Смяна на спирачни апарати",
        nameEn: "Brake caliper replacement",
        price: "€70 – €120",
      },
      {
        nameBg: "Смяна на ABS датчик",
        nameEn: "ABS sensor replacement",
        price: "€40 – €80",
      },
    ],
  },
  {
    slug: "suspension",
    emoji: "⚙️",
    titleBg: "Ходова част",
    titleEn: "Suspension",
    items: [
      { nameBg: "Биалетка", nameEn: "Track rod end", price: "€30 – €50" },
      { nameBg: "Шарнир", nameEn: "Ball joint", price: "€35 – €60" },
      {
        nameBg: "Амортисьор (бр.)",
        nameEn: "Shock absorber (ea.)",
        price: "€90 – €150",
      },
      {
        nameBg: "Смяна на носач",
        nameEn: "Control arm replacement",
        price: "€60 – €90",
      },
      {
        nameBg: "Смяна на лагер",
        nameEn: "Bearing replacement",
        price: "€45 – €70",
      },
      {
        nameBg: "Смяна на тампони",
        nameEn: "Bush replacement",
        price: "€50 – €120",
      },
      {
        nameBg: "Кормилни накрайници",
        nameEn: "Tie rod ends",
        price: "€40 – €80",
      },
      {
        nameBg: "Кормилна рейка",
        nameEn: "Steering rack",
        price: "€200 – €450",
      },
      {
        nameBg: "Комплект шарнири",
        nameEn: "Ball joint set",
        price: "€80 – €150",
      },
    ],
  },
  {
    slug: "engine-repair",
    emoji: "🔩",
    titleBg: "Двигател / ремонти",
    titleEn: "Engine / repairs",
    items: [
      {
        nameBg: "Смяна на съединител",
        nameEn: "Clutch replacement",
        price: "€300 – €700",
      },
      {
        nameBg: "Смяна на турбина",
        nameEn: "Turbo replacement",
        price: "€300 – €600",
      },
      {
        nameBg: "Гарнитура глава",
        nameEn: "Cylinder head gasket",
        price: "€400 – €950",
      },
      {
        nameBg: "Смяна на дюзи",
        nameEn: "Injector replacement",
        price: "€150 – €400",
      },
    ],
  },
  {
    slug: "engine-cleaning",
    emoji: "🌰",
    titleBg: "Професионално почистване",
    titleEn: "Professional cleaning",
    items: [
      {
        nameBg:
          "Професионално почистване на двигател с орехови черупки",
        nameEn: "Engine cleaning (walnut blasting)",
        price: "€150 – €350",
      },
    ],
  },
  {
    slug: "air-suspension",
    emoji: "🛠",
    titleBg: "Въздушни възглавници",
    titleEn: "Air suspension",
    items: [
      {
        nameBg: "Смяна на въздушна възглавница",
        nameEn: "Air spring replacement",
        price: "€150 – €400",
      },
      {
        nameBg: "Ремонт на въздушно окачване",
        nameEn: "Air suspension repair",
        price: "€80 – €300",
      },
      {
        nameBg: "Смяна на компресор",
        nameEn: "Compressor replacement",
        price: "€200 – €500",
      },
      {
        nameBg: "Диагностика на въздушно окачване",
        nameEn: "Air suspension diagnostics",
        price: "€40 – €80",
      },
    ],
  },
  {
    slug: "chip-tuning",
    emoji: "⚡",
    titleBg: "Чип тунинг",
    titleEn: "Chip tuning",
    items: [
      { nameBg: "Stage 1", nameEn: "Stage 1", price: "€150 – €400" },
      { nameBg: "Stage 2", nameEn: "Stage 2", price: "€400 – €650" },
      {
        nameBg: "DPF / EGR OFF",
        nameEn: "DPF / EGR OFF",
        price: "€100 – €200",
      },
      { nameBg: "AdBlue", nameEn: "AdBlue", price: "€100 – €400" },
      {
        nameBg: "Popcorn / Hard cut limiter",
        nameEn: "Popcorn / hard cut limiter",
        price: "€100",
      },
    ],
  },
  {
    slug: "diagnostics",
    emoji: "💻",
    titleBg: "Диагностика",
    titleEn: "Diagnostics",
    items: [
      { nameBg: "Стандартна", nameEn: "Standard", price: "€40 – €60" },
      { nameBg: "Разширена", nameEn: "Extended", price: "€60 – €90" },
    ],
  },
  {
    slug: "electrical",
    emoji: "🔌",
    titleBg: "Електрика",
    titleEn: "Electrics",
    items: [
      {
        nameBg: "Смяна на акумулатор",
        nameEn: "Battery replacement",
        price: "€20 – €40",
      },
      {
        nameBg: "Смяна на стартер",
        nameEn: "Starter replacement",
        price: "€80 – €150",
      },
      {
        nameBg: "Смяна на алтернатор",
        nameEn: "Alternator replacement",
        price: "€80 – €150",
      },
      {
        nameBg: "Смяна на датчици",
        nameEn: "Sensor replacement",
        price: "€30 – €100",
      },
      {
        nameBg: "Смяна на фарове / стопове",
        nameEn: "Headlights / taillights",
        price: "€50 – €90",
      },
    ],
  },
  {
    slug: "detailing",
    emoji: "✨",
    titleBg: "Detailing",
    titleEn: "Detailing",
    items: [
      {
        nameBg: "Вътрешно почистване",
        nameEn: "Interior cleaning",
        price: "€45 – €70",
      },
      {
        nameBg: "Пълно почистване",
        nameEn: "Full interior clean",
        price: "€90 – €160",
      },
      {
        nameBg: "Външно измиване + вакса",
        nameEn: "Exterior wash + wax",
        price: "€60 – €90",
      },
      {
        nameBg: "Пълен детайлинг",
        nameEn: "Full detailing",
        price: "€180 – €400",
      },
      {
        nameBg: "Полиране и пастиране",
        nameEn: "Polishing",
        price: "€200 – €450",
      },
      {
        nameBg: "Керамично покритие",
        nameEn: "Ceramic coating",
        price: "€350 – €800",
      },
      {
        nameBg: "Фарове (възстановяване)",
        nameEn: "Headlight restoration",
        price: "€60 – €100",
      },
      {
        nameBg: "Озонова дезинфекция",
        nameEn: "Ozone disinfection",
        price: "€40 – €60",
      },
      {
        nameBg: "Пране на седалки",
        nameEn: "Seat shampoo",
        price: "€50 – €100",
      },
      {
        nameBg: "Пране на таван",
        nameEn: "Headliner cleaning",
        price: "€40 – €80",
      },
      {
        nameBg: "Защита на кожа",
        nameEn: "Leather protection",
        price: "€50 – €120",
      },
    ],
  },
  {
    slug: "other-services",
    emoji: "🚗",
    titleBg: "Други услуги",
    titleEn: "Other services",
    items: [
      {
        nameBg: "Пълнене на климатици",
        nameEn: "A/C recharge",
        price: "€50 – €90",
      },
      {
        nameBg: "Смяна на масло в скоростна кутия",
        nameEn: "Gearbox oil change",
        price: "€125 – €180",
      },
      {
        nameBg: "Смяна на масло в диференциал",
        nameEn: "Differential oil change",
        price: "€80 – €130",
      },
    ],
  },
  {
    slug: "gtp",
    emoji: "📋",
    titleBg: "ГТП",
    titleEn: "Technical inspection",
    items: [
      {
        nameBg: "Годишен технически преглед",
        nameEn: "Annual technical inspection",
        price: "€50",
      },
    ],
  },
];

export const SERVICE_SLUGS = SERVICE_CATEGORIES.map((c) => c.slug);

export function getCategoryBySlug(slug: string): ServiceCategoryDef | undefined {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}

export function categoryTitle(cat: ServiceCategoryDef, locale: Locale): string {
  return locale === "en" ? cat.titleEn : cat.titleBg;
}

export function itemName(row: ServiceItemRow, locale: Locale): string {
  return locale === "en" ? row.nameEn : row.nameBg;
}

export function serviceHref(locale: Locale, slug: string): string {
  return locale === "en" ? `/en/uslugi/${slug}` : `/uslugi/${slug}`;
}
