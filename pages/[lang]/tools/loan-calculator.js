import Loan from '../../tools/loan-calculator'
import {supportedLocales} from '../../../lib/i18n'

export default Loan

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
