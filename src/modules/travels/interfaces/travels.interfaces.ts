export interface Travel {
    readonly id: string;
    readonly userId: string;
    readonly driverId: string;
    readonly orderId: string;
    readonly status: string;
    readonly startTime: Date;
    readonly endTime: Date;
    readonly distance: number;
    readonly price: number;
    readonly origin: {
        type: "Point",
        coordinates: [number, number]
    };
    readonly destination: {
        type: "Point",
        coordinates: [number, number]
    };
    readonly createdAt: Date;
    readonly rating: number;
    readonly comments: string;
}
