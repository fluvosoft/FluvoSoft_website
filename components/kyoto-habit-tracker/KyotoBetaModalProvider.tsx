"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import KyotoBetaModal from "./KyotoBetaModal";

type KyotoBetaModalContextValue = {
  openBetaModal: () => void;
};

const KyotoBetaModalContext = createContext<KyotoBetaModalContextValue | null>(null);

export function useKyotoBetaModal() {
  const context = useContext(KyotoBetaModalContext);
  if (!context) {
    throw new Error("useKyotoBetaModal must be used within KyotoBetaModalProvider");
  }
  return context;
}

export function KyotoBetaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const openBetaModal = useCallback(() => setIsOpen(true), []);
  const closeBetaModal = useCallback(() => setIsOpen(false), []);

  return (
    <KyotoBetaModalContext.Provider value={{ openBetaModal }}>
      {children}
      <KyotoBetaModal isOpen={isOpen} onClose={closeBetaModal} />
    </KyotoBetaModalContext.Provider>
  );
}
