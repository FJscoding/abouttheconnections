<script>
  // Фото автора. Мы используем красивую заглушку-силуэт в минималистичном стиле,
  // которую клиент сможет легко заменить на свое реальное фото.
</script>

<svelte:head>
  <title>Детский психолог — На связи | Онлайн & Белград</title>
  <meta name="description" content="Помогаю родителям глубоко понять своих детей. Специализируюсь на ранней помощи и работе с особым детством." />
</svelte:head>

<!-- Секция 1: Главный баннер (Первое впечатление) -->
<section class="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-12 items-center">
  <div class="md:col-span-7 space-y-6">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
      Помогу <span class="underline decoration-neutral-300 underline-offset-4">понять</span> вашего ребенка и вернуть покой в семью
    </h1>
    <p class="text-lg text-neutral-600 leading-relaxed max-w-xl">
      Глубокая психологическая помощь родителям детей от нескольких месяцев до юношества. Сопровождение в периоды кризисов, диагностика и коррекция развития.
    </p>
    <div class="pt-4 flex flex-col sm:flex-row gap-4">
      <a href="https://t.me/AYeskov" target="_blank" 
         class="inline-flex items-center justify-center bg-neutral-950 text-white px-8 py-4 rounded-xl font-medium hover:bg-neutral-800 hover:scale-105 transition-all duration-300 text-center shadow-md">
        Записаться в Telegram
      </a>
      <a href="/blog" 
         class="inline-flex items-center justify-center border border-neutral-200 text-neutral-800 px-8 py-4 rounded-xl font-medium hover:bg-neutral-50 hover:scale-105 transition-all duration-300 text-center">
        Читать статьи из практики
      </a>
    </div>
  </div>
  
  <!-- Заглушка под фото автора -->
  <div class="md:col-span-5 flex justify-center">
    <div class="relative w-72 h-96 bg-neutral-50 border-2 border-neutral-150 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center text-center p-6 hover:scale-105 transition-transform duration-500 group">
      <!-- Имитация рамки для фото -->
      <div class="absolute inset-4 border border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center bg-white p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-16 h-16 text-neutral-300 mb-2 group-hover:scale-110 transition-transform duration-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        <span class="text-xs font-semibold text-neutral-400">ФОТО СПЕЦИАЛИСТА</span>
        <span class="text-[10px] text-neutral-300 mt-1">Очный прием в Белграде & Онлайн</span>
      </div>
    </div>
  </div>
</section>

<!-- Секция 2: Сфера компетенций -->
<section class="bg-neutral-50 py-20 border-y border-neutral-100 transition-all duration-300">
  <div class="max-w-5xl mx-auto px-6">
    <div class="max-w-2xl mb-12">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">Направления работы</h2>
      <p class="text-neutral-600 leading-relaxed">
        Мой главный фокус — работа через глубокое понимание потребностей ребенка. Я верю, что ключ к изменениям лежит в руках любящих родителей, поэтому первичная терапевтическая работа ведется именно с вами.
      </p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-2xl border border-neutral-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
        <div class="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-6">01</div>
        <h3 class="text-lg font-bold text-neutral-900 mb-2">Особое детство</h3>
        <p class="text-sm text-neutral-500 leading-relaxed">
          Профессиональное сопровождение семей с детьми с любыми вариантами ненормативного развития. Мягкая адаптация, развитие компенсаторных механизмов нервной системы.
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl border border-neutral-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
        <div class="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-6">02</div>
        <h3 class="text-lg font-bold text-neutral-900 mb-2">Раннее детство</h3>
        <p class="text-sm text-neutral-500 leading-relaxed">
          Работа с детьми от нескольких месяцев жизни. Ранняя диагностика нарушений контакта, задержек развития, помощь в выстраивании надежной привязанности.
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl border border-neutral-100 hover:scale-105 hover:shadow-lg transition-all duration-300">
        <div class="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm mb-6">03</div>
        <h3 class="text-lg font-bold text-neutral-900 mb-2">Консультации родителей</h3>
        <p class="text-sm text-neutral-500 leading-relaxed">
          Разбор системных семейных сложностей, страхов, родительского выгорания. Помогаю вам стать главным и самым надежным терапевтом для собственного ребенка.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Секция 3: СТОП-ТЕМЫ -->
<section class="max-w-5xl mx-auto px-6 py-20">
  <div class="bg-neutral-950 text-white rounded-3xl p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
    <div class="md:col-span-5">
      <div class="inline-block bg-neutral-800 text-xs px-3 py-1.5 rounded-full uppercase tracking-wider font-semibold text-neutral-300 mb-4">
        Важное ограничение
      </div>
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight leading-tight">
        С чем я НЕ работаю
      </h2>
      <p class="text-neutral-400 text-sm mt-4 leading-relaxed">
        Для меня важна честность и максимальная эффективность. Если проблема находится вне зоны моей специализации, я открыто сообщаю об этом на старте.
      </p>
    </div>
    
    <div class="md:col-span-7 space-y-4">
      <div class="flex items-start gap-4">
        <div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-950/50 border border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">×</div>
        <div>
          <p class="text-sm font-semibold text-neutral-200">Клинические состояния</p>
          <p class="text-xs text-neutral-400">Глубокие депрессивные эпизоды, острые психологические травмы, требующие совместной работы с психиатром.</p>
        </div>
      </div>
      
      <div class="flex items-start gap-4">
        <div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-950/50 border border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">×</div>
        <div>
          <p class="text-sm font-semibold text-neutral-200">Репетиторство и оценки</p>
          <p class="text-xs text-neutral-400">Сайт не предлагает услуги искусственного подтягивания школьной успеваемости или репетиторства.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Секция 4: Отзывы -->
<section class="bg-neutral-50 py-20 border-t border-neutral-100 transition-all duration-300">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center max-w-xl mx-auto mb-16">
      <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2">Истории из опыта родителей</h2>
      <p class="text-sm text-neutral-500">Все отзывы анонимизированы для соблюдения этики.</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white p-8 rounded-2xl border border-neutral-150 shadow-sm hover:scale-[1.03] transition-all duration-300">
        <p class="text-sm text-neutral-600 italic leading-relaxed mb-6">
          «Мы пришли в работу совершенно растерянными — у сына в 4 года была очень слабая речь и частые истерики. Здесь нас впервые услышали без осуждения. Психолог работал в основном со мной, объяснял наши ошибки. Итог — ребенок стал спокойнее, пошла речь, мы наконец понимаем друг друга.»
        </p>
        <p class="text-xs font-bold text-neutral-400">Мама Артема (4 года)</p>
      </div>

      <div class="bg-white p-8 rounded-2xl border border-neutral-150 shadow-sm hover:scale-[1.03] transition-all duration-300">
        <p class="text-sm text-neutral-600 italic leading-relaxed mb-6">
          «Огромное спасибо за бережность. Работа с особым ребенком — это постоянное чувство вины. Консультации помогли мне выдохнуть и научиться просто радоваться сыну и замечать его маленькие шаги. Рекомендую всем родителям.»
        </p>
        <p class="text-xs font-bold text-neutral-400">Ольга, мама Паши (6 лет)</p>
      </div>
    </div>
  </div>
</section>

<!-- Секция 5: Дипломы -->
<section class="max-w-5xl mx-auto px-6 py-20">
  <div class="text-center max-w-xl mx-auto mb-16">
    <h2 class="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2">Образование и квалификация</h2>
    <p class="text-sm text-neutral-500">Регулярное подтверждение квалификации и супервизии.</p>
  </div>
  
  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="bg-white border border-neutral-150 rounded-2xl p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56 group">
      <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        🎓
      </div>
      <div>
        <h3 class="font-bold text-neutral-900 text-sm mb-1">Высшее профильное образование</h3>
        <p class="text-xs text-neutral-400">Детская и семейная психология, коррекционная педагогика.</p>
      </div>
      <div class="text-[10px] text-neutral-300 mt-4 border-t border-neutral-100 pt-2">Проверено экспертами</div>
    </div>

    <div class="bg-white border border-neutral-150 rounded-2xl p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56 group">
      <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        🧸
      </div>
      <div>
        <h3 class="font-bold text-neutral-900 text-sm mb-1">Раннее вмешательство</h3>
        <p class="text-xs text-neutral-400">Курсы по диагностике и помощи детям раннего возраста (от 0 до 3 лет).</p>
      </div>
      <div class="text-[10px] text-neutral-300 mt-4 border-t border-neutral-100 pt-2">Сертифицировано</div>
    </div>

    <div class="bg-white border border-neutral-150 rounded-2xl p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-56 group">
      <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        🤝
      </div>
      <div>
        <h3 class="font-bold text-neutral-900 text-sm mb-1">Поведенческая терапия</h3>
        <p class="text-xs text-neutral-400">Современные методики работы с ненормативным детским развитием.</p>
      </div>
      <div class="text-[10px] text-neutral-300 mt-4 border-t border-neutral-100 pt-2">Сертифицировано</div>
    </div>
  </div>
</section>