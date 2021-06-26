// all http fetch code here

import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from '../../../environments/environment';
import { JsonAPIResponse } from './types';

// const API_URL = "https://jsonplaceholder.typicode.com/"


export class JsonPlaceHolderAPIService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.typicode.url;
  }

  // write function that sends GET request to the API endpoints
  async getPost(id:number) {
    const data = await this.get(`posts/${id}`);
    return data;
    };

  async getPostsList() {
      const data = await this.get(`posts`);
      return data;
      };

  async getTodosList(): Promise<JsonAPIResponse>{
    const data = await this.get("todos");
    return data
  }

}