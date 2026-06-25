// Функция для загрузки всех постов из папки src/posts
export async function getPosts() {
    let posts = [];

    // Находим все файлы Markdown в папке src/posts
    const paths = import.meta.glob('../posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        // Достаем название файла (slug) без расширения .md
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata;
            const post = { ...metadata, slug };
            posts.push(post);
        }
    }

    // Сортируем статьи: самые новые будут первыми
    posts = posts.sort((first, second) => 
        new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    return posts;
}