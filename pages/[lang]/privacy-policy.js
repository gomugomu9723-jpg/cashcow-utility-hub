import Privacy from '../privacy-policy'
import {supportedLocales} from '../../lib/i18n'

export default Privacy

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
