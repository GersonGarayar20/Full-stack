export interface IProduct {
    _id:string
    name:string,
    price:number,
    image?:string,
    description?:string,
    quantity:number,
    rate?:number,
    categories_id:[{
        name:string,
        _id:string
    }]
}