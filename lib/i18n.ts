export const locales = ["bg", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "bg";

export type WhyPillar = { heading: string; text: string };

export type Messages = {
  nav: {
    home: string;
    contact: string;
    services: string;
    langBg: string;
    langEn: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    allServices: string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    searchNoResults: string;
  };
  hero: {
    kicker: string;
    title: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageAlt: string;
    badges: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    cardCta: string;
    priceNote: string;
    disclaimer: string;
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    pillars: WhyPillar[];
    servicesHeading: string;
    services: string[];
    extras: WhyPillar[];
    contactStripTitle: string;
    closing: string;
  };
  footer: {
    legalPolicies: string;
    line: string;
    contactHeading: string;
    hoursTitle: string;
    hoursWeek: string;
    hoursSaturday: string;
    instagramAria: string;
    facebookAria: string;
    mapTitle: string;
    mapIframeTitle: string;
    mapOpenInGoogle: string;
    phoneLabel: string;
    phoneCallAria: string;
    socialGroupAria: string;
    contactEyebrow: string;
  };
  forms: {
    booking: {
      title: string;
      bookSlot: string;
      category: string;
      service: string;
      name: string;
      phone: string;
      email: string;
      date: string;
      time: string;
      hoursHint: string;
      optionalTitle: string;
      carType: string;
      engine: string;
      brand: string;
      year: string;
      comment: string;
      submit: string;
      cancel: string;
      sending: string;
      success: string;
      error: string;
      pickDateFirst: string;
      closedDay: string;
    };
    inquiry: {
      title: string;
      subtitle: string;
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      phoneCta: string;
    };
    consent: {
      labelBeforePrivacy: string;
      privacyLink: string;
      labelBetween: string;
      termsLink: string;
      labelAfterTerms: string;
      note: string;
      requiredError: string;
      checkboxAria: string;
    };
  };
};

const messages: Record<Locale, Messages> = {
  bg: {
    nav: {
      home: "Начало",
      contact: "Контакт",
      services: "Услуги",
      langBg: "BG",
      langEn: "EN",
      menu: "Меню",
      openMenu: "Отвори менюто",
      closeMenu: "Затвори менюто",
      language: "Език",
      allServices: "Всички категории",
      searchPlaceholder: "Търси услуга (напр. накладки)…",
      searchAriaLabel: "Търсене на услуга",
      searchNoResults: "Няма резултати.",
    },
    hero: {
      kicker: "Автосервиз",
      title: "Pro Limit Tuning",
      body: "Диагностика, поддръжка и ремонт на автомобили. Работим с внимание към детайла и прозрачност към клиента.",
      ctaPrimary: "Виж услугите",
      ctaSecondary: "Свържи се с нас",
      imageAlt: "Автомобил в сервиз Pro Limit Tuning — София",
      badges: ["Чип тунинг", "Диагностика", "Детайлинг"],
    },
    services: {
      eyebrow: "Пълен спектър услуги",
      title: "Услуги",
      intro:
        "Ориентировъчни цени с ДДС. За точна оферта и записан час — свържете се с нас.",
      cardCta: "Виж цени",
      priceNote: "Ориентировъчни цени; финалната сума зависи от автомобила и състоянието на частите.",
      disclaimer:
        "Цените са с включен ДДС и са ориентировъчни. Запазваме право на промени.",
    },
    whyChoose: {
      eyebrow: "Предимства",
      title: "Защо да избереш Pro Limit Tuning?",
      pillars: [
        {
          heading: "Професионално оборудване",
          text: "от най-висок клас",
        },
        {
          heading: "Опитни майстори",
          text: "с реален опит и страст към автомобилите",
        },
        {
          heading: "Бързо обслужване",
          text: "без компромис в качеството",
        },
        {
          heading: "Гаранция за извършените услуги",
          text: "за твоята сигурност",
        },
        {
          heading: "Индивидуален подход",
          text: "лично отношение към всеки клиент и автомобил",
        },
      ],
      servicesHeading: "Нашият фокус",
      services: [
        "Смяна на масла и филтри",
        "Смяна на накладки и дискове",
        "Окачване и ходова част",
        "Ремонт на двигатели",
        "Компютърна диагностика",
        "Чип тунинг Stage 1 / Stage 2",
        "Пълнене и обслужване на климатици",
        "Софтуерни изключвания (DPF / EGR / AdBlue)",
      ],
      extras: [
        {
          heading: "Безплатен заместващ автомобил",
          text: "при по-големи ремонти",
        },
        {
          heading: "Бързи часове",
          text: "без излишно чакане",
        },
        {
          heading: "Записване същия ден",
          text: "за твое удобство",
        },
      ],
      contactStripTitle: "Къде ни намираш",
      closing:
        "Работим с грижа към детайла, защото знаем колко е важен автомобилът ти.",
    },
    footer: {
      legalPolicies: "Политика за поверителност и общи условия",
      line: `© ${new Date().getFullYear()} Pro Limit Tuning`,
      contactHeading: "Контакт",
      hoursTitle: "Работно време",
      hoursWeek: "Понеделник – петък: 9:00 – 18:00",
      hoursSaturday: "Събота: 9:00 – 16:00",
      instagramAria: "Instagram — Pro Limit Tuning",
      facebookAria: "Facebook — Pro Limit Tuning",
      mapTitle: "Локация",
      mapIframeTitle: "Карта — Pro Limit Tuning, София",
      mapOpenInGoogle: "Отвори в Google Карти",
      phoneLabel: "Телефон",
      phoneCallAria: "Обади се",
      socialGroupAria: "Социални мрежи",
      contactEyebrow: "Връзка с нас",
    },
    forms: {
      booking: {
        title: "Запазване на час",
        bookSlot: "Запази час",
        category: "Категория",
        service: "Услуга",
        name: "Име и фамилия",
        phone: "Телефон",
        email: "Имейл",
        date: "Ден",
        time: "Час",
        hoursHint:
          "Работно време: понеделник – петък 9:00 – 18:00, събота 9:00 – 16:00. Неделя – почивен ден.",
        optionalTitle: "По желание",
        carType: "Вид кола",
        engine: "Двигател",
        brand: "Марка",
        year: "Година",
        comment: "Коментар",
        submit: "Изпрати заявка",
        cancel: "Отказ",
        sending: "Изпращане…",
        success: "Заявката е изпратена. Ще се свържем с вас.",
        error: "Неуспешно изпращане. Опитайте отново.",
        pickDateFirst: "Изберете ден.",
        closedDay: "В този ден не работим. Изберете друг.",
      },
      inquiry: {
        title: "Запитване",
        subtitle:
          "Попълнете формата и ще отговорим възможно най-скоро на посочения имейл или телефон.",
        name: "Име и фамилия",
        phone: "Телефон",
        email: "Имейл",
        message: "Съобщение",
        submit: "Изпрати",
        sending: "Изпращане…",
        success: "Съобщението е изпратено. Благодарим!",
        error: "Неуспешно изпращане. Опитайте отново.",
        phoneCta: "Или ни се обадете:",
      },
      consent: {
        labelBeforePrivacy: "Прочетох и приемам ",
        privacyLink: "Политиката за поверителност",
        labelBetween: " и ",
        termsLink: "Общите условия",
        labelAfterTerms:
          ". Потвърждавам, че съм информиран/а как обработваме личните данни и че съм съгласен/а данните ми да бъдат използвани за обработване на това запитване или заявка за час, както е описано в политиката (вкл. правно основание по Регламент (ЕС) 2016/679).",
        note: "Без това съгласие не можем да приемем заявката през формата.",
        requiredError:
          "За да изпратите формата, моля отбележете, че приемате политиката и условията.",
        checkboxAria:
          "Съгласие с политиката за поверителност и общите условия",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      contact: "Contact",
      services: "Services",
      langBg: "BG",
      langEn: "EN",
      menu: "Menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
      allServices: "All categories",
      searchPlaceholder: "Search service (e.g. brake pads)…",
      searchAriaLabel: "Search services",
      searchNoResults: "No results.",
    },
    hero: {
      kicker: "Auto service",
      title: "Pro Limit Tuning",
      body: "Diagnostics, maintenance, and repair. We focus on detail and transparent communication with every customer.",
      ctaPrimary: "View services",
      ctaSecondary: "Get in touch",
      imageAlt: "Vehicle at Pro Limit Tuning workshop, Sofia",
      badges: ["Chip tuning", "Diagnostics", "Detailing"],
    },
    services: {
      eyebrow: "Full service range",
      title: "Services",
      intro:
        "Indicative prices incl. VAT. Contact us for an exact quote and booking.",
      cardCta: "View prices",
      priceNote:
        "Indicative prices; final cost depends on vehicle condition and parts.",
      disclaimer:
        "Prices include VAT and are indicative. We reserve the right to change them.",
    },
    whyChoose: {
      eyebrow: "Why us",
      title: "Why choose Pro Limit Tuning?",
      pillars: [
        {
          heading: "Professional equipment",
          text: "top-tier tools and diagnostics",
        },
        {
          heading: "Experienced technicians",
          text: "real hands-on passion for cars",
        },
        {
          heading: "Fast service",
          text: "without cutting corners on quality",
        },
        {
          heading: "Warranty on work performed",
          text: "for your peace of mind",
        },
        {
          heading: "Personal approach",
          text: "tailored to you and your vehicle",
        },
      ],
      servicesHeading: "What we focus on",
      services: [
        "Oil and filter changes",
        "Brake pads and discs",
        "Suspension and chassis",
        "Engine repair",
        "Computer diagnostics",
        "Chip tuning Stage 1 / Stage 2",
        "A/C recharge and service",
        "Software solutions (DPF / EGR / AdBlue)",
      ],
      extras: [
        {
          heading: "Free replacement car",
          text: "for larger repairs",
        },
        {
          heading: "Quick appointments",
          text: "minimal waiting around",
        },
        {
          heading: "Same-day booking",
          text: "when you need us soon",
        },
      ],
      contactStripTitle: "Find us",
      closing:
        "We care about the details because we know how much your car matters to you.",
    },
    footer: {
      legalPolicies: "Privacy policy & terms of use",
      line: `© ${new Date().getFullYear()} Pro Limit Tuning`,
      contactHeading: "Contact",
      hoursTitle: "Opening hours",
      hoursWeek: "Monday – Friday: 9:00 – 18:00",
      hoursSaturday: "Saturday: 9:00 – 16:00",
      instagramAria: "Instagram — Pro Limit Tuning",
      facebookAria: "Facebook — Pro Limit Tuning",
      mapTitle: "Location",
      mapIframeTitle: "Map — Pro Limit Tuning, Sofia",
      mapOpenInGoogle: "Open in Google Maps",
      phoneLabel: "Phone",
      phoneCallAria: "Call us",
      socialGroupAria: "Social media",
      contactEyebrow: "Reach us",
    },
    forms: {
      booking: {
        title: "Book an appointment",
        bookSlot: "Book slot",
        category: "Category",
        service: "Service",
        name: "Full name",
        phone: "Phone",
        email: "Email",
        date: "Date",
        time: "Time",
        hoursHint:
          "Opening hours: Mon–Fri 9:00–18:00, Sat 9:00–16:00. Closed on Sundays.",
        optionalTitle: "Optional",
        carType: "Vehicle type",
        engine: "Engine",
        brand: "Make",
        year: "Year",
        comment: "Comment",
        submit: "Send request",
        cancel: "Cancel",
        sending: "Sending…",
        success: "Request sent. We’ll get back to you shortly.",
        error: "Could not send. Please try again.",
        pickDateFirst: "Pick a date.",
        closedDay: "We’re closed that day. Please pick another.",
      },
      inquiry: {
        title: "Contact us",
        subtitle:
          "Fill in the form and we’ll reply as soon as possible by email or phone.",
        name: "Full name",
        phone: "Phone",
        email: "Email",
        message: "Message",
        submit: "Send",
        sending: "Sending…",
        success: "Message sent. Thank you!",
        error: "Could not send. Please try again.",
        phoneCta: "Or call us:",
      },
      consent: {
        labelBeforePrivacy: "I have read and accept the ",
        privacyLink: "Privacy policy",
        labelBetween: " and ",
        termsLink: "Terms of use",
        labelAfterTerms:
          ". I confirm that I understand how we process personal data and I consent to processing for the purpose of handling this inquiry or booking request as described in the privacy policy (including the legal basis under Regulation (EU) 2016/679).",
        note: "We cannot accept a submission through the form without this consent.",
        requiredError:
          "Please confirm that you accept the privacy policy and terms to submit the form.",
        checkboxAria: "Consent to the privacy policy and terms of use",
      },
    },
  },
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
