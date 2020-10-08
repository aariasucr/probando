import * as firebase from "firebase/app";

/**
 *  Representa los tipos de pago habilitados para la CLIENTA
 */
export enum PaymentMethod {
  CARD = "Card",
  CASH = "Cash",
  SINPE = "Sinpe",
}

/**
 * Representa el estado de la clienta en la aplicacion
 * Util para los borrados lógicos de los clientes en el sistema
 */
export enum UserStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

/**
 * Representa los lugares favoritos almacenados por el usuario
 */
export interface FavoritePlace {
  /**
   * @type {number}
   * * index: index que el usuario le asigna a su lugar favorito almacenado.
   */
  index: number;

  /**
   * @type {string}
   * * mapName: nombre definido por la API de mapas
   */
  mapName: string;

  /**
   * @type {string}
   * * name: nombre al lugar asignado por la clienta
   */
  name: string;

  /**
   * @type {firebase.firestore.GeoPoint}
   * * Geolocalización del lugar favorito
   */
  geoLocation: firebase.firestore.GeoPoint;

  /**
   * @type {string}
   * * clientFavoritePlaceFirebaseID: id del lugar favorito
   */
  clientFavoritePlaceFirebaseID: string;
}

/**
 * * Representa un cliente del sistema
 */
export interface Client {
  /**
   * @type {string}
   * * clientFirebaseID: id unico del cliente en el sistema
   */
  clientFirebaseID: string;

  /**
   * @type {string}
   * * firstName: Nombre del usuario cliente
   */
  firstName: string;

  /**
   * @type {string}
   * * lastName: apellido del usuario cliente
   */
  lastName: string;

  /**
   * @type {string}
   * * email: email del usuario cliente
   */
  email: string;

  /**
   * @type {string}
   * * phone: telefono del usuario cliente
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

  /**
   * @type {boolean}
   * * passwordRequest: representa la condicion de solicitud de nueva contraseña por parte del usuario
   */
  passwordRequest: boolean;

  /**
   * @type {UserStatus}
   * * userStatus: representa el estado del usuario en el sistema util para laos borrados lógicos
   */
  userStatus: UserStatus;

  /**
   * @type {FavoritePlace[]}
   * * favoritePlaces: arreglo de instancias de lugares favoritos almacenados por la clienta
   */
  favoritePlaces: FavoritePlace[];
}

/**
 * Representa el rating que la usuario hace sobre el viaje realizado
 */
export interface ClientRideRating {
  /**
   * @type {string}
   * * clientFirebaseID:  referencia al id del cliente en el sistema
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

/**
 * Solicitud hecha por la clienta 
 */
export interface TripRequest {
  /**
   * @type {string}
   * * clientFirebaseID:  id del cliente
   */
  clientFirebaseID: string;

  /**
   * @type {firebase.firestore.Timestamp}
   * * requestTime:  momento en que la clienta hace la solicitud del viaje
   */
  requestTime: firebase.firestore.Timestamp;

  /**
   * @type {firebase.firestore.GeoPoint}
   * * departureLocation: ubicación desde donde la clienta pide el viaje
   */
  departureLocation: firebase.firestore.GeoPoint;

  /**
   * @type {firebase.firestore.GeoPoint}
   * * arrivalLocation: ubicación destino hacia donde la clienta se desplaza
   */
  arrivalLocation: firebase.firestore.GeoPoint;

  /**
   * @type {string}
   * * paymentMethod:  tipo de pago que desea utilizar la clienta
   */
  paymentMethod: PaymentMethod;
}

/**
 * Representa la solicitud de una nueva contraseña
 */
export interface ChangePasswordRequest {
  /**
   * @type {string}
   * * clientFirebaseID:  id de la clienta
   */
  clientFirebaseID: string;

  /**
   * @type {string}
   * * clientEmail:  email de la clienta
   */
  clientEmail: string;

  /**
   * @type {firebase.firestore.Timestamp}
   * * requestTime:  estampilla de tiempo en que la clienta hace la solicitud de cambio de contraseña
   */
  requestTime: firebase.firestore.Timestamp;

  /**
   * @type {string}
   * * code:  codigo usado por la clienta en la solicitud de nueva contraseña
   */
  code: string;
}

/**
 * Representa la solicitud de hecha por la clienta para su verificación
 */
export interface ClientVerification {
  /**
   * @type {string}
   * * clientFirebaseID:  id de la clienta
   */
  clientFirebaseID: string;

  /**
   * @type {string}
   * * clientEmail:  email de la clienta
   */
  clientEmail: string;

  /**
   * @type {string}
   * * verificationCode: codigo de verificacion dado a la clienta
   */
  verificationCode: string;
}

/**
 * * Representa la ubicación de la clienta
 */
export interface ClientLocation {
  /**
   * @type {string}
   * * clientFirebaseID: referencia al id del cliente en el sistema
   */
  clientFirebaseID: string;

  /**
   * @type {firebase.firestore.Timestamp}
   *  * timeStamp: estampa de tiempo en la que estuvo en la ubicacion
   */
  timeStamp: firebase.firestore.Timestamp;

  /**
   * @type {firebase.firestore.GeoPoint}
   *  * currentLocation:  ubicacion del usuario en el momento especifico
   */
  currentLocation: firebase.firestore.GeoPoint;
}
