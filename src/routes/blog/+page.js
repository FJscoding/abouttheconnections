import { getPosts } from '$lib/posts.js';

// Этот код выполнится на этапе сборки Vercel и передаст статьи в компонент страницы
export async function load() {
    const posts = await getPosts();
    return {
        posts
    };
}