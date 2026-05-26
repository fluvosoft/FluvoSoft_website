"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import EasyInvoiceBetaModal from "./EasyInvoiceBetaModal";

type EasyInvoiceBetaModalContextValue = {
  openBetaModal: () => void;
};

const EasyInvoiceBetaModalContext = createContext<EasyInvoiceBetaModalContextValue | null>(null);

export function useEasyInvoiceBetaModal() {
  const context = useContext(EasyInvoiceBetaModalContext);
  if (!context) {
    throw new Error("useEasyInvoiceBetaModal must be used within EasyInvoiceBetaModalProvider");
  }
  return context;
}

export function EasyInvoiceBetaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openBetaModal = useCallback(() => setIsOpen(true), []);
  const closeBetaModal = useCallback(() => setIsOpen(false), []);

  return (
    <EasyInvoiceBetaModalContext.Provider value={{ openBetaModal }}>
      {children}
      <EasyInvoiceBetaModal isOpen={isOpen} onClose={closeBetaModal} />
    </EasyInvoiceBetaModalContext.Provider>
  );
}
