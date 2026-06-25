<script>
  import { onMount } from 'svelte';
  import { getPosts } from '$lib/posts.js';

  let posts = $state([]);
  let activeCategory = $state('Все');

  // Категории из ТЗ
  const categories = ['Все', 'Школа', 'Философия', 'Раннее детство', 'Истории из практики'];

  onMount(async () => {
    posts = await getPosts();
  });

  // Фильтруем статьи на лету
  let filteredPosts = $derived(
    activeCategory === 'Все' 
      ? posts 
      : posts.filter(post => post.category === activeCategory)
  );
</script>

<svelte:head>
  <title>Блог | На связи детский психолог</title>
  <meta name="description" content="Полезные статьи о детской психологии, раннем развитии и школьной адаптации от практикующего специалиста." />
</svelte:head>

<section class="max-w-5xl mx-auto px-6 py-16">
  <div class="max-w-xl mb-12">
    <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-4">
      Полезные материалы
    </h1>
    <p class="text-neutral-500 text-sm">
      Статьи, размышления и анонимизированные разборы случаев из практики. Синхронизируется с моим Telegram-каналом.
    </p>
  </div>

  <!-- Переключатель категорий (Интерактивный рубрикатор) -->
  <div class="flex flex-wrap gap-2 mb-12 border-b border-neutral-100 pb-6">
    {#each categories as category}
      <button 
        onclick={() => activeCategory = category}
        class="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105
               {activeCategory === category 
                 ? 'bg-neutral-900 text-white shadow-md' 
                 : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'}"
      >
        {category}
      </button>
    {/each}
  </div>

  <!-- Сетка постов -->
  {#if filteredPosts.length > 0}
    <div class="grid md:grid-cols-2 gap-8">
      {#each filteredPosts as post}
        <article class="bg-white border border-neutral-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between">
          <div class="p-8">
            <div class="flex items-center justify-between gap-4 mb-4">
              <span class="bg-neutral-100 text-neutral-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <time class="text-neutral-400 text-xs">
                {new Date(post.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            
            <h2 class="text-xl font-bold text-neutral-900 mb-3 hover:text-neutral-600 transition-colors">
              <a href="/blog/{post.slug}">{post.title}</a>
            </h2>
            
            <p class="text-neutral-500 text-sm leading-relaxed mb-6">
              {post.description}
            </p>
          </div>

          <div class="px-8 pb-8 pt-2">
            <a href="/blog/{post.slug}" class="inline-flex items-center text-xs font-bold text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-300 transition-all duration-300">
              Читать полностью →
            </a>
          </div>
        </article>
      {/each}
    </div>
  {:else}
    <div class="text-center py-20 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200">
      <p class="text-neutral-400 text-sm">В этой категории пока нет опубликованных статей.</p>
    </div>
  {/if}
</section>
