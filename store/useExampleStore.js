import { create } from 'zustand';

export const useLoginStore = create((set, get) => ({
  response: {},

  testFunction: () => {
    console.log('test')
  }

}));

// useLoginStore((state) => state.response)
// const { testFunction } = useLoginStore();