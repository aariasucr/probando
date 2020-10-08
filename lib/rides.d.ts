/**
 *  * Enum con los status del viaje
 */
export declare enum RideStatus {
    CLIENT_WAITING = "Client waiting",
    IN_PROGRESS = "In progress",
    CANCELLED_BY_CLIENT = "Cancelled by client",
    CANCELLED_BY_DRIVER = "Cancelled by driver",
    COMPLETED = "Completed"
}
/**
 *  * Enum con los tipos de metodos de pago
 */
export declare enum PaymentMethod {
    CASH = "Cash",
    DEBIT = "Debit",
    SINPE = "SINPE"
}
/**
 * * Representa los detalles generales del viaje
 */
export interface Ride {
    /**
     * @type {string}
     * * rideFirebaseID: ID unico del viaje
     */
    rideFirebaseID: string;
    /**
     * @type {string}
     * * clientFirebaseID: referencia al id del cliente que participo en el viaje
     */
    clientFirebaseID: string;
    /**
     * @type {string}
     * * driverFirebaseID: referencia al id del conductora que participo en el viaje
     */
    driverFirebaseID: string;
    /**
     * @type {firebase.firestore.Timestamp}
     * * date: fecha de realizacion del viaje
     */
    date: firebase.firestore.Timestamp;
    /**
     * @type {firebase.firestore.GeoPoint}
     * * departureLocation: ubicacion de donde empezo el viaje
     */
    departureLocation: firebase.firestore.GeoPoint;
    /**
     * @type {firebase.firestore.GeoPoint}
     * * arrivalLocation: ubicacion de donde termino el viaje
     */
    arrivalLocation: firebase.firestore.GeoPoint;
    /**
     * @type {number}
     * * fare: monto cobrado en viaje
     */
    fare: number;
    /**
     * @type {PaymentMethod}
     * * paymentMethod: metodo de pago empleado SINPE/Efectivo/Debit
     */
    paymentMethod: PaymentMethod;
    /**
     * @type {string}
     * * taximetroRef: URL de referencia a imagen de taximetro
     */
    taximetroRef: string;
    /**
     * @type {RideStatus}
     * * rideStatus: estado en que finalizo el viaje: completado/cancelado/en progreso/cliente esperando
     */
    rideStatus: RideStatus;
    /**
     * @type {Array<string>}
     * * chat: arreglo que contiene la conversacion entre el conductora y el cliente
     */
    chat: Array<string>;
    /**
     * @type {boolean}
     * * bandera que indica si la taxista fue eliminada del sistema
     */
    driverDeleted: boolean;
}
/**
 * * Representa peticion de viajes
 */
export interface RideRequest {
    /**
     * @type {string}
     * * clientFirebaseID: referencia al id cliente
     */
    clientFirebaseID: string;
    /**
     * @type {firebase.firestore.GeoPoint}
     * * clientLocation: ubicacion del cliente
     */
    clientLocation: firebase.firestore.GeoPoint;
    /**
     * @type {string}
     * * clientFirstName: nombre del cliente
     */
    clientFirstName: string;
    /**
     * @type {string}
     * * clientLastName: apellido del cliente
     */
    clientLastName: string;
    /**
     * @type {PaymentMethod}
     * * paymentMethod: tipo de pago acordado por el cliente y conductora
     */
    paymentMethod: PaymentMethod;
    /**
     * @type {firebase.firestore.Timestamp}
     *  * timeStamp: estampa de tiempo de solicitud de viaje
     */
    timeStamp: firebase.firestore.Timestamp;
}
