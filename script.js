//-->This is to check if jquery is linked.
// $(function() {
//     alert("hello?");
// });

// // Click Function for buttons

//     $(".add-to-cart").click(function(event) {
//         event.preventDefault(); //we don't want the button to go to default mechanism
//         let name = $(this).attr("data-name"); //$this represents the link that you clicked on, attr lets us access any of the attributes
//         let price = Number($(this).attr("data-price"));//Number function helps us return a value vs a string

//         addItemToCart(name, price, 1);
//         displayCart();
//     });

//     function displayCart() {
//         console.log("hello world");

//         let cartArray = listCart();
//             console.log("*** Count Cart :"+cartArray.length);
//         let output = ""; //empty string
//         for (let i in cartArray) {
//             output += "<li>"+cartArray[i].name +" "+cartArray[i].count+"</li>" //append, add to the end of
//         }
//         $("#show-cart").html(output); //overriding everything that's inside this element.
//     }

    // JQuery Lecture Notes

    //-->This is a document ready event.  Looks like this really:

//--> $(document).ready(function()) {

//  --> });

//$(selector).action();