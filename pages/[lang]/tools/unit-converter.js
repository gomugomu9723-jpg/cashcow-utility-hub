import UnitConverter from '../../tools/unit-converter'
import {supportedLocales} from '../../../lib/i18n'

export default UnitConverter

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
