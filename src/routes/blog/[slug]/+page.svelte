<script>
  let { data } = $props();
  const Content = data.content;
</script>

<svelte:head>
  <title>{data.meta.title} — На связи детский психолог</title>
  <meta name="description" content={data.meta.description} />
  <!-- Динамические мета-теги Open Graph для красивых репостов в Telegram/Facebook -->
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:type" content="article" />
</svelte:head>

<article class="max-w-2xl mx-auto px-6 py-16">
  <!-- Хлебные крошки -->
  <div class="mb-8">
    <a href="/blog" class="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">← Назад в блог</a>
  </div>

  <!-- Шапка статьи -->
  <header class="mb-12 border-b border-neutral-100 pb-8">
    <div class="flex items-center gap-4 mb-4">
      <span class="bg-neutral-100 text-neutral-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
        {data.meta.category}
      </span>
      <time class="text-neutral-400 text-xs">
        {new Date(data.meta.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>
    </div>
    
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-4">
      {data.meta.title}
    </h1>
    
    <p class="text-neutral-500 text-base leading-relaxed italic">
      {data.meta.description}
    </p>
  </header>

  <!-- Тело статьи на Markdown (с увеличенным межстрочным интервалом для комфортного чтения длинных текстов) -->
  <div class="prose prose-neutral max-w-none text-neutral-800 leading-relaxed text-base space-y-6">
    <Content />
  </div>

  <!-- Мягкий CTA блок в конце статьи (Согласно ТЗ) -->
  <div class="mt-16 bg-neutral-50 border border-neutral-150 rounded-2xl p-8 text-center hover:scale-[1.01] transition-transform duration-300">
    <h3 class="font-bold text-neutral-900 text-lg mb-2">Остались вопросы по теме?</h3>
    <p class="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
      Каждая ситуация уникальна. Вы всегда можете написать мне напрямую в Telegram, задать анонимный вопрос или записаться на глубокую разбор-консультацию.
    </p>
    <a href="[https://t.me/connections_psychologist](https://t.me/connections_psychologist)" target="_blank"
       class="inline-flex items-center justify-center bg-neutral-950 text-white px-6 py-3 rounded-xl font-medium text-xs hover:bg-neutral-800 hover:scale-105 transition-all duration-300">
      Написать в Telegram
    </a>
  </div>
</article>

<style>
  /* Стилизация заголовков и цитат в тексте статьи */
  :global(.prose h3) {
    font-size: 1.25rem;
    font-weight: 700;
    color: #171717;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }
  :global(.prose p) {
    margin-bottom: 1.25rem;
  }
  :global(.prose ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
    font-size: 0.95rem;
  }
  :global(.prose li) {
    margin-bottom: 0.5rem;
  }
  :global(.prose blockquote) {
    border-left: 4px solid #171717;
    padding-left: 1.25rem;
    font-style: italic;
    color: #404040;
    margin: 1.5rem 0;
  }
</style>