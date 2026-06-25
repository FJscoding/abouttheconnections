import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/posts.js';

// Эта функция сообщает Vercel список всех страниц статей во время сборки
export async function entries() {
    const posts = await getPosts();
    return posts.map(post => ({ slug: post.slug }));
}

// Загрузчик конкретной статьи
export async function load({ params }) {
    const modules = import.meta.glob('../../../posts/*.md');
    const path = `../../../posts/${params.slug}.md`;
    
    if (!modules[path]) {
        error(404, `Статья не найдена`);
    }
    
    try {
        const post = await modules[path]();
        return {
            content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        console.error(e);
        error(500, `Ошибка при загрузке текста статьи`);
    }
}