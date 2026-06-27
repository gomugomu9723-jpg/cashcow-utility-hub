import {useMemo, useState} from 'react'

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
    default: return <div className="card">이 도구는 준비 중입니다.</div>
  }
}

function PercentTool() {
  const [base, setBase] = useState('100')
  const [value, setValue] = useState('15')
  const b = number(base)
  const v = number(value)
  return <div className="card space-y-3"><Field label="기준값" value={base} onChange={setBase} /><Field label="비교값 / 퍼센트" value={value} onChange={setValue} /><Result><div>{fmt(b)}의 {fmt(v)}% = <b>{fmt(b * v / 100)}</b></div><div>{fmt(v)}는 {fmt(b)}의 <b>{b ? fmt(v / b * 100) : 0}%</b></div><div>변화율: <b>{b ? fmt((v - b) / b * 100) : 0}%</b></div></Result></div>
}

function VatTool() {
  const [amount, setAmount] = useState('100000')
  const a = number(amount)
  return <div className="card space-y-3"><Field label="금액" value={amount} onChange={setAmount} /><Result><div>공급가액 기준 부가세: <b>{fmt(a * 0.1)}원</b>, 합계 <b>{fmt(a * 1.1)}원</b></div><div>부가세 포함 금액이라면 공급가액 <b>{fmt(a / 1.1)}원</b>, 부가세 <b>{fmt(a - a / 1.1)}원</b></div></Result></div>
}

function Tax33Tool() {
  const [amount, setAmount] = useState('1000000')
  const a = number(amount)
  return <div className="card space-y-3"><Field label="계약/지급 금액" value={amount} onChange={setAmount} /><Result><div>3.3% 세금: <b>{fmt(a * 0.033)}원</b></div><div>실수령액: <b>{fmt(a * 0.967)}원</b></div><div>실수령액이 이 금액이라면 세전: <b>{fmt(a / 0.967)}원</b></div></Result></div>
}

function InterestTool() {
  const [principal, setPrincipal] = useState('1000000')
  const [rate, setRate] = useState('5')
  const [years, setYears] = useState('3')
  const p = number(principal), r = number(rate) / 100, y = number(years)
  const simple = p * (1 + r * y)
  const compound = p * Math.pow(1 + r, y)
  return <div className="card space-y-3"><Field label="원금" value={principal} onChange={setPrincipal} /><Field label="연 이율 (%)" value={rate} onChange={setRate} /><Field label="기간 (년)" value={years} onChange={setYears} /><Result><div>단리 만기금액: <b>{fmt(simple)}원</b></div><div>복리 만기금액: <b>{fmt(compound)}원</b></div></Result></div>
}

function CryptoTool() {
  const [buy, setBuy] = useState('100')
  const [sell, setSell] = useState('120')
  const [qty, setQty] = useState('10')
  const cost = number(buy) * number(qty)
  const revenue = number(sell) * number(qty)
  return <div className="card space-y-3"><Field label="매수가" value={buy} onChange={setBuy} /><Field label="매도가" value={sell} onChange={setSell} /><Field label="수량" value={qty} onChange={setQty} /><Result><div>손익: <b>{fmt(revenue - cost)}원</b></div><div>수익률: <b>{cost ? fmt((revenue - cost) / cost * 100) : 0}%</b></div></Result></div>
}

function AreaTool() {
  const [pyeong, setPyeong] = useState('24')
  const p = number(pyeong)
  return <div className="card space-y-3"><Field label="평" value={pyeong} onChange={setPyeong} /><Result><div>{fmt(p)}평 = <b>{fmt(p * 3.305785)}㎡</b></div><div>{fmt(p)}㎡ = <b>{fmt(p / 3.305785)}평</b></div></Result></div>
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
