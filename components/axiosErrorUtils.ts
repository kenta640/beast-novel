export const errorUtils = {
    // @ts-ignore to ignore the type checking errors on the next line in a TypeScript
    getError: (error) => {
      let e = error;
      if (error.response) {
        e = error.response.data;                   // data, status, headers
        console.log(e)
        if (error.response.data && error.response.data.error) {
          e = error.response.data.error;           // my app specific keys override
         console.log(e)
        }
      } else if (error.message) {
        console.log(error.message)
        e = error.message;
      } else {
        e = "Unknown error occured";
      }
      return e;
    },
  };