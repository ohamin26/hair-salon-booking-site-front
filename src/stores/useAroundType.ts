import { create } from 'zustand';

type AroundType = {
  type: 'hair' | 'designer';
  setType: (type: 'hair' | 'designer') => void;
};

export const useAroundType = create<AroundType>((set) => ({
  type: 'hair',
  setType: (type: 'hair' | 'designer') => set(() => ({ type })),
}));
