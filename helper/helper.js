const fetch = require('node-fetch')


module.exports  = {
    uuid : ()  => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      },

      validateMobileNumber : async (countryCode,phoneNumber,api_key)=> {
        const response = await fetch(`https://api.bigdatacloud.net/data/phone-number-validate?number=${phoneNumber}&countryCode=${countryCode}&key=${api_key}`)

        const result = await response.json()

        return result
      }
  
}