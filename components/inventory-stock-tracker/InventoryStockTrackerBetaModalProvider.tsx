"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import InventoryStockTrackerBetaModal from "./InventoryStockTrackerBetaModal";

type InventoryStockTrackerBetaModalContextValue = {
  openBetaModal: () => void;
};

const InventoryStockTrackerBetaModalContext =
  createContext<InventoryStockTrackerBetaModalContextValue | null>(null);

export function useInventoryStockTrackerBetaModal() {
  const context = useContext(InventoryStockTrackerBetaModalContext);
  if (!context) {
    throw new Error(
      "useInventoryStockTrackerBetaModal must be used within InventoryStockTrackerBetaModalProvider"
    );
  }
  return context;
}

export function InventoryStockTrackerBetaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openBetaModal = useCallback(() => setIsOpen(true), []);
  const closeBetaModal = useCallback(() => setIsOpen(false), []);

  return (
    <InventoryStockTrackerBetaModalContext.Provider value={{ openBetaModal }}>
      {children}
      <InventoryStockTrackerBetaModal isOpen={isOpen} onClose={closeBetaModal} />
    </InventoryStockTrackerBetaModalContext.Provider>
  );
}
