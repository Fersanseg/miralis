import * as PARTS from './monster_properties';

// Creature level: parts value
export const PARTS_VALUE: PartsValueMap = {
  '-1': '1.75gp',
  '0': '3.5gp',
  '1': '5gp', 
  '2': '7gp',
  '3': '12gp',
  '4': '18gp',
  '5': '27gp',
  '6': '45gp',
  '7': '65gp',
  '8': '100gp',
  '9': '140gp',
  '10': '200gp',
  '11': '275gp',
  '12': '390gp',
  '13': '560gp',
  '14': '840gp',
  '15': '1250gp',
  '16': '1850gp',
  '17': '2800gp',
  '18': '4300gp',
  '19': '7000gp',
  '20': '12000gp',
  '21': '17500gp',
  '22': '24000gp',
  '23': '35000gp',
  '24': '48000gp',
  '25': '70000gp'
}

// Creature size: bulk of parts
export const PARTS_BULK: BulkMap = {
  'TINY': 0,
  'SMALL': 'L',
  'MEDIUM': 1,
  'LARGE': 2,
  'HUGE': 4,
  'GARGANTUAN': 8
}

// Property name: color/styles
export const PROPERTY_COLOR: ButtonColorByPropertyMap = {
  "Acídico": "transition-colors text-lime-800 border-lime-500 hover:bg-lime-500 hover:text-lime-100",
  "Alado": "transition-colors text-teal-500 border-teal-400 hover:bg-teal-400 hover:text-cyan-100",
  "Amalgamado": "transition-colors text-amber-900 border-amber-900 hover:bg-amber-900 hover:text-amber-100",
  "Benigno": "transition-colors text-amber-500 border-amber-200 hover:bg-amber-200 hover:text-yellow-500",
  "Carismático": "transition-colors text-pink-600 border-pink-600 hover:bg-pink-600 hover:text-pink-100",
  "Caótico": "transition-colors text-red-700 border-purple-500 hover:bg-blue-700 hover:border-blue-700 hover:text-yellow-400",
  "De Fuerza": "transition-colors text-sky-400 border-gray-100 hover:bg-gray-100",
  "Diestro": "transition-colors text-yellow-700 border-amber-600 hover:bg-amber-600 hover:text-yellow-300",
  "Flagelante": "transition-colors text-red-700 border-red-700 hover:bg-red-700 hover:text-red-200",
  "Fortificada": "transition-colors text-gray-400 border-gray-400 hover:bg-gray-400 hover:text-gray-900",
  "Galvánico": "transition-colors text-yellow-500 border-yellow-300 hover:bg-yellow-300 hover:text-yellow-600",
  "Gélido": "transition-colors text-sky-400 border-sky-400 hover:bg-sky-400 hover:text-blue-600",
  "Hechizado": "transition-colors text-violet-900 border-violet-600 hover:bg-violet-600 hover:text-violet-200",
  "Hercúleo": "transition-colors text-orange-400 border-orange-500 hover:bg-orange-500 hover:text-orange-900",
  "Igneo": "transition-colors text-orange-500 border-rose-600 hover:bg-rose-600 hover:text-orange-300",
  "Inteligente": "transition-colors text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-base-200",
  "Legal": "transition-colors text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-indigo-300", 
  "Maligno": "transition-colors text-red-600 border-slate-900 hover:bg-slate-900",
  "Mental": "transition-colors text-violet-500 border-purple-400 hover:bg-purple-400 hover:text-purple-700",
  "Negativo": "transition-colors text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-gray-100",
  "Positivo": "transition-colors text-gray-500 border-white hover:bg-white hover:text-gray-900",
  "Recio": "transition-colors text-orange-800 border-gray-500 hover:bg-gray-500 hover:text-orange-300",
  "Resistente": "transition-colors text-emerald-500 border-teal-600 hover:bg-teal-600 hover:text-emerald-100",
  "Sabio": "transition-colors text-green-500 border-green-400 hover:bg-green-400 hover:text-green-700",
  "Sensorial": "transition-colors text-rose-300 border-sky-400 hover:bg-sky-400 hover:text-rose-600",
  "Sónico": "transition-colors text-orange-500 border-stone-500 hover:bg-stone-500 hover:text-orange-400",
  "Venenoso": "transition-colors text-purple-700 border-lime-600 hover:bg-lime-600",
  "Vigoroso": "transition-colors text-rose-500 border-red-600 hover:bg-red-600 hover:text-red-200"
}

export const PROPERTIES: PropertiesDescriptionsMap = {
  "Acídico": PARTS.ACIDO_PROP,
  "Alado": PARTS.ALADO_PROP,
  "Amalgamado": PARTS.AMALGAMADO_PROP,
  "Benigno": PARTS.BENIGNO_PROP,
  "Carismático": PARTS.CARISMATICO_PROP,
  "Caótico": PARTS.CAOTICO_PROP,
  "De Fuerza": PARTS.DE_FUERZA_PROP,
  "Diestro": PARTS.DIESTRO_PROP,
  "Flagelante": PARTS.FLAGELANTE_PROP,
  "Fortificada": PARTS.FORTIFICADA_PROP,
  "Galvánico": PARTS.GALVANICO_PROP,
  "Gélido": PARTS.GELIDO_PROP,
  "Hechizado": PARTS.HECHIZADO_PROP,
  "Hercúleo": PARTS.HERCÚLEO_PROP,
  "Igneo": PARTS.IGNEO_PROP,
  "Inteligente": PARTS.INTELIGENTE_PROP,
  "Legal": PARTS.LEGAL_PROP,
  "Maligno": PARTS.MALIGNO_PROP,
  "Mental": PARTS.MENTAL_PROP,
  "Negativo": PARTS.NEGATIVO_PROP,
  "Recio": PARTS.RECIO_PROP,
  "Positivo": PARTS.POSITIVO_PROP,
  "Resistente": PARTS.RESISTENTE_PROP,
  "Sabio": PARTS.SABIO_PROP,
  "Sensorial": PARTS.SENSORIAL_PROP,
  "Sónico": PARTS.SONIC_PROP,
  "Venenoso": PARTS.VENENOSO_PROP,
  "Vigoroso": PARTS.VIGOROSO_PROP
}

interface PartsValueMap {
  [level:string]: string
}

interface BulkMap {
  [size:string]: string|number
}

interface ButtonColorByPropertyMap {
  [prop:string]: string
}

interface PropertiesDescriptionsMap {
  [prop:string]: string
}