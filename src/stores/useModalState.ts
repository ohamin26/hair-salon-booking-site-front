import { create } from 'zustand';

type ModalState = {
  isModalOpen: boolean;
  modalOpen: () => void;
  modalClose: () => void;
};

export const useModalState = create<ModalState>((set) => ({
  isModalOpen: false,
  modalOpen: () => set(() => ({ isModalOpen: true })),
  modalClose: () => set(() => ({ isModalOpen: false })),
}));
