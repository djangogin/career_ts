export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate:number
        count:number
    }
}
// Модель руководителя
export interface IManager {
    id: string
    parentid: string
    position: string
    name: string
    birthday:string
    age: number
    scientificdegree: string
    ukr: string
    description: string
    img: string
    protectdegree:string
}

// Модель приемника
export interface ISuccessor {
    id: string
    parentid: string
    ready: number
    name: string
    birthday:string
    age: number
    position: string
    scientificdegree: string
    ukr: string
    description: string
    img: string
}