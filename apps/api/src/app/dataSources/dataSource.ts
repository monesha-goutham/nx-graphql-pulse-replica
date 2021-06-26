
import { JsonPlaceHolderAPIService } from './typicode/typicode.service';
// import {Datasour} from "apollo-datasource-rest"


// return an object which returns the instance of the above data class
export const dataSource = () =>({ jsonPlaceHolderAPI: new JsonPlaceHolderAPIService() })


