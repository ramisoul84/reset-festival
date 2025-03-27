export interface Client {
    id?: number;
    name?: string;
    email: string;  
    CreatedAt?: Date; 
  }


  export interface DJ {
    name: string;
    info: string;
    expanded?: boolean; 
  }