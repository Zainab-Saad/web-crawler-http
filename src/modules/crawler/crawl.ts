const normalizeUrl = (urlString: string): string => {
	const url: URL = new URL(urlString);
	return url.toString().endsWith('/') ? `${url.hostname}${url.pathname.slice(0, -1).toLowerCase()}` : `${url.hostname}${url.pathname.toLowerCase()}`;
};

export { normalizeUrl };
