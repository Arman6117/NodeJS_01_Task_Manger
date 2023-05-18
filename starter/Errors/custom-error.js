class CustomAPIError extends Error
{
   constructor(message,statusCode)
   {
     super(message);
     this.statusCode = statusCode;  
   }

}

const customError = (msg,status) =>
{
  return new CustomAPIError(msg,status)
}

module.exports = {
    customError,
    CustomAPIError
}