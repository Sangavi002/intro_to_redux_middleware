
const payload = store => next => action => {
    if (action.payload !== undefined) {
        console.log('Payload:', action.payload);
      }
      return next(action);
  };
  
  export default payload;
  