import DynamicToolPage from '../../tools/[slug]'
import {getToolDisplayDescription, getToolDisplayTitle, supportedLocales} from '../../../lib/i18n'
import {getDynamicTool, tools} from '../../../lib/tools'

export default DynamicToolPage

export function getStaticPaths() {
  return {
    paths: supportedLocales.flatMap((lang) => tools.map((tool) => ({params: {lang, slug: tool.slug}}))),
    fallback: false,
  }
}

export function getStaticProps({params}) {
  const locale = supportedLocales.includes(params.lang) ? params.lang : 'ko'
  const tool = getDynamicTool(params.slug)

  return {
    props: {
      tool: tool ? {
        ...tool,
        title: getToolDisplayTitle(locale, tool),
        description: getToolDisplayDescription(locale, tool),
      } : null,
    },
  }
}
