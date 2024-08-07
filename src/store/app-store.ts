import { create } from "zustand";

interface AppState {
	showModal: boolean;
	setShowModal: () => void;
	meshRef: any;
	setMeshRef: (newMeshRef: any) => void;
	startTime: number | undefined;
	setStartTime: () => void;
	showSection: Section | null;
	setShowSection: (payload: Section | null) => void;
}

export type Section = "EXPERIENCE" | "PROJECTS" | "KNOWLEDGE" | "CONTACT";

const initialState = {
	showModal: false,
	meshRef: undefined,
	startTime: undefined,
	showSection: null,
};

const useAppStore = create<AppState>((set) => ({
	...initialState,
	setShowModal: () => set((prevState) => ({ showModal: !prevState.showModal })),
	setMeshRef: (newMeshRef) => set(() => ({ meshRef: newMeshRef })),
	setStartTime: () => set(() => ({ startTime: Date.now() })),
	setShowSection: (payload) => set(() => ({ showSection: payload })),
}));

export default useAppStore;
