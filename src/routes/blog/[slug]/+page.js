import { error } from '@sveltejs/kit';

export async function load({ params }) {
    // Безопасный поиск всех файлов Markdown через glob из папки src/posts
    const modules = import.meta.glob('../../../posts/*.md');
    
    // Формируем относительный путь к нужному файлу статьи
    const path = `../../../posts/${params.slug}.md`;
    
    // Если такого файла не существует — отдаем красивую ошибку 404
    if (!modules[path]) {
        error(404, `Статья не найдена`);
    }
    
    try {
        // Динамически загружаем только выбранную статью
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