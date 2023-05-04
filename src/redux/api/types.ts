export interface IUser {
    id: number;
    name: string;
    email: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IGenericResponse {
    status: string;
    message: string;
  }
  
  