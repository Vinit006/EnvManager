import { create } from 'zustand'


interface EnvManager {
     isEdit: boolean
     toggleEdit: () => void

     //====================================
     bears: number
     increasePopulation: () => void
     removeAllBears: () => void
     updateBears: (newBears: number) => void
}


export const useEnvStore = create<EnvManager>()((set) => ({

     isEdit: false,

     toggleEdit: () => set((state) => {
          return {
               isEdit: !state.isEdit
          }
     }),
     //====================================

     bears: 0,

     increasePopulation: () => set((state) => ({
          bears: state.bears + 1
     })),

     removeAllBears: () => set({
          bears: 0
     }),

     updateBears: (newBears: number) => set({
          bears: newBears
     }),
}))