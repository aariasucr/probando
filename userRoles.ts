/**
 * * Representa la informacion de autenticación de usuarios para
 * * determinar los permisos de acceso de los mismos
 */
export interface UserRoles {
  /**
   * @type {string}
   * * UID: userID de un usuario en el sistema
   */
  UID: string;

  /**
   * @type {string}
   * * role: rol del usuario en el sistema
   */
  role: string;
}
