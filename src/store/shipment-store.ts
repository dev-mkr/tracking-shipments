import { ShipmentType } from "@/shared/types/shipment.types";
import { create } from "zustand";

interface ShipmentStore {
  shipment: ShipmentType | null;
  ShipmentNumber: string | null;
  setShipment: (shipment: ShipmentType) => void;
  setShipmentNumber: (shipmentNumber: string) => void;
}

export const useShipmentStore = create<ShipmentStore>((set) => ({
  shipment: null,
  ShipmentNumber: null,
  setShipment: (shipment) => set({ shipment }),
  setShipmentNumber: (ShipmentNumber) => set({ ShipmentNumber }),
}));
