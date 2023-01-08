/**
 * General error handling method that returns and error message
 */

export const errorHandler=(error:any)=>{
    return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
}