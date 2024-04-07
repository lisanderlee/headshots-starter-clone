import create from 'zustand';

// Create a Zustand store to manage the state
const useStore = create((set) => ({
  // Initial state
  bodyContent: {},

  // Method to update the body content
   /* @ts-ignore */
  setBodyContent: (content) => set({ bodyContent: content }),

  // Method to reset the body content to its initial state
  resetBodyContent: () => set({ bodyContent: '' }),
}));

export default useStore;