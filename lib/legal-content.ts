import type { Locale } from "@/lib/i18n";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalPageCopy = {
  documentTitle: string;
  updatedLabel: string;
  intro: string;
  privacyHeading: string;
  termsHeading: string;
  privacy: LegalSection[];
  terms: LegalSection[];
};

export const legalPageCopy: Record<Locale, LegalPageCopy> = {
  bg: {
    documentTitle: "Политика за поверителност и общи условия",
    updatedLabel: "Последна актуализация: април 2026 г.",
    intro:
      "Този документ урежда начина, по който „Pro Limit Tuning“ (наричан по-долу „ние“, „сервизът“) обработва лични данни чрез уебсайта, и общите условия за ползване на сайта и комуникацията чрез него. Моля, прочетете внимателно преди използване на формите за контакт или записване на час.",
    privacyHeading: "Политика за поверителност",
    termsHeading: "Общи условия",
    privacy: [
      {
        id: "privacy-controller",
        title: "1. Администратор на лични данни",
        paragraphs: [
          "Администратор на личните данни, които се обработват чрез настоящия уебсайт и свързаните с него форми, е търговското дружество или самозаетото лице, опериращо под наименованието Pro Limit Tuning, с адрес на обслужване: Околовръстен път 462, София, България.",
          "За въпроси, свързани с обработката на лични данни, можете да се свържете с нас чрез контактната форма на сайта, посочения телефон или имейл за кореспонденция, ако такъв е публикуван.",
        ],
      },
      {
        id: "privacy-data",
        title: "2. Какви данни събираме",
        paragraphs: [
          "Чрез формата за запитване и формата за записване на час може да обработваме: име и фамилия, телефонен номер, имейл адрес, съдържание на съобщение или коментар, предпочитана дата и час за посещение, както и доброволно предоставена информация за автомобил (марка, модел, двигател, година и др.).",
          "При изпращане на формата технически могат да се записват и данни за връзката (напр. време на изпращане), съгласно настройките на хостинга и имейл доставчика.",
        ],
      },
      {
        id: "privacy-purpose",
        title: "3. Цели и правно основание за обработка",
        paragraphs: [
          "Данните се обработват с цел: отговор на Ваше запитване; организиране на час и комуникация във връзка с поискана услуга; водене на кореспонденция, необходима за изпълнение на преддоговорни/договорни стъпки по Ваше искане.",
          "Правното основание е: Вашето съгласие, дадено чрез отметка преди изпращане на формата (чл. 6, ал. 1, буква „а“ от Регламент (ЕС) 2016/679 — GDPR), съвместено при необходимост с обработка, необходима за преддоговорни мерки по Ваше искане (чл. 6, ал. 1, буква „б“ от GDPR).",
          "Без отбелязване на съгласие с настоящата политика и общите условия формите не следва да се изпращат; сървърната валидация отказва заявки без потвърдено съгласие.",
        ],
      },
      {
        id: "privacy-retention",
        title: "4. Срок на съхранение и получатели",
        paragraphs: [
          "Съобщенията, изпратени чрез формите, се съхраняват в имейл пощата на администратора и при съответния доставчик на имейл услуги (напр. Resend или друг избран доставчик), докато не поискате изтриване, освен ако по-дълъг срок не е необходим по закон (напр. счетоводни или данъчни изисквания при сключен договор).",
          "Данните не се продават. Достъп имат само лица, упълномощени да обработват запитвания и резервации от името на сервиза.",
        ],
      },
      {
        id: "privacy-rights",
        title: "5. Вашите права",
        paragraphs: [
          "Имате право на достъп до данните, свързани с Вас, право на коригиране, изтриване („право да бъдете забравени“), ограничаване на обработката, преносимост на данните (когато е приложимо) и възражение срещу обработка, основана на законни интереси.",
          "Можете да оттеглите съгласието си по всяко време, без това да засяга законосъобразността на обработката, извършена преди оттеглянето.",
          "Имате право да подадете жалба до надзорен орган — в България: Комисия за защита на личните данни (КЗЛД), www.cpdp.bg.",
        ],
      },
      {
        id: "privacy-cookies",
        title: "6. Бисквитки и анализи",
        paragraphs: [
          "Сайтът може да използва технически необходими бисквитки за нормалното му функциониране. Ако в бъдеще се внедрят аналитични или маркетингови инструменти, тази политика ще бъде актуализирана и при необходимост ще се изисква допълнително съгласие.",
        ],
      },
    ],
    terms: [
      {
        id: "terms-scope",
        title: "1. Обхват",
        paragraphs: [
          "Настоящите общи условия уреждат ползването на уебсайта на Pro Limit Tuning и използването на формите за контакт и записване на час. Ползването на сайта и изпращането на форма означава, че сте се запознали и приемате тези условия заедно с политиката за поверителност.",
        ],
      },
      {
        id: "terms-services",
        title: "2. Услуги и информация на сайта",
        paragraphs: [
          "Публикуваните цени и описания на услуги са с ориентировъчен характер, освен ако изрично не е уговорено друго. Краен обхват, цена и срок се потвърждават при преглед на автомобила и според наличност на части.",
          "Записваният чрез формата час е заявка; окончателното потвърждение може да изисква обратна връзка по телефон или имейл.",
        ],
      },
      {
        id: "terms-liability",
        title: "3. Отговорност",
        paragraphs: [
          "Сервизът полага грижа информацията на сайта да е актуална, но не носи отговорност за технически грешки, прекъсвания на услугата или за съдържание на външни сайтове, към които водят връзки.",
          "За щети от неправомерно използване на предоставени от Вас данни за вход (имейл и др.) от трети лица, ако не са причинени от сервиза, отговорност не се носи.",
        ],
      },
      {
        id: "terms-law",
        title: "4. Приложимо право",
        paragraphs: [
          "За неуредените въпроси се прилага законодателството на Република България. Компетентни са българските съдилища.",
        ],
      },
    ],
  },
  en: {
    documentTitle: "Privacy policy and terms of use",
    updatedLabel: "Last updated: April 2026",
    intro:
      "This document describes how Pro Limit Tuning (“we”, “the workshop”) processes personal data through this website, and the general terms for using the site and its contact/booking forms. Please read it carefully before submitting a form.",
    privacyHeading: "Privacy policy",
    termsHeading: "Terms of use",
    privacy: [
      {
        id: "privacy-controller",
        title: "1. Data controller",
        paragraphs: [
          "The controller of personal data processed through this website and its forms is the business operating as Pro Limit Tuning, service address: Ring Road 462, Sofia, Bulgaria.",
          "For privacy-related requests, contact us via the site contact form, the published phone number, or any published business email address.",
        ],
      },
      {
        id: "privacy-data",
        title: "2. Data we collect",
        paragraphs: [
          "Through the inquiry and booking forms we may process: your name, phone number, email address, message or comment content, preferred visit date and time, and optional vehicle details (make, engine, year, etc.) you choose to provide.",
          "When a form is submitted, limited technical metadata (e.g. time of submission) may be processed by our hosting and email delivery provider as part of normal service operation.",
        ],
      },
      {
        id: "privacy-purpose",
        title: "3. Purposes and legal basis",
        paragraphs: [
          "We process this data to: respond to your inquiry; arrange and communicate about an appointment; take steps at your request prior to entering into a contract for services.",
          "The legal basis is: your consent given via the mandatory checkbox before submit (Art. 6(1)(a) GDPR), together where applicable with processing necessary for pre-contractual measures at your request (Art. 6(1)(b) GDPR).",
          "Forms must not be submitted without accepting this policy and the terms; the server rejects requests without confirmed consent.",
        ],
      },
      {
        id: "privacy-retention",
        title: "4. Retention and recipients",
        paragraphs: [
          "Messages are stored in the controller’s mailbox and with the email service provider (e.g. Resend or another provider) until you request erasure, unless a longer period is required by law (e.g. accounting rules where a contract exists).",
          "We do not sell your data. Access is limited to persons authorised to handle inquiries and bookings.",
        ],
      },
      {
        id: "privacy-rights",
        title: "5. Your rights",
        paragraphs: [
          "You have the right to access, rectification, erasure, restriction of processing, data portability (where applicable), and to object to processing based on legitimate interests.",
          "You may withdraw consent at any time without affecting the lawfulness of processing carried out before withdrawal.",
          "You may lodge a complaint with a supervisory authority; in Bulgaria this is the Commission for Personal Data Protection (CPDP).",
        ],
      },
      {
        id: "privacy-cookies",
        title: "6. Cookies",
        paragraphs: [
          "The site may use strictly necessary cookies for operation. If analytics or marketing tools are added later, this policy will be updated and additional consent obtained where required.",
        ],
      },
    ],
    terms: [
      {
        id: "terms-scope",
        title: "1. Scope",
        paragraphs: [
          "These terms govern use of the Pro Limit Tuning website and its contact and booking forms. Using the site and submitting a form means you have read and accept these terms together with the privacy policy.",
        ],
      },
      {
        id: "terms-services",
        title: "2. Services and site information",
        paragraphs: [
          "Prices and service descriptions on the site are indicative unless explicitly agreed otherwise. Final scope, price, and timing are confirmed after inspection and parts availability.",
          "A time selected in the booking form is a request; final confirmation may require follow-up by phone or email.",
        ],
      },
      {
        id: "terms-liability",
        title: "3. Liability",
        paragraphs: [
          "We aim to keep site information accurate but are not liable for technical errors, outages, or content on external sites linked from the site.",
          "We are not responsible for misuse of your contact details by third parties unless caused by our misconduct.",
        ],
      },
      {
        id: "terms-law",
        title: "4. Governing law",
        paragraphs: [
          "Bulgarian law applies to matters not covered here. Bulgarian courts have jurisdiction.",
        ],
      },
    ],
  },
};
