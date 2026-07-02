<script>
  import '../app.css';
  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-neutral-950 selection:text-white font-sans">
  <header class="border-b border-neutral-100 sticky top-0 bg-white/80 backdrop-blur-md z-50 transition-all duration-300">
    <div class="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="/" class="text-lg font-bold tracking-tight text-neutral-900 hover:scale-105 transition-transform duration-300">
        На связи детский психолог
      </a>
      
      <nav class="flex items-center gap-8 text-sm font-medium">
        <a href="/" class="hover:text-neutral-500 hover:scale-105 transition-all duration-300">Главная</a>
        <a href="/blog" class="hover:text-neutral-500 hover:scale-105 transition-all duration-300">Блог</a>
        <a href="https://t.me/about_the_connections" target="_blank" rel="noopener noreferrer" 
           class="bg-neutral-950 text-white px-4 py-1.5 rounded-full text-xs hover:bg-neutral-800 hover:scale-110 transition-all duration-300">
          Telegram Канал
        </a>
      </nav>
    </div>
  </header>

  <main class="flex-grow">
    {@render children()}
  </main>

  <footer class="border-t border-neutral-100 bg-neutral-50 text-neutral-500 text-xs mt-20 transition-all duration-300">
    <div class="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="text-center md:text-left">
        <p class="font-semibold text-neutral-800 text-sm mb-1">На связи детский психолог</p>
        <p>Глубокое понимание детей и бережное сопровождение семей</p>
      </div>
      
      <div class="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
        <p class="text-neutral-800 font-medium">Формат работы: Онлайн / Очно (Белград, Сербия)</p>
        <p>© {new Date().getFullYear()} Ограничений нет. Всё конфиденциально.</p>
        <p class="text-[10px] text-neutral-400">Сайт не собирает и не хранит персональные данные.</p>
        <p class="text-[10px] text-neutral-400 mt-2">
          Спроектировано и разработано — 
          <a href="https://www.linkedin.com/in/ustina-yeskova-28610764/" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:text-neutral-800 transition-colors duration-300">Устина Еськова</a>
        </p>
      </div>
    </div>
  </footer>
</div>