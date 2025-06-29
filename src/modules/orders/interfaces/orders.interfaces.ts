export interface Order {
    readonly id: string;
    readonly total: string;
    readonly user: string;
    readonly table: string;
    readonly products: string[];
    readonly enabled: boolean;
    readonly createdAt: Date;
    readonly distance: number;
    readonly price: number;
    readonly pictures: string[];
    readonly status: string;
    readonly driverId: string;
    readonly userId: string;
    readonly title: string;
    readonly description: string;
    readonly origin: {
        type: "Point",
        coordinates: [number, number]
    };
    readonly destination: {
        type: "Point",
        coordinates: [number, number]
    };

}