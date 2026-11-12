import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

const idPattern = /^(\d{4})\/(\d{2})\/([^/]+)$/;

export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => data.draft !== true);
	return posts
		.filter((post) => idPattern.test(post.id))
		.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postPath(post: Post): string {
	return `blog/${post.id}`;
}

export function monthOf(post: Post): { year: string; month: string } {
	const match = post.id.match(idPattern);
	if (!match) {
		throw new Error(`글 파일은 YYYY/MM/slug.md 경로에 두세요: ${post.id}`);
	}
	return { year: match[1], month: match[2] };
}

export function monthPath(year: string, month: string): string {
	return `blog/${year}/${month}`;
}

export function monthLabel(year: string, month: string): string {
	return `${year}년 ${Number(month)}월`;
}

export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC',
	}).format(date);
}

export function groupByMonth(posts: Post[]): { year: string; month: string; posts: Post[] }[] {
	const groups = new Map<string, { year: string; month: string; posts: Post[] }>();
	for (const post of posts) {
		const { year, month } = monthOf(post);
		const key = `${year}/${month}`;
		const group = groups.get(key) ?? { year, month, posts: [] };
		group.posts.push(post);
		groups.set(key, group);
	}
	return [...groups.values()];
}

export function collectTerms(posts: Post[], pick: (post: Post) => string[]): { name: string; count: number }[] {
	const counts = new Map<string, number>();
	for (const post of posts) {
		for (const name of pick(post)) {
			counts.set(name, (counts.get(name) ?? 0) + 1);
		}
	}
	return [...counts.entries()]
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'ko'));
}
