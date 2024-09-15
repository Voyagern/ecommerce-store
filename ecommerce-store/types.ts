export interface Billboard{
    id:string
    nam:string
    imageUrl:string
};
export interface Category{
    id:string
    name:string
    billboard:Billboard
}