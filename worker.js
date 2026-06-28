export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response

    const url = new URL(request.url)
    const parts = url.pathname.split('/').filter(Boolean)
    const locales = new Set(['ko', 'en', 'ja', 'zh', 'es', 'fr'])

    if (locales.has(parts[0])) {
      const nextUrl = new URL(request.url)
      nextUrl.pathname = `/${parts.slice(1).join('/')}`
      if (nextUrl.pathname === '/') {
        nextUrl.pathname = '/'
      }
      return env.ASSETS.fetch(new Request(nextUrl, request))
    }

    return response
  },
}
