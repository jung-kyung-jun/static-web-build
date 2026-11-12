/** `base`가 `/저장소이름`이어도 링크가 맞도록 경로를 붙입니다. */
export function withBase(path = ''): string {
	const raw = import.meta.env.BASE_URL || '/';
	const base = raw.endsWith('/') ? raw : `${raw}/`;
	if (!path || path === '/') return base;
	return `${base}${path.replace(/^\//, '')}`;
}

export function normalizePath(path: string): string {
	const trimmed = path.replace(/\/+$/, '');
	return trimmed === '' ? '/' : trimmed;
}
