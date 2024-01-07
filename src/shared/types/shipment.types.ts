export enum ShipmentStatues {
  TICKET_CREATED = "TICKET_CREATED",
  PACKAGE_RECEIVED = "PACKAGE_RECEIVED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
  IN_TRANSIT = "IN_TRANSIT",
  NOT_YET_SHIPPED = "NOT_YET_SHIPPED",
  WAITING_FOR_CUSTOMER_ACTION = "WAITING_FOR_CUSTOMER_ACTION",
  UNKNOWN = "UNKNOWN",
}

export interface ShipmentType {
  provider: string;
  CurrentStatus: {
    state: keyof typeof ShipmentStatues;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: {
    state: ShipmentStatues;
    timestamp: string;
    hub?: string;
    reason?: string;
  }[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: {
    dayDate: string;
    dayName: string;
  }[];
}
