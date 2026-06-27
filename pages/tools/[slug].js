import ToolLayout from '../../components/ToolLayout'
import UniversalTool from '../../components/UniversalTool'
import {getDynamicTool, tools} from '../../lib/tools'

export default function DynamicToolPage({tool}) {
  if (!tool) return null
  return (
    <ToolLayout title={tool.title} description={tool.description}>
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
