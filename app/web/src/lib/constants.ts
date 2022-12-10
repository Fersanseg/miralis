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
} as const;

// Creature size: bulk of parts
export const PARTS_BULK: BulkMap = {
  'TINY': 0,
  'SMALL': 'L',
  'MEDIUM': 1,
  'LARGE': 2,
  'HUGE': 4,
  'GARGANTUAN': 8
}

interface PartsValueMap {
  [level:string]: string
}

interface BulkMap {
  [size:string]: string|number
}