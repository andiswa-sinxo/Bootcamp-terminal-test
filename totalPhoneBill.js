module.exports= function totalPhoneBill(calls){
      var phone = calls.split(', ');
      var phoneBill = 0;
       for(var i= 0; i<phone.length;i++){
         if(phone[i] === 'call'){
        phoneBill += 2.75
         }
         else if(phone[i] === 'sms'){
           phoneBill += 0.65    
       }
       }
      return "R" +phoneBill.toFixed(2)
    }