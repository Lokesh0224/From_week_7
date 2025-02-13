import { atom } from 'recoil'

export const counterAtom= atom({//STEP2:Define your atom outside your component tree
    key:"counter",
    default: 0
  })