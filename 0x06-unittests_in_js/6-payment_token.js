function getPaymentTokenFromAPI(success) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // We are not doing anything if success is false, 
      // but we can reject the promise if desired
      // reject('Error: API call failed');
    }
  });
}

module.exports = getPaymentTokenFromAPI;
