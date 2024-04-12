import create from 'zustand';

interface IStore {
  body: any;
  setBody: (newBody: any) => void;
  // newFiles: any;
  // setNewFiles: (newFiles: any) => void;
}

export const useStore = create<IStore>((set) => ({
  body: [],
  // newFiles: [],
  setBody: (newBody: string) => set({ body: newBody }),

  // setNewFiles: (updatedFiles: string) => set({ newFiles: updatedFiles }),
}));