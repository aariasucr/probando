import * as firebase from "firebase/app";
/**
 * * Representa un cliente del sistema
 */
export interface Client {
    /**
     * @type {string}
     * * clienFirebaseID: id unico del cliente en el sistema
     */
    clientFirebaseID: string;
    /**
     * @type {string}
     * * firstName: Nombre del usuario cliente
     */
    firstName: string;
    /**
     * @type {string}
     * * lastName: apellido del usario cliente
     */
    lastName: string;
    /**
     * @type {string}
     * * email: email del usario cliente
     */
    email: string;
    /**
     * @type {string}
     * * phone: telefono del usario cliente
     */
    phone: string;
    /**
     * @type {number}
     * * avgRating: rating del usuario
     */
    avgRating: number;
    /**
     * @type {string}
     * * profilePicURL: referencia de direccion de almacenamiento en Firebase de foto de perfil
     */
    profilePicURL: string;
}
/**
 * * Representa ubicacion del sistema
 */
export interface ClientLocation {
    /**
     * @type {string}
     * * clienFirebaseID: referencia al id del cliente en el sistema
     */
    clientFirebaseID: string;
    /**
     * @type {firebase.firestore.Timestamp}
     *  * timeStamp: estampa de tiempo en la que estuvo en la ubicacion
     */
    timeStamp: firebase.firestore.Timestamp;
    /**
     * @type {firebase.firestore.GeoPoint}
     *  * currentLocation:  ubicacion del usario en el momento especifico
     */
    currentLocation: firebase.firestore.GeoPoint;
}
/**
 * * Representa los detalles para el rating del usario en un viaje especifico
 */
export interface ClientRideRating {
    /**
     * @type {string}
     * * clienFirebaseID:  referencia al id del cliente en el sistema
     */
    clientFirebaseID: string;
    /**
     * @type {string}
     * * rideFirebaseID:  referencia al id del viaje al cual la calificacion esta asociada
     */
    rideFirebaseID: string;
    /**
     * @type {number}
     * * clientRideRating:  referencia al id del viaje al cual la calificacion esta asociada
     */
    clientRideRating: number;
}
