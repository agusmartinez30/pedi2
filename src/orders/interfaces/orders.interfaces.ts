export interface Order {
    readonly id: string;
    readonly status: string;
    readonly total: string;
    readonly user: string;
    readonly table: string;
    readonly products: string[];
    readonly enabled: boolean;
    
}