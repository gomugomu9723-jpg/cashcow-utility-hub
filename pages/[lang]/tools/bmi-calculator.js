import BMI from '../../tools/bmi-calculator'
import {supportedLocales} from '../../../lib/i18n'

export default BMI

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
