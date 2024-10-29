import { create } from 'zustand';

type NavType = {
  type: 'info' | 'review';
  setType: (type: 'info' | 'review') => void;
};

export const useNavType = create<NavType>((set) => ({
  type: 'info',
  setType: (type: 'info' | 'review') => set(() => ({ type })),
}));
