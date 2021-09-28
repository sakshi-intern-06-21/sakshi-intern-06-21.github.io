function validate(number,address)
{
   var regEx = /^\d{10}$/;
   var  nullvalue =/^$|\s+/;
   if(!number.value.match(regEx))
     {
      alert("Please enter valid phone number!");
     return false;
     }
    else if(address.value.match(nullvalue)) {
       alert("Please enter address! ");
       return false;
       
       }
   else {
      alert("Congratulations!! The Order has been placed succesfully.Your Order will be dispatched in upcoming 2 days.\n"+
           "Order is placed for:"+address.value+"\n"+
"Contact No of client:"+number.value+'\n'+
           "Date & Time of invoice:"+Date()+"\n"+"Total Quantity:"+quantity.value+"\n"+
           "Price Per Piece:Rs.300/-\n"+
           "Total Order Price:"+quantity.value*300+"\n"+
           "\n"+
           "Thanks for shopping with us for any queries you can contact us on 8788943354.");
      }

    if(address===null || address==" "){

     alert("Please enter address before placing order!");
      return false;
     }
    
}  