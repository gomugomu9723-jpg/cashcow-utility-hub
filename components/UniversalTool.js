import {useEffect, useMemo, useState} from 'react'
import {useRouter} from 'next/router'
import {getQueryLocale} from '../lib/i18n'

const number = (value) => {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

const fmt = (value, digits = 2) => Number(value || 0).toLocaleString('ko-KR', {maximumFractionDigits: digits})

function Field({label, value, onChange, type = 'number', placeholder}) {
  return (
    <label className="block text-sm font-semibold text-slate-700">
      {label}
      <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}

function Result({children}) {
  return <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm text-slate-800">{children}</div>
}

function useLocaleText(groups) {
  const router = useRouter()
  const locale = getQueryLocale(router)
  return groups[locale] || groups.en
}

const controlText = {
  ko: {
    min: '최소값',
    max: '최대값',
    roll: '굴리기',
    flip: '던지기',
    sides: '면 수',
    heads: '앞면',
    tails: '뒷면',
    start: '시작',
    pause: '일시정지',
    reset: '초기화',
    set: '설정',
    minutes: '분',
    seconds: '초',
    remaining: '남은 시간',
    elapsed: '경과 시간',
    done: '완료',
    birth: '생년월일',
    age: '만 나이',
    years: '세',
    from: '시작일',
    to: '종료일',
    businessDays: '영업일',
    days: '일',
  },
  en: {
    min: 'Minimum',
    max: 'Maximum',
    roll: 'Roll',
    flip: 'Flip',
    sides: 'Sides',
    heads: 'Heads',
    tails: 'Tails',
    start: 'Start',
    pause: 'Pause',
    reset: 'Reset',
    set: 'Set',
    minutes: 'Minutes',
    seconds: 'Seconds',
    remaining: 'Remaining',
    elapsed: 'Elapsed',
    done: 'Done',
    birth: 'Birth date',
    age: 'Age',
    years: 'years old',
    from: 'Start date',
    to: 'End date',
    businessDays: 'Business days',
    days: 'days',
  },
  ja: {
    min: '最小値',
    max: '最大値',
    roll: '振る',
    flip: '投げる',
    sides: '面数',
    heads: '表',
    tails: '裏',
    start: '開始',
    pause: '一時停止',
    reset: 'リセット',
    set: '設定',
    minutes: '分',
    seconds: '秒',
    remaining: '残り時間',
    elapsed: '経過時間',
    done: '完了',
    birth: '生年月日',
    age: '年齢',
    years: '歳',
    from: '開始日',
    to: '終了日',
    businessDays: '営業日',
    days: '日',
  },
  zh: {
    min: '最小值',
    max: '最大值',
    roll: '掷骰',
    flip: '抛掷',
    sides: '面数',
    heads: '正面',
    tails: '反面',
    start: '开始',
    pause: '暂停',
    reset: '重置',
    set: '设置',
    minutes: '分钟',
    seconds: '秒',
    remaining: '剩余时间',
    elapsed: '经过时间',
    done: '完成',
    birth: '出生日期',
    age: '年龄',
    years: '岁',
    from: '开始日期',
    to: '结束日期',
    businessDays: '工作日',
    days: '天',
  },
  es: {
    min: 'Mínimo',
    max: 'Máximo',
    roll: 'Lanzar',
    flip: 'Lanzar',
    sides: 'Caras',
    heads: 'Cara',
    tails: 'Cruz',
    start: 'Iniciar',
    pause: 'Pausar',
    reset: 'Reiniciar',
    set: 'Aplicar',
    minutes: 'Minutos',
    seconds: 'Segundos',
    remaining: 'Tiempo restante',
    elapsed: 'Tiempo transcurrido',
    done: 'Completado',
    birth: 'Fecha de nacimiento',
    age: 'Edad',
    years: 'años',
    from: 'Fecha inicial',
    to: 'Fecha final',
    businessDays: 'Días laborables',
    days: 'días',
  },
  fr: {
    min: 'Minimum',
    max: 'Maximum',
    roll: 'Lancer',
    flip: 'Lancer',
    sides: 'Faces',
    heads: 'Pile',
    tails: 'Face',
    start: 'Démarrer',
    pause: 'Pause',
    reset: 'Réinitialiser',
    set: 'Appliquer',
    minutes: 'Minutes',
    seconds: 'Secondes',
    remaining: 'Temps restant',
    elapsed: 'Temps écoulé',
    done: 'Terminé',
    birth: 'Date de naissance',
    age: 'Âge',
    years: 'ans',
    from: 'Date de début',
    to: 'Date de fin',
    businessDays: 'Jours ouvrés',
    days: 'jours',
  },
}

const formatDuration = (totalSeconds) => {
  const safe = Math.max(0, Math.floor(totalSeconds))
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function UniversalTool({tool}) {
  switch (tool.type) {
    case 'percent': return <PercentTool />
    case 'vat': return <VatTool />
    case 'tax33': return <Tax33Tool />
    case 'interest': return <InterestTool />
    case 'crypto': return <CryptoTool />
    case 'area': return <AreaTool />
    case 'text': return <TextTool />
    case 'timezone': return <TimezoneTool />
    case 'pomodoro': return <PomodoroTool />
    case 'json': return <JsonTool />
    case 'regex': return <RegexTool />
    case 'password': return <PasswordTool />
    case 'redact': return <RedactTool />
    case 'url': return <UrlTool />
    case 'burn': return <BurnTool />
    case 'color': return <ColorTool />
    case 'font': return <FontTool />
    case 'nickname': return <NicknameTool />
    case 'gpa': return <GpaTool />
    case 'gym': return <GymTool />
    case 'pet': return <PetTool />
    case 'coffee': return <CoffeeTool />
    case 'sla': return <SlaTool />
    case 'carbon': return <CarbonTool />
    case 'ttfb': return <TtfbTool />
    case 'resistor': return <ResistorTool />
    case 'construction': return <ConstructionTool />
    case 'elbow': return <ElbowTool />
    case 'case': return <TextTransformTool mode="case" />
    case 'whitespace': return <TextTransformTool mode="whitespace" />
    case 'lorem': return <LoremTool />
    case 'markdown': return <MarkdownTool />
    case 'csv': return <CsvTool />
    case 'dedupe': return <LineTool mode="dedupe" />
    case 'sort-lines': return <LineTool mode="sort" />
    case 'diff': return <DiffTool />
    case 'slug': return <SlugTool />
    case 'base64': return <CodecTool mode="base64" />
    case 'url-codec': return <CodecTool mode="url" />
    case 'html-codec': return <CodecTool mode="html" />
    case 'minify-html': return <MinifyTool mode="html" />
    case 'minify-css': return <MinifyTool mode="css" />
    case 'minify-js': return <MinifyTool mode="js" />
    case 'jwt': return <JwtTool />
    case 'uuid': return <UuidTool />
    case 'timestamp': return <TimestampTool />
    case 'gradient': return <GradientTool />
    case 'box-shadow': return <BoxShadowTool />
    case 'radius': return <RadiusTool />
    case 'clamp': return <ClampTool />
    case 'aspect': return <AspectTool />
    case 'hex-rgba': return <HexRgbaTool />
    case 'color-mix': return <ColorMixTool />
    case 'image-ratio': return <ImageRatioTool />
    case 'og': return <OgTool />
    case 'utm': return <UtmTool />
    case 'keyword-density': return <KeywordDensityTool />
    case 'random-number': return <LocalizedRandomNumberTool />
    case 'list-random': return <ListRandomTool />
    case 'team': return <TeamTool />
    case 'dice': return <LocalizedDiceTool />
    case 'coin': return <LocalizedCoinTool />
    case 'stopwatch': return <LocalizedStopwatchTool />
    case 'countdown': return <LocalizedCountdownTool />
    case 'age': return <LocalizedAgeTool />
    case 'business-day': return <LocalizedBusinessDayTool />
    case 'tip': return <TipTool />
    case 'discount': return <DiscountTool />
    case 'salary': return <SalaryTool />
    case 'fuel': return <FuelTool />
    case 'water': return <WaterTool />
    case 'calorie': return <CalorieTool />
    case 'bmi-water': return <BmiWaterTool />
    case 'grocery': return <ListEditorTool title="장보기 목록" />
    case 'meeting': return <MeetingTool />
    case 'notepad': return <NotepadTool />
    case 'bar-chart': return <BarChartTool />
    case 'pie-chart': return <PieChartTool />
    default: return <div className="card">이 도구는 준비 중입니다.</div>
  }
}

function PercentTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [base, setBase] = useState('100')
  const [value, setValue] = useState('15')
  const b = number(base)
  const v = number(value)
  const labels = {
    ko: {base: '기준값', value: '비교값 / 퍼센트', of: '의', is: '는', change: '변화율'},
    en: {base: 'Base value', value: 'Comparison value / percent', of: 'of', is: 'is', change: 'Change rate'},
    ja: {base: '基準値', value: '比較値 / パーセント', of: 'の', is: 'は', change: '変化率'},
    zh: {base: '基准值', value: '比较值 / 百分比', of: '的', is: '是', change: '变化率'},
    es: {base: 'Valor base', value: 'Valor comparado / porcentaje', of: 'de', is: 'es', change: 'Tasa de cambio'},
    fr: {base: 'Valeur de base', value: 'Valeur comparée / pourcentage', of: 'de', is: 'vaut', change: 'Taux de variation'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.base} value={base} onChange={setBase} /><Field label={t.value} value={value} onChange={setValue} /><Result><div>{fmt(v)}% {t.of} {fmt(b)} = <b>{fmt(b * v / 100)}</b></div><div>{fmt(v)} {t.is} <b>{b ? fmt(v / b * 100) : 0}%</b> {t.of} {fmt(b)}</div><div>{t.change}: <b>{b ? fmt((v - b) / b * 100) : 0}%</b></div></Result></div>
}

function VatTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [amount, setAmount] = useState('100000')
  const [rate, setRate] = useState(locale === 'ja' ? '10' : locale === 'fr' ? '20' : locale === 'es' ? '21' : '10')
  const a = number(amount)
  const r = Math.max(0, Math.min(100, number(rate))) / 100
  const labels = {
    ko: {amount: '금액', rate: '세율 (%)', tax: '세액', total: '세금 포함 합계', base: '세전 금액', included: '입력값이 세금 포함 금액이라면'},
    en: {amount: 'Amount', rate: 'Tax rate (%)', tax: 'Tax amount', total: 'Tax-included total', base: 'Pre-tax amount', included: 'If the input already includes tax'},
    ja: {amount: '金額', rate: '税率 (%)', tax: '税額', total: '税込合計', base: '税抜金額', included: '入力が税込金額の場合'},
    zh: {amount: '金额', rate: '税率 (%)', tax: '税额', total: '含税总额', base: '税前金额', included: '如果输入值已含税'},
    es: {amount: 'Importe', rate: 'Tipo impositivo (%)', tax: 'Impuesto', total: 'Total con impuesto', base: 'Importe antes de impuesto', included: 'Si el importe ya incluye impuesto'},
    fr: {amount: 'Montant', rate: 'Taux de taxe (%)', tax: 'Taxe', total: 'Total TTC', base: 'Montant HT', included: 'Si le montant inclut déjà la taxe'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.amount} value={amount} onChange={setAmount} /><Field label={t.rate} value={rate} onChange={setRate} /><Result><div>{t.tax}: <b>{fmt(a * r)}</b>, {t.total}: <b>{fmt(a * (1 + r))}</b></div><div>{t.included}: {t.base} <b>{fmt(a / (1 + r))}</b>, {t.tax} <b>{fmt(a - a / (1 + r))}</b></div></Result></div>
}

function Tax33Tool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [amount, setAmount] = useState('1000000')
  const [rate, setRate] = useState(locale === 'ko' ? '3.3' : '10')
  const a = number(amount)
  const r = Math.max(0, Math.min(100, number(rate))) / 100
  const labels = {
    ko: {amount: '계약/지급 금액', rate: '공제 세율 (%)', tax: '공제 세액', net: '공제 후 금액', gross: '이 금액을 실수령액으로 받으려면 세전 금액'},
    en: {amount: 'Contract or payment amount', rate: 'Withholding rate (%)', tax: 'Tax withheld', net: 'After-tax amount', gross: 'Gross amount needed for this net amount'},
    ja: {amount: '契約・支払金額', rate: '源泉徴収率 (%)', tax: '控除税額', net: '控除後金額', gross: 'この手取り額に必要な税引前金額'},
    zh: {amount: '合同或支付金额', rate: '预扣税率 (%)', tax: '预扣税额', net: '税后金额', gross: '获得该税后金额所需的税前金额'},
    es: {amount: 'Importe del contrato o pago', rate: 'Tasa de retención (%)', tax: 'Impuesto retenido', net: 'Importe después de impuestos', gross: 'Importe bruto necesario para este neto'},
    fr: {amount: 'Montant du contrat ou paiement', rate: 'Taux de retenue (%)', tax: 'Impôt retenu', net: 'Montant après impôt', gross: 'Montant brut nécessaire pour ce net'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.amount} value={amount} onChange={setAmount} /><Field label={t.rate} value={rate} onChange={setRate} /><Result><div>{t.tax}: <b>{fmt(a * r)}</b></div><div>{t.net}: <b>{fmt(a * (1 - r))}</b></div><div>{t.gross}: <b>{fmt((1 - r) ? a / (1 - r) : 0)}</b></div></Result></div>
}

function InterestTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [principal, setPrincipal] = useState('1000000')
  const [rate, setRate] = useState('5')
  const [years, setYears] = useState('3')
  const p = number(principal), r = number(rate) / 100, y = number(years)
  const simple = p * (1 + r * y)
  const compound = p * Math.pow(1 + r, y)
  const labels = {
    ko: {principal: '원금', rate: '연 이율 (%)', years: '기간 (년)', simple: '단리 만기금액', compound: '복리 만기금액'},
    en: {principal: 'Principal', rate: 'Annual rate (%)', years: 'Term (years)', simple: 'Simple-interest final amount', compound: 'Compound-interest final amount'},
    ja: {principal: '元本', rate: '年利 (%)', years: '期間 (年)', simple: '単利の満期金額', compound: '複利の満期金額'},
    zh: {principal: '本金', rate: '年利率 (%)', years: '期限 (年)', simple: '单利到期金额', compound: '复利到期金额'},
    es: {principal: 'Principal', rate: 'Tasa anual (%)', years: 'Plazo (años)', simple: 'Importe final con interés simple', compound: 'Importe final con interés compuesto'},
    fr: {principal: 'Capital', rate: 'Taux annuel (%)', years: 'Durée (années)', simple: 'Montant final en intérêt simple', compound: 'Montant final en intérêt composé'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.principal} value={principal} onChange={setPrincipal} /><Field label={t.rate} value={rate} onChange={setRate} /><Field label={t.years} value={years} onChange={setYears} /><Result><div>{t.simple}: <b>{fmt(simple)}</b></div><div>{t.compound}: <b>{fmt(compound)}</b></div></Result></div>
}

function CryptoTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [buy, setBuy] = useState('100')
  const [sell, setSell] = useState('120')
  const [qty, setQty] = useState('10')
  const cost = number(buy) * number(qty)
  const revenue = number(sell) * number(qty)
  const labels = {
    ko: {buy: '매수가', sell: '매도가', qty: '수량', pnl: '손익', roi: '수익률'},
    en: {buy: 'Buy price', sell: 'Sell price', qty: 'Quantity', pnl: 'Profit / loss', roi: 'Return'},
    ja: {buy: '購入価格', sell: '売却価格', qty: '数量', pnl: '損益', roi: '利回り'},
    zh: {buy: '买入价', sell: '卖出价', qty: '数量', pnl: '盈亏', roi: '收益率'},
    es: {buy: 'Precio de compra', sell: 'Precio de venta', qty: 'Cantidad', pnl: 'Ganancia / pérdida', roi: 'Rentabilidad'},
    fr: {buy: 'Prix d’achat', sell: 'Prix de vente', qty: 'Quantité', pnl: 'Gain / perte', roi: 'Rendement'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.buy} value={buy} onChange={setBuy} /><Field label={t.sell} value={sell} onChange={setSell} /><Field label={t.qty} value={qty} onChange={setQty} /><Result><div>{t.pnl}: <b>{fmt(revenue - cost)}</b></div><div>{t.roi}: <b>{cost ? fmt((revenue - cost) / cost * 100) : 0}%</b></div></Result></div>
}

function AreaTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [pyeong, setPyeong] = useState('24')
  const p = number(pyeong)
  const labels = {
    ko: {input: '평', pyeong: '평'},
    en: {input: 'Pyeong', pyeong: 'pyeong'},
    ja: {input: '坪数', pyeong: '坪'},
    zh: {input: '坪数', pyeong: '坪'},
    es: {input: 'Pyeong', pyeong: 'pyeong'},
    fr: {input: 'Pyeong', pyeong: 'pyeong'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.input} value={pyeong} onChange={setPyeong} /><Result><div>{fmt(p)} {t.pyeong} = <b>{fmt(p * 3.305785)}㎡</b></div><div>{fmt(p)}㎡ = <b>{fmt(p / 3.305785)} {t.pyeong}</b></div></Result></div>
}

function TextTool() {
  const [text, setText] = useState('')
  const bytes = typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(text).length : text.length
  return <div className="card space-y-3"><textarea className="min-h-[220px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} placeholder="텍스트를 붙여넣으세요." /><Result><div>글자 수: <b>{text.length}</b></div><div>공백 제외: <b>{text.replace(/\s/g, '').length}</b></div><div>단어 수: <b>{text.trim() ? text.trim().split(/\s+/).length : 0}</b></div><div>줄 수: <b>{text ? text.split(/\n/).length : 0}</b></div><div>UTF-8 바이트: <b>{bytes}</b></div></Result></div>
}

function TimezoneTool() {
  const [time, setTime] = useState(() => new Date().toISOString().slice(0, 16))
  const zones = ['Asia/Seoul', 'UTC', 'America/New_York', 'America/Los_Angeles', 'Europe/London', 'Europe/Paris', 'Asia/Tokyo']
  const date = new Date(time)
  return <div className="card space-y-3"><Field label="기준 시간" type="datetime-local" value={time} onChange={setTime} /><Result>{zones.map((zone) => <div key={zone}>{zone}: <b>{Number.isNaN(date.getTime()) ? '-' : new Intl.DateTimeFormat('ko-KR', {dateStyle: 'medium', timeStyle: 'short', timeZone: zone}).format(date)}</b></div>)}</Result></div>
}

function PomodoroTool() {
  const [focus, setFocus] = useState('25')
  const [rest, setRest] = useState('5')
  return <div className="card space-y-3"><Field label="집중 시간(분)" value={focus} onChange={setFocus} /><Field label="휴식 시간(분)" value={rest} onChange={setRest} /><Result>추천 루틴: <b>{focus}분 집중 + {rest}분 휴식</b>을 4회 반복 후 긴 휴식 15~30분.</Result></div>
}

function JsonTool() {
  const [input, setInput] = useState('{"hello":"world"}')
  const output = useMemo(() => { try { return JSON.stringify(JSON.parse(input), null, 2) } catch (e) { return `오류: ${e.message}` } }, [input])
  return <div className="card space-y-3"><textarea className="min-h-[180px] w-full rounded-xl border border-slate-200 p-3 font-mono text-sm" value={input} onChange={(e) => setInput(e.target.value)} /><pre className="overflow-auto rounded-xl bg-slate-950 p-4 text-sm text-emerald-100">{output}</pre></div>
}

function RegexTool() {
  const [pattern, setPattern] = useState('\\w+')
  const [text, setText] = useState('hello 123')
  let matches = []
  let error = ''
  try { matches = [...text.matchAll(new RegExp(pattern, 'g'))].map((m) => m[0]) } catch (e) { error = e.message }
  return <div className="card space-y-3"><Field label="정규식" type="text" value={pattern} onChange={setPattern} /><textarea className="min-h-[140px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result>{error ? <b>{error}</b> : <div>매칭 {matches.length}개: <b>{matches.join(', ') || '-'}</b></div>}</Result></div>
}

function PasswordTool() {
  const [len, setLen] = useState('16')
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*'
  const password = useMemo(() => Array.from({length: Math.max(4, Math.min(64, number(len)))}, (_, i) => chars[(i * 17 + number(len) * 7) % chars.length]).join(''), [len])
  return <div className="card space-y-3"><Field label="길이" value={len} onChange={setLen} /><Result><div className="break-all font-mono text-lg"><b>{password}</b></div></Result></div>
}

function RedactTool() {
  const [text, setText] = useState('')
  const redacted = text.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[email]').replace(/01[016789]-?\d{3,4}-?\d{4}/g, '[phone]').replace(/\d{6}-?[1-4]\d{6}/g, '[id]')
  return <div className="card space-y-3"><textarea className="min-h-[160px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} placeholder="마스킹할 텍스트" /><Result><pre className="whitespace-pre-wrap">{redacted || '결과가 여기에 표시됩니다.'}</pre></Result></div>
}

function UrlTool() {
  const [url, setUrl] = useState('https://example.com')
  let result = '정상 URL 형식입니다.'
  try {
    const parsed = new URL(url)
    const suspicious = parsed.hostname.includes('xn--') || /@|%00|login|verify|secure|update/i.test(url)
    result = suspicious ? '의심 패턴이 있습니다. 접속 전 주소를 다시 확인하세요.' : `${parsed.protocol} / ${parsed.hostname}`
  } catch { result = '올바른 URL 형식이 아닙니다.' }
  return <div className="card space-y-3"><Field label="URL" type="text" value={url} onChange={setUrl} /><Result>{result}</Result></div>
}

function BurnTool() {
  const [text, setText] = useState('')
  const [hidden, setHidden] = useState(false)
  return <div className="card space-y-3">{hidden ? <Result>메모를 숨겼습니다. 새로고침하면 사라집니다.</Result> : <><textarea className="min-h-[160px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><button className="btn-primary" onClick={() => setHidden(true)}>읽고 숨기기</button></>}</div>
}

function ColorTool() {
  const [fg, setFg] = useState('#111827')
  const [bg, setBg] = useState('#ffffff')
  const lum = (hex) => {
    const v = hex.replace('#', '').match(/.{2}/g)?.map((x) => parseInt(x, 16) / 255) || [0,0,0]
    const [r,g,b] = v.map((c) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
    return 0.2126*r + 0.7152*g + 0.0722*b
  }
  const ratio = (Math.max(lum(fg), lum(bg)) + 0.05) / (Math.min(lum(fg), lum(bg)) + 0.05)
  return <div className="card space-y-3"><Field label="글자색 HEX" type="text" value={fg} onChange={setFg} /><Field label="배경색 HEX" type="text" value={bg} onChange={setBg} /><div className="rounded-2xl p-6 text-center font-bold" style={{color: fg, backgroundColor: bg}}>Contrast Preview</div><Result>대비율: <b>{fmt(ratio)}:1</b> / WCAG AA 큰 글자 {ratio >= 3 ? '통과' : '주의'}, 일반 글자 {ratio >= 4.5 ? '통과' : '주의'}</Result></div>
}

function FontTool() {
  const [text, setText] = useState('Utility Hub 유틸리티 허브 123')
  const fonts = ['Arial', 'Georgia', 'Times New Roman', 'Verdana', 'Courier New', 'system-ui']
  return <div className="card space-y-3"><Field label="문장" type="text" value={text} onChange={setText} />{fonts.map((font) => <div key={font} className="rounded-xl border border-slate-200 p-3" style={{fontFamily: font}}><div className="text-xs text-slate-500">{font}</div><div className="text-xl">{text}</div></div>)}</div>
}

function NicknameTool() {
  const [seed, setSeed] = useState('cash')
  const words = ['Nova', 'Pixel', 'Mint', 'Orbit', 'Stone', 'Luna', 'Spark', 'Wave']
  const names = words.map((word, i) => `${word}${seed.replace(/\s+/g, '')}${i + 1}`)
  return <div className="card space-y-3"><Field label="키워드/이름" type="text" value={seed} onChange={setSeed} /><Result>{names.map((name) => <div key={name}><b>{name}</b></div>)}</Result></div>
}

function GpaTool() {
  const [score, setScore] = useState('4.0')
  const [scale, setScale] = useState('4.5')
  const s = number(score), max = number(scale)
  return <div className="card space-y-3"><Field label="내 학점" value={score} onChange={setScore} /><Field label="만점 기준" value={scale} onChange={setScale} /><Result><div>4.5 기준: <b>{fmt(s / max * 4.5)}</b></div><div>4.3 기준: <b>{fmt(s / max * 4.3)}</b></div><div>100점 기준: <b>{fmt(s / max * 100)}</b></div></Result></div>
}

function GymTool() {
  const [weight, setWeight] = useState('80')
  const [reps, setReps] = useState('8')
  const [target, setTarget] = useState('100')
  const oneRm = number(weight) * (1 + number(reps) / 30)
  const plates = [25,20,15,10,5,2.5,1.25]
  let remain = Math.max(0, (number(target) - 20) / 2)
  const used = []
  plates.forEach((p) => { while (remain >= p) { used.push(p); remain -= p } })
  return <div className="card space-y-3"><Field label="중량(kg)" value={weight} onChange={setWeight} /><Field label="반복 횟수" value={reps} onChange={setReps} /><Field label="목표 총 중량(kg, 20kg 바 기준)" value={target} onChange={setTarget} /><Result><div>예상 1RM: <b>{fmt(oneRm)}kg</b></div><div>한쪽 원판: <b>{used.join(' + ') || '없음'}kg</b></div></Result></div>
}

function PetTool() {
  const [kg, setKg] = useState('5')
  const [kcal, setKcal] = useState('350')
  const rer = 70 * Math.pow(number(kg), 0.75)
  return <div className="card space-y-3"><Field label="체중(kg)" value={kg} onChange={setKg} /><Field label="사료 kcal / 100g" value={kcal} onChange={setKcal} /><Result><div>기초 에너지(RER): <b>{fmt(rer)} kcal/day</b></div><div>하루 사료량: <b>{number(kcal) ? fmt(rer / number(kcal) * 100) : 0}g</b></div></Result></div>
}

function CoffeeTool() {
  const [dose, setDose] = useState('18')
  const [bev, setBev] = useState('300')
  const [tds, setTds] = useState('1.35')
  const ey = number(bev) * number(tds) / 100 / number(dose) * 100
  return <div className="card space-y-3"><Field label="원두량(g)" value={dose} onChange={setDose} /><Field label="추출액(g)" value={bev} onChange={setBev} /><Field label="TDS(%)" value={tds} onChange={setTds} /><Result>추출 수율: <b>{fmt(ey)}%</b></Result></div>
}

function SlaTool() {
  const [sla, setSla] = useState('99.9')
  const down = (1 - number(sla) / 100) * 30 * 24 * 60
  return <div className="card space-y-3"><Field label="SLA 가동률(%)" value={sla} onChange={setSla} /><Result><div>월 허용 장애: <b>{fmt(down)}분</b></div><div>연 허용 장애: <b>{fmt(down * 12)}분</b></div></Result></div>
}

function CarbonTool() {
  const [views, setViews] = useState('10000')
  const [mb, setMb] = useState('2')
  const co2 = number(views) * number(mb) * 0.0008
  return <div className="card space-y-3"><Field label="월 페이지뷰" value={views} onChange={setViews} /><Field label="페이지당 전송량(MB)" value={mb} onChange={setMb} /><Result>월 추정 배출량: <b>{fmt(co2)}kg CO2e</b></Result></div>
}

function TtfbTool() {
  const [values, setValues] = useState('120, 180, 240')
  const nums = values.split(/[,\s]+/).map(Number).filter(Number.isFinite).sort((a,b) => a-b)
  const avg = nums.reduce((a,b) => a+b, 0) / (nums.length || 1)
  const p95 = nums[Math.floor((nums.length - 1) * 0.95)] || 0
  return <div className="card space-y-3"><Field label="TTFB 측정값(ms), 쉼표 구분" type="text" value={values} onChange={setValues} /><Result><div>평균: <b>{fmt(avg)}ms</b></div><div>p95: <b>{fmt(p95)}ms</b></div></Result></div>
}

function ResistorTool() {
  const colors = {black:0,brown:1,red:2,orange:3,yellow:4,green:5,blue:6,violet:7,gray:8,white:9}
  const [a, setA] = useState('brown'), [b, setB] = useState('black'), [m, setM] = useState('red')
  const ohm = (colors[a] * 10 + colors[b]) * Math.pow(10, colors[m])
  const select = (value, setter) => <select className="rounded-xl border border-slate-200 px-3 py-2" value={value} onChange={(e) => setter(e.target.value)}>{Object.keys(colors).map((c) => <option key={c}>{c}</option>)}</select>
  return <div className="card space-y-3"><div className="grid gap-3 sm:grid-cols-3">{select(a,setA)}{select(b,setB)}{select(m,setM)}</div><Result>저항값: <b>{fmt(ohm)}Ω</b></Result></div>
}

function ConstructionTool() {
  const [q, setQ] = useState('')
  const terms = [
    ['다루끼', '각재 / 목재 각재'],
    ['헤베', '제곱미터(㎡)'],
    ['루베', '세제곱미터(㎥)'],
    ['아시바', '비계'],
    ['나라시', '고르기 / 면 정리'],
    ['기리', '드릴 비트'],
  ]
  const list = terms.filter(([a,b]) => `${a} ${b}`.includes(q))
  return <div className="card space-y-3"><Field label="검색" type="text" value={q} onChange={setQ} placeholder="예: 헤베" /><Result>{list.map(([a,b]) => <div key={a}><b>{a}</b> → {b}</div>)}</Result></div>
}

function ElbowTool() {
  const [offset, setOffset] = useState('300')
  const [angle, setAngle] = useState('45')
  const travel = number(offset) / Math.sin(number(angle) * Math.PI / 180)
  return <div className="card space-y-3"><Field label="오프셋 거리(mm)" value={offset} onChange={setOffset} /><Field label="엘보 각도(도)" value={angle} onChange={setAngle} /><Result>대각 이동거리: <b>{fmt(travel)}mm</b></Result></div>
}

function TextTransformTool({mode}) {
  const [text, setText] = useState('Utility Hub makes tools faster.')
  const titleCase = text.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase())
  const out = mode === 'whitespace'
    ? text.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim()
    : `UPPER\n${text.toUpperCase()}\n\nlower\n${text.toLowerCase()}\n\nTitle\n${titleCase}`
  return <div className="card space-y-3"><textarea className="min-h-[160px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result><pre className="whitespace-pre-wrap">{out}</pre></Result></div>
}

function LoremTool() {
  const [count, setCount] = useState('3')
  const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo non risus facilisis feugiat.'
  return <div className="card space-y-3"><Field label="문단 수" value={count} onChange={setCount} /><Result><p className="whitespace-pre-wrap">{Array.from({length: Math.max(1, Math.min(12, number(count)))}, () => sentence).join('\n\n')}</p></Result></div>
}

function MarkdownTool() {
  const [text, setText] = useState('# 제목\n\n**굵게** 그리고 `code`\n\n- 항목 1\n- 항목 2')
  const html = text
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/^- (.*)$/gm, '<li>$1</li>')
    .replace(/\n/g, '<br />')
  return <div className="card space-y-3"><textarea className="min-h-[160px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result><div className="prose max-w-none" dangerouslySetInnerHTML={{__html: html}} /></Result></div>
}

function CsvTool() {
  const [csv, setCsv] = useState('name,score\nKim,90\nLee,85')
  const rows = csv.split('\n').filter(Boolean).map((row) => row.split(','))
  return <div className="card space-y-3"><textarea className="min-h-[140px] w-full rounded-xl border border-slate-200 p-3 font-mono text-sm" value={csv} onChange={(e) => setCsv(e.target.value)} /><div className="overflow-auto"><table className="w-full border-collapse text-sm">{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="border border-slate-200 px-3 py-2">{cell}</td>)}</tr>)}</table></div></div>
}

function LineTool({mode}) {
  const [text, setText] = useState('banana\napple\nbanana\ncarrot')
  const lines = text.split('\n')
  const out = mode === 'dedupe' ? [...new Set(lines)].join('\n') : [...lines].sort((a, b) => a.localeCompare(b)).join('\n')
  return <div className="card space-y-3"><textarea className="min-h-[150px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result><pre className="whitespace-pre-wrap">{out}</pre></Result></div>
}

function DiffTool() {
  const [a, setA] = useState('apple\nbanana')
  const [b, setB] = useState('apple\ncarrot')
  const left = new Set(a.split('\n'))
  const right = new Set(b.split('\n'))
  return <div className="card grid gap-3 md:grid-cols-2"><textarea className="min-h-[160px] rounded-xl border border-slate-200 p-3" value={a} onChange={(e) => setA(e.target.value)} /><textarea className="min-h-[160px] rounded-xl border border-slate-200 p-3" value={b} onChange={(e) => setB(e.target.value)} /><div className="md:col-span-2"><Result><div>왼쪽에만: {[...left].filter((x) => !right.has(x)).join(', ') || '-'}</div><div>오른쪽에만: {[...right].filter((x) => !left.has(x)).join(', ') || '-'}</div></Result></div></div>
}

function SlugTool() {
  const [text, setText] = useState('Utility Hub 무료 도구')
  const slug = text.toLowerCase().trim().replace(/[^a-z0-9가-힣]+/g, '-').replace(/^-|-$/g, '')
  return <div className="card space-y-3"><Field label="제목" type="text" value={text} onChange={setText} /><Result><b>{slug}</b></Result></div>
}

function CodecTool({mode}) {
  const [text, setText] = useState('Hello Utility Hub')
  const base64Encode = (value) => {
    if (typeof btoa !== 'undefined') return btoa(unescape(encodeURIComponent(value)))
    return Buffer.from(value, 'utf8').toString('base64')
  }
  const base64Decode = (value) => {
    if (typeof atob !== 'undefined') return decodeURIComponent(escape(atob(value)))
    return Buffer.from(value, 'base64').toString('utf8')
  }
  const htmlEnc = (s) => s.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
  const htmlDec = (s) => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
  let encoded = '', decoded = ''
  try {
    if (mode === 'base64') { encoded = base64Encode(text); decoded = base64Decode(text) }
    if (mode === 'url') { encoded = encodeURIComponent(text); decoded = decodeURIComponent(text) }
    if (mode === 'html') { encoded = htmlEnc(text); decoded = htmlDec(text) }
  } catch { decoded = '디코딩할 수 없습니다.' }
  return <div className="card space-y-3"><textarea className="min-h-[130px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result><div>Encode: <pre className="whitespace-pre-wrap break-all">{encoded}</pre></div><div className="mt-3">Decode: <pre className="whitespace-pre-wrap break-all">{decoded}</pre></div></Result></div>
}

function MinifyTool({mode}) {
  const [code, setCode] = useState(mode === 'css' ? 'body {\n  color: red;\n}' : mode === 'js' ? 'function hi() {\n  console.log("hi")\n}' : '<div>\n  hello\n</div>')
  const out = code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,<>])\s*/g, '$1').trim()
  return <div className="card space-y-3"><textarea className="min-h-[170px] w-full rounded-xl border border-slate-200 p-3 font-mono text-sm" value={code} onChange={(e) => setCode(e.target.value)} /><Result><pre className="whitespace-pre-wrap break-all">{out}</pre></Result></div>
}

function JwtTool() {
  const [token, setToken] = useState('')
  const decode = (part) => { try { return JSON.stringify(JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/'))), null, 2) } catch { return '디코딩 실패' } }
  const parts = token.split('.')
  return <div className="card space-y-3"><textarea className="min-h-[120px] w-full rounded-xl border border-slate-200 p-3" value={token} onChange={(e) => setToken(e.target.value)} placeholder="JWT를 붙여넣으세요" /><Result><pre>{parts.length >= 2 ? `${decode(parts[0])}\n\n${decode(parts[1])}` : '토큰을 입력하세요.'}</pre></Result></div>
}

function UuidTool() {
  const [count, setCount] = useState('5')
  const ids = useMemo(() => Array.from({length: Math.max(1, Math.min(50, number(count)))}, (_, i) => `00000000-0000-4000-8000-${String(number(count) * 997 + i).padStart(12, '0').slice(-12)}`), [count])
  return <div className="card space-y-3"><Field label="개수" value={count} onChange={setCount} /><Result>{ids.map((id) => <div key={id} className="font-mono">{id}</div>)}</Result></div>
}

function TimestampTool() {
  const [stamp, setStamp] = useState(String(Math.floor(Date.now() / 1000)))
  const d = new Date(number(stamp) * 1000)
  return <div className="card space-y-3"><Field label="Unix timestamp(초)" value={stamp} onChange={setStamp} /><Result><div>날짜: <b>{Number.isNaN(d.getTime()) ? '-' : d.toLocaleString('ko-KR')}</b></div><div>현재 timestamp: <b>{Math.floor(Date.now() / 1000)}</b></div></Result></div>
}

function GradientTool() {
  const [a, setA] = useState('#10b981'), [b, setB] = useState('#3b82f6')
  const css = `linear-gradient(135deg, ${a}, ${b})`
  return <div className="card space-y-3"><Field label="색상 A" type="text" value={a} onChange={setA} /><Field label="색상 B" type="text" value={b} onChange={setB} /><div className="h-28 rounded-2xl" style={{background: css}} /><Result><code>background: {css};</code></Result></div>
}

function BoxShadowTool() {
  const [blur, setBlur] = useState('30'), [y, setY] = useState('12'), [alpha, setAlpha] = useState('0.2')
  const css = `0 ${y}px ${blur}px rgba(15, 23, 42, ${alpha})`
  return <div className="card space-y-3"><Field label="Y offset" value={y} onChange={setY} /><Field label="Blur" value={blur} onChange={setBlur} /><Field label="Alpha" value={alpha} onChange={setAlpha} /><div className="mx-auto h-24 w-48 rounded-2xl bg-white" style={{boxShadow: css}} /><Result><code>box-shadow: {css};</code></Result></div>
}

function RadiusTool() {
  const [r, setR] = useState('24')
  return <div className="card space-y-3"><Field label="Radius(px)" value={r} onChange={setR} /><div className="h-28 bg-emerald-100" style={{borderRadius: `${number(r)}px`}} /><Result><code>border-radius: {number(r)}px;</code></Result></div>
}

function ClampTool() {
  const [min, setMin] = useState('16'), [max, setMax] = useState('40')
  const mid = (number(min) + number(max)) / 32
  return <div className="card space-y-3"><Field label="최소 px" value={min} onChange={setMin} /><Field label="최대 px" value={max} onChange={setMax} /><Result><code>font-size: clamp({min}px, {fmt(mid)}vw, {max}px);</code></Result></div>
}

function AspectTool() {
  const [w, setW] = useState('1920'), [h, setH] = useState('1080'), [newW, setNewW] = useState('800')
  return <div className="card space-y-3"><Field label="원본 가로" value={w} onChange={setW} /><Field label="원본 세로" value={h} onChange={setH} /><Field label="새 가로" value={newW} onChange={setNewW} /><Result>새 세로: <b>{fmt(number(newW) * number(h) / number(w))}px</b></Result></div>
}

function HexRgbaTool() {
  const [hex, setHex] = useState('#10b981'), [alpha, setAlpha] = useState('1')
  const parts = hex.replace('#', '').match(/.{2}/g)?.map((x) => parseInt(x, 16)) || [0,0,0]
  return <div className="card space-y-3"><Field label="HEX" type="text" value={hex} onChange={setHex} /><Field label="Alpha" value={alpha} onChange={setAlpha} /><Result><b>{`rgba(${parts[0]}, ${parts[1]}, ${parts[2]}, ${alpha})`}</b></Result></div>
}

function ColorMixTool() {
  const [a, setA] = useState('#10b981'), [b, setB] = useState('#3b82f6')
  const hexToRgb = (h) => h.replace('#','').match(/.{2}/g)?.map((x) => parseInt(x,16)) || [0,0,0]
  const rgbToHex = (r,g,b) => `#${[r,g,b].map((x) => Math.round(x).toString(16).padStart(2,'0')).join('')}`
  const ar = hexToRgb(a), br = hexToRgb(b)
  const colors = Array.from({length: 7}, (_, i) => rgbToHex(ar[0]+(br[0]-ar[0])*i/6, ar[1]+(br[1]-ar[1])*i/6, ar[2]+(br[2]-ar[2])*i/6))
  return <div className="card space-y-3"><Field label="색상 A" type="text" value={a} onChange={setA} /><Field label="색상 B" type="text" value={b} onChange={setB} /><div className="grid grid-cols-7 overflow-hidden rounded-2xl">{colors.map((c) => <div key={c} className="h-16" style={{background:c}} />)}</div><Result>{colors.join(' ')}</Result></div>
}

function ImageRatioTool() {
  return <AspectTool />
}

function OgTool() {
  const [title, setTitle] = useState('Utility Hub'), [desc, setDesc] = useState('Free browser tools'), [url, setUrl] = useState('https://example.com')
  const code = `<meta property="og:title" content="${title}" />\n<meta property="og:description" content="${desc}" />\n<meta property="og:url" content="${url}" />`
  return <div className="card space-y-3"><Field label="제목" type="text" value={title} onChange={setTitle} /><Field label="설명" type="text" value={desc} onChange={setDesc} /><Field label="URL" type="text" value={url} onChange={setUrl} /><Result><pre className="whitespace-pre-wrap">{code}</pre></Result></div>
}

function UtmTool() {
  const [url, setUrl] = useState('https://example.com'), [source, setSource] = useState('google'), [campaign, setCampaign] = useState('launch')
  const built = `${url}${url.includes('?') ? '&' : '?'}utm_source=${encodeURIComponent(source)}&utm_medium=web&utm_campaign=${encodeURIComponent(campaign)}`
  return <div className="card space-y-3"><Field label="URL" type="text" value={url} onChange={setUrl} /><Field label="Source" type="text" value={source} onChange={setSource} /><Field label="Campaign" type="text" value={campaign} onChange={setCampaign} /><Result><pre className="break-all whitespace-pre-wrap">{built}</pre></Result></div>
}

function KeywordDensityTool() {
  const [text, setText] = useState('tool tool browser utility'), [kw, setKw] = useState('tool')
  const words = text.toLowerCase().match(/\S+/g) || []
  const hits = words.filter((w) => w.includes(kw.toLowerCase())).length
  return <div className="card space-y-3"><Field label="키워드" type="text" value={kw} onChange={setKw} /><textarea className="min-h-[130px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result>밀도: <b>{words.length ? fmt(hits / words.length * 100) : 0}%</b> ({hits}/{words.length})</Result></div>
}

function LocalizedRandomNumberTool() {
  const t = useLocaleText(controlText)
  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [value, setValue] = useState(42)
  const lower = Math.min(number(min), number(max))
  const upper = Math.max(number(min), number(max))
  const pick = () => setValue(Math.floor(Math.random() * (upper - lower + 1)) + lower)

  useEffect(() => {
    pick()
  }, [])

  return (
    <div className="card space-y-3">
      <Field label={t.min} value={min} onChange={setMin} />
      <Field label={t.max} value={max} onChange={setMax} />
      <button className="btn-primary" onClick={pick}>{t.roll}</button>
      <Result><b className="text-3xl">{value}</b></Result>
    </div>
  )
}

function LocalizedDiceTool() {
  const t = useLocaleText(controlText)
  const [sides, setSides] = useState('6')
  const [value, setValue] = useState(1)
  const roll = () => {
    const faces = Math.max(2, Math.floor(number(sides)))
    setValue(Math.floor(Math.random() * faces) + 1)
  }

  useEffect(() => {
    roll()
  }, [])

  return (
    <div className="card space-y-3">
      <Field label={t.sides} value={sides} onChange={setSides} />
      <button className="btn-primary" onClick={roll}>{t.roll}</button>
      <Result><b className="text-3xl">{value}</b></Result>
    </div>
  )
}

function LocalizedCoinTool() {
  const t = useLocaleText(controlText)
  const [side, setSide] = useState(t.heads)
  const flip = () => setSide(Math.random() < 0.5 ? t.heads : t.tails)

  useEffect(() => {
    setSide(t.heads)
  }, [t.heads])

  return (
    <div className="card space-y-3">
      <button className="btn-primary" onClick={flip}>{t.flip}</button>
      <Result><b className="text-3xl">{side}</b></Result>
    </div>
  )
}

function LocalizedStopwatchTool() {
  const t = useLocaleText(controlText)
  const [running, setRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    if (!running) return undefined
    const timer = setInterval(() => setElapsed((current) => current + 1), 1000)
    return () => clearInterval(timer)
  }, [running])

  return (
    <div className="card space-y-3">
      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" onClick={() => setRunning((value) => !value)}>{running ? t.pause : t.start}</button>
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold" onClick={() => { setRunning(false); setElapsed(0) }}>{t.reset}</button>
      </div>
      <Result>{t.elapsed}: <b className="text-3xl">{formatDuration(elapsed)}</b></Result>
    </div>
  )
}

function LocalizedCountdownTool() {
  const t = useLocaleText(controlText)
  const [minutes, setMinutes] = useState('10')
  const [seconds, setSeconds] = useState('0')
  const [remaining, setRemaining] = useState(600)
  const [running, setRunning] = useState(false)
  const total = Math.max(0, Math.floor(number(minutes) * 60 + number(seconds)))

  useEffect(() => {
    if (!running) setRemaining(total)
  }, [running, total])

  useEffect(() => {
    if (!running) return undefined
    const timer = setInterval(() => {
      setRemaining((current) => {
        if (current <= 1) {
          clearInterval(timer)
          setRunning(false)
          return 0
        }
        return current - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [running])

  const applyTime = () => {
    setRunning(false)
    setRemaining(total)
  }

  return (
    <div className="card space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={t.minutes} value={minutes} onChange={setMinutes} />
        <Field label={t.seconds} value={seconds} onChange={setSeconds} />
      </div>
      <div className="flex flex-wrap gap-2">
        <button className="btn-primary" onClick={() => setRunning((value) => remaining > 0 && !value)}>{running ? t.pause : t.start}</button>
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold" onClick={applyTime}>{t.set}</button>
        <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold" onClick={() => { setRunning(false); setRemaining(total) }}>{t.reset}</button>
      </div>
      <Result>{remaining === 0 ? t.done : t.remaining}: <b className="text-3xl">{formatDuration(remaining)}</b></Result>
    </div>
  )
}

function LocalizedAgeTool() {
  const t = useLocaleText(controlText)
  const [birth, setBirth] = useState('2000-01-01')
  const b = new Date(birth)
  const n = new Date()
  let age = n.getFullYear() - b.getFullYear()
  if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) age -= 1

  return (
    <div className="card space-y-3">
      <Field label={t.birth} type="date" value={birth} onChange={setBirth} />
      <Result>{t.age}: <b>{age} {t.years}</b></Result>
    </div>
  )
}

function LocalizedBusinessDayTool() {
  const t = useLocaleText(controlText)
  const [a, setA] = useState('2026-01-01')
  const [b, setB] = useState('2026-01-31')
  let count = 0
  const d = new Date(a)
  const end = new Date(b)
  while (d <= end) {
    const day = d.getDay()
    if (day !== 0 && day !== 6) count += 1
    d.setDate(d.getDate() + 1)
  }

  return (
    <div className="card space-y-3">
      <Field label={t.from} type="date" value={a} onChange={setA} />
      <Field label={t.to} type="date" value={b} onChange={setB} />
      <Result>{t.businessDays}: <b>{count} {t.days}</b></Result>
    </div>
  )
}

function RandomNumberTool() {
  const [min, setMin] = useState('1'), [max, setMax] = useState('100')
  const value = Math.floor(number(min) + ((number(min) * 31 + number(max) * 17) % 997) / 997 * (number(max) - number(min) + 1))
  return <div className="card space-y-3"><Field label="최소" value={min} onChange={setMin} /><Field label="최대" value={max} onChange={setMax} /><Result><b className="text-3xl">{value}</b></Result></div>
}

function ListRandomTool() {
  const [text, setText] = useState('A\nB\nC\nD')
  const out = useMemo(() => text.split('\n').filter(Boolean).sort((a, b) => (a.length * 13 + a.charCodeAt(0)) - (b.length * 13 + b.charCodeAt(0))).join('\n'), [text])
  return <div className="card space-y-3"><textarea className="min-h-[140px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result><pre>{out}</pre></Result></div>
}

function TeamTool() {
  const [text, setText] = useState('Kim\nLee\nPark\nChoi\nJung\nHan'), [teams, setTeams] = useState('2')
  const names = text.split('\n').filter(Boolean)
  const grouped = Array.from({length: Math.max(1, number(teams))}, () => [])
  names.forEach((name, i) => grouped[i % grouped.length].push(name))
  return <div className="card space-y-3"><Field label="팀 수" value={teams} onChange={setTeams} /><textarea className="min-h-[120px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result>{grouped.map((g, i) => <div key={i}><b>팀 {i+1}</b>: {g.join(', ')}</div>)}</Result></div>
}

function DiceTool() {
  const [sides, setSides] = useState('6')
  return <div className="card space-y-3"><Field label="면 수" value={sides} onChange={setSides} /><Result><b className="text-3xl">{(number(sides) * 7 % Math.max(2, number(sides))) + 1}</b></Result></div>
}

function CoinTool() {
  return <div className="card"><Result><b className="text-3xl">앞면</b></Result></div>
}

function StopwatchTool() {
  const [start, setStart] = useState(null)
  const elapsed = start ? Math.floor((Date.now() - start) / 1000) : 0
  return <div className="card space-y-3"><button className="btn-primary" onClick={() => setStart(start ? null : Date.now())}>{start ? '정지' : '시작'}</button><Result><b className="text-3xl">{elapsed}초</b></Result></div>
}

function CountdownTool() {
  const [min, setMin] = useState('10')
  return <div className="card space-y-3"><Field label="분" value={min} onChange={setMin} /><Result>설정 시간: <b>{number(min) * 60}초</b></Result></div>
}

function AgeTool() {
  const [birth, setBirth] = useState('2000-01-01')
  const b = new Date(birth), n = new Date()
  let age = n.getFullYear() - b.getFullYear()
  if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) age -= 1
  return <div className="card space-y-3"><Field label="생년월일" type="date" value={birth} onChange={setBirth} /><Result>만 나이: <b>{age}세</b></Result></div>
}

function BusinessDayTool() {
  const [a, setA] = useState('2026-01-01'), [b, setB] = useState('2026-01-31')
  let count = 0, d = new Date(a), end = new Date(b)
  while (d <= end) { const day = d.getDay(); if (day !== 0 && day !== 6) count++; d.setDate(d.getDate()+1) }
  return <div className="card space-y-3"><Field label="시작일" type="date" value={a} onChange={setA} /><Field label="종료일" type="date" value={b} onChange={setB} /><Result>평일 수: <b>{count}일</b></Result></div>
}

function TipTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [bill, setBill] = useState('50000'), [tip, setTip] = useState('10'), [people, setPeople] = useState('2')
  const total = number(bill) * (1 + number(tip)/100)
  const labels = {
    ko: {bill: '금액', tip: '팁 %', people: '인원', total: '총액', each: '1인'},
    en: {bill: 'Bill amount', tip: 'Tip %', people: 'People', total: 'Total', each: 'Per person'},
    ja: {bill: '金額', tip: 'チップ %', people: '人数', total: '合計', each: '1人あたり'},
    zh: {bill: '账单金额', tip: '小费 %', people: '人数', total: '总额', each: '每人'},
    es: {bill: 'Importe', tip: 'Propina %', people: 'Personas', total: 'Total', each: 'Por persona'},
    fr: {bill: 'Montant', tip: 'Pourboire %', people: 'Personnes', total: 'Total', each: 'Par personne'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.bill} value={bill} onChange={setBill} /><Field label={t.tip} value={tip} onChange={setTip} /><Field label={t.people} value={people} onChange={setPeople} /><Result>{t.total} <b>{fmt(total)}</b> / {t.each} <b>{fmt(total / Math.max(1, number(people)))}</b></Result></div>
}

function DiscountTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [price, setPrice] = useState('100000'), [rate, setRate] = useState('20')
  const sale = number(price) * (1 - number(rate)/100)
  const labels = {
    ko: {price: '정가', rate: '할인율 %', sale: '할인가', saved: '절약'},
    en: {price: 'Original price', rate: 'Discount %', sale: 'Sale price', saved: 'Savings'},
    ja: {price: '定価', rate: '割引率 %', sale: '割引後価格', saved: '節約額'},
    zh: {price: '原价', rate: '折扣率 %', sale: '折后价', saved: '节省'},
    es: {price: 'Precio original', rate: 'Descuento %', sale: 'Precio final', saved: 'Ahorro'},
    fr: {price: 'Prix initial', rate: 'Remise %', sale: 'Prix remisé', saved: 'Économie'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.price} value={price} onChange={setPrice} /><Field label={t.rate} value={rate} onChange={setRate} /><Result>{t.sale} <b>{fmt(sale)}</b> / {t.saved} <b>{fmt(number(price)-sale)}</b></Result></div>
}

function SalaryTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [hourly, setHourly] = useState('10000'), [hours, setHours] = useState('40')
  const labels = {
    ko: {hourly: '시급', hours: '주 근무시간', monthly: '월급 추정', annual: '연봉'},
    en: {hourly: 'Hourly pay', hours: 'Weekly hours', monthly: 'Estimated monthly pay', annual: 'Annual salary'},
    ja: {hourly: '時給', hours: '週の勤務時間', monthly: '月給見積もり', annual: '年収'},
    zh: {hourly: '时薪', hours: '每周工时', monthly: '预估月薪', annual: '年薪'},
    es: {hourly: 'Pago por hora', hours: 'Horas semanales', monthly: 'Pago mensual estimado', annual: 'Salario anual'},
    fr: {hourly: 'Taux horaire', hours: 'Heures hebdomadaires', monthly: 'Paie mensuelle estimée', annual: 'Salaire annuel'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.hourly} value={hourly} onChange={setHourly} /><Field label={t.hours} value={hours} onChange={setHours} /><Result>{t.monthly} <b>{fmt(number(hourly)*number(hours)*4.345)}</b> / {t.annual} <b>{fmt(number(hourly)*number(hours)*52)}</b></Result></div>
}

function FuelTool() {
  const router = useRouter()
  const locale = getQueryLocale(router)
  const [km, setKm] = useState('100'), [eff, setEff] = useState('12'), [price, setPrice] = useState('1700')
  const labels = {
    ko: {km: '거리(km)', eff: '연비(km/L)', price: '연료 단가 / L', cost: '예상 연료비'},
    en: {km: 'Distance (km)', eff: 'Efficiency (km/L)', price: 'Fuel price / L', cost: 'Estimated fuel cost'},
    ja: {km: '距離(km)', eff: '燃費(km/L)', price: '燃料単価 / L', cost: '推定燃料費'},
    zh: {km: '距离(km)', eff: '油耗效率(km/L)', price: '燃油单价 / L', cost: '预估燃油费'},
    es: {km: 'Distancia (km)', eff: 'Eficiencia (km/L)', price: 'Precio de combustible / L', cost: 'Coste estimado'},
    fr: {km: 'Distance (km)', eff: 'Rendement (km/L)', price: 'Prix du carburant / L', cost: 'Coût estimé'},
  }
  const t = labels[locale] || labels.en
  return <div className="card space-y-3"><Field label={t.km} value={km} onChange={setKm} /><Field label={t.eff} value={eff} onChange={setEff} /><Field label={t.price} value={price} onChange={setPrice} /><Result>{t.cost}: <b>{fmt(number(km)/number(eff)*number(price))}</b></Result></div>
}

function WaterTool() {
  const [kg, setKg] = useState('70')
  return <div className="card space-y-3"><Field label="체중(kg)" value={kg} onChange={setKg} /><Result>권장 섭취량: <b>{fmt(number(kg)*35/1000)}L/day</b></Result></div>
}

function CalorieTool() {
  const [kg, setKg] = useState('70'), [cm, setCm] = useState('175'), [age, setAge] = useState('30')
  const bmr = 10*number(kg) + 6.25*number(cm) - 5*number(age) + 5
  return <div className="card space-y-3"><Field label="체중(kg)" value={kg} onChange={setKg} /><Field label="키(cm)" value={cm} onChange={setCm} /><Field label="나이" value={age} onChange={setAge} /><Result>남성 기준 BMR: <b>{fmt(bmr)} kcal</b> / 여성 기준 <b>{fmt(bmr-166)} kcal</b></Result></div>
}

function BmiWaterTool() {
  const [kg, setKg] = useState('70'), [cm, setCm] = useState('175')
  const bmi = number(kg) / Math.pow(number(cm)/100, 2)
  return <div className="card space-y-3"><Field label="체중(kg)" value={kg} onChange={setKg} /><Field label="키(cm)" value={cm} onChange={setCm} /><Result><div>BMI: <b>{fmt(bmi)}</b></div><div>물 섭취량: <b>{fmt(number(kg)*35/1000)}L</b></div></Result></div>
}

function ListEditorTool({title}) {
  const [text, setText] = useState('우유\n계란\n커피')
  return <div className="card space-y-3"><textarea className="min-h-[150px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result><b>{title}</b>{text.split('\n').filter(Boolean).map((item) => <label key={item} className="mt-2 block"><input type="checkbox" className="mr-2" />{item}</label>)}</Result></div>
}

function MeetingTool() {
  const [title, setTitle] = useState('주간 회의'), [agenda, setAgenda] = useState('진행 상황\n이슈\n다음 액션')
  const out = `# ${title}\n\n## 안건\n${agenda.split('\n').map((x) => `- ${x}`).join('\n')}\n\n## 결정사항\n- \n\n## 액션 아이템\n- [ ] `
  return <div className="card space-y-3"><Field label="회의명" type="text" value={title} onChange={setTitle} /><textarea className="min-h-[100px] w-full rounded-xl border border-slate-200 p-3" value={agenda} onChange={(e) => setAgenda(e.target.value)} /><Result><pre className="whitespace-pre-wrap">{out}</pre></Result></div>
}

function NotepadTool() {
  const [text, setText] = useState('')
  return <div className="card space-y-3"><textarea className="min-h-[260px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} placeholder="메모를 입력하세요." /><Result>{text.length}자</Result></div>
}

function BarChartTool() {
  const [text, setText] = useState('A,10\nB,30\nC,20')
  const rows = text.split('\n').map((r) => r.split(',')).filter((r) => r.length >= 2)
  const max = Math.max(...rows.map((r) => number(r[1])), 1)
  return <div className="card space-y-3"><textarea className="min-h-[120px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} />{rows.map(([label, val]) => <div key={label} className="flex items-center gap-3"><div className="w-20 text-sm">{label}</div><div className="h-6 rounded bg-emerald-500" style={{width: `${number(val)/max*70}%`}} /><b>{val}</b></div>)}</div>
}

function PieChartTool() {
  const [text, setText] = useState('A,10\nB,30\nC,20')
  const rows = text.split('\n').map((r) => r.split(',')).filter((r) => r.length >= 2)
  const total = rows.reduce((sum, r) => sum + number(r[1]), 0)
  return <div className="card space-y-3"><textarea className="min-h-[120px] w-full rounded-xl border border-slate-200 p-3" value={text} onChange={(e) => setText(e.target.value)} /><Result>{rows.map(([label, val]) => <div key={label}>{label}: <b>{total ? fmt(number(val)/total*100) : 0}%</b> / {fmt(total ? number(val)/total*360 : 0)}deg</div>)}</Result></div>
}
