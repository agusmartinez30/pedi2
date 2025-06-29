export interface User {
    readonly id: string;
    readonly username: string;
    readonly emailAddress: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly phoneNumber: string;
    readonly role: string;
    readonly rating: number;
    readonly vehicleType: string;
    readonly licensePlate: string;
    readonly vehicleColor: string;
    readonly vehicleBrand: string;
    readonly vehicleModel: string;
    readonly vehicleYear: string;
    readonly vehiclePictures: string[];
    readonly licensePictures: string[];
    readonly createdAt: Date;

   
}