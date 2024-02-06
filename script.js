
var typeanimation_i = 0;
var typeanimation_text = 'Don\'t worry.'; /* The text */
var typeanimation_speed = 50; /* The speed/duration of the effect in milliseconds */
var contact_i = 0;
var contact_email = 'Email: radhan.r.dandekar@gmail.com';
var contact_phone = 'Phone Number: 9673xxxxxxx';
var contact_address = 'Address: Some place.';
var contact_speed = 50; /* The speed/duration of the effect in milliseconds */

function dontWorry() {
  if (typeanimation_i < typeanimation_text.length) {
    document.getElementById("dontworry").innerHTML += typeanimation_text.charAt(typeanimation_i);
    typeanimation_i++;
    setTimeout(dontWorry, typeanimation_speed);
  }
  else {
    typeanimation_text = "We've got the soup for you.";
    typeanimation_i = 0;
    setTimeout(soupForYou, 500)
  }
}
function soupForYou() {
  if (typeanimation_i < typeanimation_text.length) {
    document.getElementById("soupforyou").innerHTML += typeanimation_text.charAt(typeanimation_i);
    typeanimation_i++;
    setTimeout(soupForYou, typeanimation_speed);
  }
}
function contactInfo() {
  if (contact_i < contact_email.length || contact_i < contact_phone.length ||contact_i < contact_address.length) {
    if (contact_i < contact_email.length)
        document.getElementById("contact_email").innerHTML += contact_email.charAt(contact_i);
    if (contact_i < contact_phone.length)
        document.getElementById("contact_phone").innerHTML += contact_phone.charAt(contact_i);
    if (contact_i < contact_address.length)
        document.getElementById("contact_address").innerHTML += contact_address.charAt(contact_i);
    contact_i++;
    setTimeout(contactInfo, contact_speed);
  }
}