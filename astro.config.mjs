// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE;

/**
 * 로컬은 `/`, GitHub 프로젝트 페이지는 `/저장소이름`.
 * 사용자 사이트(username.github.io)는 `/`.
 */
function normalizeBase(value) {
	if (!value || value === '/') return '/';
	const withSlash = value.startsWith('/') ? value : `/${value}`;
	return withSlash.replace(/\/$/, '');
}

export default defineConfig({
	...(site ? { site } : {}),
	base: normalizeBase(process.env.BASE_PATH),
	output: 'static',
	markdown: {
		shikiConfig: {
			theme: 'github-light',
		},
	},
});
