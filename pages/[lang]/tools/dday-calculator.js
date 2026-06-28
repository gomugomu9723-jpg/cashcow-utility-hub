import DDay from '../../tools/dday-calculator'
import {supportedLocales} from '../../../lib/i18n'

export default DDay

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
