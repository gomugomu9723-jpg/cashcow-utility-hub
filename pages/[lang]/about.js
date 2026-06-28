import About from '../about'
import {supportedLocales} from '../../lib/i18n'

export default About

export function getStaticPaths() {
  return {
    paths: supportedLocales.map((lang) => ({params: {lang}})),
    fallback: false,
  }
}

export function getStaticProps() {
  return {props: {}}
}
