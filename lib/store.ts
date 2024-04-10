import create from 'zustand';

interface IStore {
  body: any;
  setBody: (newBody: any) => void;
}

export const useStore = create<IStore>((set) => ({
  body: [],
  setBody: (newBody: string) => set({ body: newBody }),
}));