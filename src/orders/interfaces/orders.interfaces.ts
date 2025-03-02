export interface Order {
    readonly id: string;
    readonly status: string;
    readonly total: string;
    readonly user: string;
    readonly table: string;
    readonly products: Array<{
        product_id: string;
        quantity: number;
    }>;
    readonly enabled: boolean;
    totalAmount?: number; 
    
}