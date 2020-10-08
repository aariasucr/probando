import {
  Driver,
  Vehicle,
  DriverLocation,
  DriverRideRating,
  DriverDocuments,
  Marchamo,
  License,
  Insurance,
  Status,
  LicenseTypes,
} from "./driver";

import { Ride, RideRequest, RideStatus, PaymentMethod } from "./rides";

import { ClientLocation, ClientRideRating, Client, FavoritePlace, TripRequest, ChangePasswordRequest, ClientVerification } from "./client";

import { UserRoles } from "./userRoles";

// * Hago export de todo lo que quiero que sea publico en este
// * modulo de npm
export {
  Driver,
  Vehicle,
  DriverLocation,
  DriverRideRating,
  DriverDocuments,
  Marchamo,
  License,
  Insurance,
  Ride,
  RideRequest,
  ClientLocation,
  ClientRideRating,
  Client,
  RideStatus,
  PaymentMethod,
  UserRoles,
  Status,
  LicenseTypes,
  FavoritePlace,
  TripRequest,
  ChangePasswordRequest,
  ClientVerification
};
// ? Un documento publico puede contener uno que no lo sea
