export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium tracking-wide text-[#dc211d]">
          Автосервиз
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Pro Limit Tuning
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          Диагностика, поддръжка и ремонт на автомобили. Работим с внимание към
          детайла и прозрачност към клиента.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#uslugi"
            className="inline-flex items-center justify-center rounded-md bg-[#dc211d] px-6 py-3 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
          >
            Виж услугите
          </a>
          <a
            href="#kontakti"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Свържи се с нас
          </a>
        </div>
      </section>

      <section
        id="uslugi"
        className="border-t border-white/10 bg-black/40 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-white">Услуги</h2>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Тук ще добавим конкретните услуги на сервиза — ремонт, диагностика,
            тунинг и др.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Диагностика", "Механика", "Тунинг"].map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/10 bg-[#010000] px-5 py-4 text-zinc-300"
              >
                <span className="font-medium text-white">{item}</span>
                <p className="mt-1 text-sm text-zinc-500">
                  Описание ще бъде добавено.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer
        id="kontakti"
        className="border-t border-white/10 py-10 text-center text-sm text-zinc-500"
      >
        <p>© {new Date().getFullYear()} Pro Limit Tuning</p>
      </footer>
    </main>
  );
}
