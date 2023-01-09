export interface PostData{
    _id?:string,
    actor:{
        description:string,
        title:string,
        date?:string,
        image:string
    },
    video:string,
    sharedImg:string,
    comment:number,
    description:string
}