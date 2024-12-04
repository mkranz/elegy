export interface CharacterAsset {
    name: string,
    description: string,
    icon: string,
    group: string,
    abilities: {
      1: string
      2: string
      3: string
    }
    unlockedLevels: {
      1: boolean
      2: boolean
      3: boolean
    }
}

export interface ProgressTrack {
  id: number
  isInitialized: boolean
  title: string
  progress: number
  difficulty: ProgressTrackDifficulty
  type: 'elegies' | 'connections' | 'combat'
  completed: boolean
  role?: string
}

export interface Character {
  info: {
    name: string
    species: string
    progenitor: string
    characteristics: string
    background: string
    embrace: string
    status: string
  }
  stats: {
    force: number
    dexterity: number
    intellect: number
    glamour: number
    heart: number
  },
  meters: {
    health: number,
    spirit: number,
    blood: number
  },
  assets: Array<CharacterAsset>
  bonds: number
  elegies: number
  impacts: {
    wounded: boolean
    permanentlyHarmed: boolean
    starving: boolean
    sinner: boolean
    shaken: boolean
    traumatized: boolean
  }
  experience: {
    total: number
    spent: number
  }
  focus: number
  progressTracks: Array<ProgressTrack>
}

export function createDefaultCharacter(): Character {
  return {
    info: {
      name: '',
      species: '',
      progenitor: '',
      characteristics: '',
      background: '',
      embrace: '',
      status: ''
    },
    stats: {
      force: 5,
      dexterity: 5,
      intellect: 5,
      glamour: 5,
      heart: 5
    },
    meters: {
      health: 5,
      spirit: 5,
      blood: 5
    },
    assets: [],
    bonds: 0,
    elegies: 0,
    impacts: {
      wounded: false,
      permanentlyHarmed: false,
      starving: false,
      sinner: false,
      shaken: false,
      traumatized: false
    },
    experience: {
      total: 0,
      spent: 0
    },
    focus: 10,
    progressTracks: []
  }
} 
export type Stat = 'force' | 'dexterity' | 'intellect' | 'glamour' | 'heart'
export type Meter = 'health' | 'spirit' | 'blood'
export type Impact = 'wounded' | 'permanentlyHarmed' | 'starving' | 'sinner' | 'shaken' | 'traumatized'
export type ProgressTrackType = 'elegies' | 'connections' | 'combat'
export enum ProgressTrackDifficulty {
  troublesome = 'troublesome',
  dangerous = 'dangerous',
  formidable = 'formidable',
  extreme = 'extreme',
  epic = 'epic'
}
