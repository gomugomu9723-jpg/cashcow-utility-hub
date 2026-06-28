import QRCode from '../../tools/qr-code-generator'
import {supportedLocales} from '../../../lib/i18n'

export default QRCode

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
