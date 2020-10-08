import * as firebase from "firebase/app";

/**
 *  * Enum con los status de taxistas
 */
export enum Status {
  ACTIVE = "Active",
  SUSPENDED = "Suspended",
  INACTIVE = "Inactive",
}

/**
 *  * Enum con los tipos de licencia
 */
export enum LicenseTypes {
  A = "A",
  B1 = "B1",
  B2 = "B2",
  B3 = "B3",
  B4 = "B4",
  C1 = "C1",
  C2 = "C2",
  D = "D",
  E = "E",
}

/**
 * * Representa la informacion de una Conductora en el sistema
 */
export interface Driver {
  /**
   * @type {string}
   * * driverFirebaseID: ID de la conductora en Firebase
   */
  driverFirebaseID: string;

  /**
   * @type {string}
   * * IDCard: numero de cedula de la conductora
   */
  IDCard: string;

  /**
   * @type {string}
   * * firstName: nombre propio de la conductora
   */
  firstName: string;

  /**
   * @type {string}
   * * lastName: apellidos de la conductora
   */
  lastName: string;

  /**
   * @type {string}
   * * email: correo electronico de las conductoras
   */
  email: string;

  /**
   * @type {string}
   * * phone: numero de telefono de las conductoras
   */
  phone: string;

  /**
   * @type {number}
   * * avgRating: calificacion promedio de la conductora
   */
  avgRating: number;

  /**
   * @type {Status}
   * * status: estado actual de la conductora
   */
  status: Status;

  /**
   * @type {boolean}
   * * panic: eventos de boton de panico ***
   */
  panic: boolean;

  /**
   * @type {Vehicle}
   * * vehiculo: representa la informacion del vehiculo de la conductora
   */
  vehicle: Vehicle;
}

/**
 * * Representa la informacion de un Vehiculo en el sistema
 */
export interface Vehicle {
  /**
   * @type {string}
   * * licensePlate: numero de placa del vehiculo
   */
  licensePlate: string;

  /**
   * @type {string}
   * * brand: marca del vehiculo
   */
  brand: string;

  /**
   * @type {string}
   * * model: modelo del vehiculo
   */
  model: string;

  /**
   * @type {string}
   * * rtv: imagen de rtv de vehiculo
   */
  rtv: string;

  /**
   * @type {firebase.firestore.Timestamp}
   * * rtvExpDate: fecha de expiracion del documento RTV del vehiculo
   */
  rtvExpDate: firebase.firestore.Timestamp;

  /**
   * @type {string}
   * * ownershipTitle: imagen del titulo de propiedad del vehiculo
   */
  ownershipTitle: string;

  /**
   * @type {string}
   * * ownerName: nombre de propietario de vehiculo
   */
  ownerName: string;
}

/**
 * * Representa la informacion de la Ubicación de una Conductora en el sistema
 */
export interface DriverLocation {
  /**
   * @type {string}
   * * driverFirebaseID: ID de la conductora en Firebase
   */
  driverFirebaseID: string;

  /**
   * @type {firebase.firestore.Timestamp}
   * * timeStamp: estampa de tiempo en la que estuvo en la ubicacion
   */
  timeStamp: firebase.firestore.Timestamp;

  /**
   * @type {firebase.firestore.GeoPoint}
   * * currentLocation: ubicacion actual
   */
  currentLocation: firebase.firestore.GeoPoint;
}

/**
 * * Representa la informacion de la Calificacion de un Viaje en el sistema
 */
export interface DriverRideRating {
  /**
   * @type {string}
   * * driverFirebaseID: ID de la conductora en Firebase
   */
  driverFirebaseID: string;

  /**
   * @type {string}
   * * rideFirebaseID: ID del viaje en Firebase
   */
  rideFirebaseID: string;

  /**
   * @type {number}
   * * driverRideRating: calificacion de la conductora en el viaje
   */
  driverRideRating: number;
}

/**
 * * Representa la informacion de los Documentos de la Conductora en el sistema
 */
export interface DriverDocuments {
  /**
   * @type {string}
   * * driverFirebaseID: ID de la conductora en Firebase
   */
  driverFirebaseID: string;

  /**
   * @type {License}
   * * driverLicense: representa la informacion de la Licencia de la conductora
   */
  driverLicense: License;

  /**
   * @type {Insurance}
   * * driverInsurance: representa la informacion del Seguro de la conductora
   */
  driverInsurance: Insurance;

  /**
   * @type {Marchamo}
   * * marchamo: representa la informacion del Marchamo de la conductora
   */
  marchamo: Marchamo;

  /**
   * @type {string}
   * * criminalRecord: imagen de la hoja de delincuencia de la condutora
   */
  criminalRecord: string;

  /**
   * @type {boolean}
   * * documentsApproved: estado de los documentos de la conductora
   */
  documentsApproved: boolean;
}

/**
 * * Representa la informacion de la Licencia en el sistema
 */
export interface License {
  /**
   * @type {LicenseTypes}
   * * type: tipo de la licencia
   */
  type: LicenseTypes;

  /**
   * @type {firebase.firestore.Timestamp}
   * * expirationDate: fecha de vencimiento de la licencia
   */
  expirationDate: firebase.firestore.Timestamp;

  /**
   * @type {boolean}
   * * approved: documento es valido
   */
  approved: boolean;
}

/**
 * * Representa la informacion de la Licencia en el sistema
 */
export interface Insurance {
  /**
   * @type {string}
   * * insuranceImage: imagen del documento de segura
   */
  insuranceImage: string; // ! Tipo de dato adecuado? bytes

  /**
   * @type {firebase.firestore.Timestamp}
   * * expirationDate: fecha de vencimiento del seguro
   */
  expirationDate: firebase.firestore.Timestamp;

  /**
   * @type {boolean}
   * * approved: documento es valido
   */
  approved: boolean;
}

/**
 * * Representa la informacion del Seguro en el sistema
 */
export interface Marchamo {
  /**
   * @type {string}
   * * marchamoImage: imagen del documento de marchamo
   */
  marchamoImage: string; // ! Tipo de dato adecuado? bytes

  /**
   * @type {firebase.firestore.Timestamp}
   * * expirationDate: fecha de vencimiento del marchamo
   */
  expirationDate: firebase.firestore.Timestamp;

  /**
   * @type {boolean}
   * * approved: documento es valido
   */
  approved: boolean;
}
