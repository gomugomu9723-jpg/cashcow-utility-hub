import ToolLayout from '../../components/ToolLayout'
import UniversalTool from '../../components/UniversalTool'
import {useRouter} from 'next/router'
import {getQueryLocale, getToolDisplayDescription, getToolDisplayTitle} from '../../lib/i18n'
import {getDynamicTool, tools} from '../../lib/tools'

export default function DynamicToolPage({tool}) {
  const router = useRouter()
  const locale = getQueryLocale(router)
  if (!tool) return null
  const title = getToolDisplayTitle(locale, tool)
  const description = getToolDisplayDescription(locale, tool)

  return (
    <ToolLayout title={title} description={description}>
      <UniversalTool tool={tool} />
    </ToolLayout>
  )
}

export function getStaticPaths() {
  return {
    paths: tools.map((tool) => ({params: {slug: tool.slug}})),
    fallback: false,
  }
}

export function getStaticProps({params}) {
  return {
    props: {
      tool: getDynamicTool(params.slug) || null,
    },
  }
}
