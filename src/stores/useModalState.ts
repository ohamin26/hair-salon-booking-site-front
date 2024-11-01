import { create } from 'zustand';

type ReviewModalState = {
  isReviewModalOpen: boolean;
  reviewModalOpen: () => void;
  reviewModalClose: () => void;
};

type MapModalState = {
  isMapModalOpen: boolean;
  mapModalOpen: () => void;
  mapModalClose: () => void;
};

export const useReviewModalState = create<ReviewModalState>((set) => ({
  isReviewModalOpen: false,
  reviewModalOpen: () => set(() => ({ isReviewModalOpen: true })),
  reviewModalClose: () => set(() => ({ isReviewModalOpen: false })),
}));

export const useMapModalState = create<MapModalState>((set) => ({
  isMapModalOpen: false,
  mapModalOpen: () => set(() => ({ isMapModalOpen: true })),
  mapModalClose: () => set(() => ({ isMapModalOpen: false })),
}));
