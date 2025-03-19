import { Injectable } from "@angular/core";
import { environment } from "../_environments/env";
import { HttpClient } from "@angular/common/http";
import { Client } from "../_models/client";



@Injectable()
export class ClientService {
    private readonly apiUrl!: string;   
    constructor(private http:HttpClient) {
        this.apiUrl = environment.apiUrl;
    }


    getAllClients() {
        return this.http.get<Client[]>(`${this.apiUrl}/list`, {
        });
      }

    createClient(client: Client) {
        return this.http
          .post(`${this.apiUrl}/register`, client, {
         
          })
    }

}