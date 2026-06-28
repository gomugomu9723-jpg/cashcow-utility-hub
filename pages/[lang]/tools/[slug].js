import DynamicToolPage, {getStaticProps as getToolStaticProps} from '../../tools/[slug]'
import {supportedLocales} from '../../../lib/i18n'
import {tools} from '../../../lib/tools'

export default DynamicToolPage

export function getStaticPaths() {
  return {
    paths: supportedLocales.flatMap((lang) => tools.map((tool) => ({params: {lang, slug: tool.slug}}))),
    fallback: false,
  }
}

export const getStaticProps = getToolStaticProps
