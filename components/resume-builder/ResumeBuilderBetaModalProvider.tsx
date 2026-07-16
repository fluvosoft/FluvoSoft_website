"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import ResumeBuilderBetaModal from "./ResumeBuilderBetaModal";

type ResumeBuilderBetaModalContextValue = {
  openBetaModal: () => void;
};

const ResumeBuilderBetaModalContext = createContext<ResumeBuilderBetaModalContextValue | null>(null);

export function useResumeBuilderBetaModal() {
  const context = useContext(ResumeBuilderBetaModalContext);
  if (!context) {
    throw new Error("useResumeBuilderBetaModal must be used within ResumeBuilderBetaModalProvider");
  }
  return context;
}

export function ResumeBuilderBetaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const openBetaModal = useCallback(() => setIsOpen(true), []);
  const closeBetaModal = useCallback(() => setIsOpen(false), []);

  return (
    <ResumeBuilderBetaModalContext.Provider value={{ openBetaModal }}>
      {children}
      <ResumeBuilderBetaModal isOpen={isOpen} onClose={closeBetaModal} />
    </ResumeBuilderBetaModalContext.Provider>
  );
}
