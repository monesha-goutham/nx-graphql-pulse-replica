interface Types {
  production : boolean
  typicode: Typicode; //

}

interface Typicode{
  url : string
}

export const environment: Types = {

  production: false,
  typicode: {
    
    url : "https://jsonplaceholder.typicode.com/"
  }
}