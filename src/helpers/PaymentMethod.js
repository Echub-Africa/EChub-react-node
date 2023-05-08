// import React, {useState} from 'react';
import { usePaystackPayment } from 'react-paystack';



export function OneTimePayment(data, email){
    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: data.currentServicePrice * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_a813c2aecd96e59d20ec7fb47cff518352ec0bc6',
    };

    function onSuccess(reference) {
        // Implementation for whatever you want to do with reference and after success call.
        console.log(reference);    
    }

    // you can call this function anything
    function onClose(){        
        console.log("Closed")
    }

    return {
        initializePayment: usePaystackPayment(config),
        onSuccess,
        onClose
    }
}