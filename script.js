
var typeanimation_i = 0;
var typeanimation_text = 'Don\'t worry.'; /* The text */
var typeanimation_speed = 50; /* The speed/duration of the effect in milliseconds */
var contact_i = 0;
var contact_email = 'Email: radhan.r.dandekar@gmail.com';
var contact_phone = 'Phone Number: 9673xxxxxxx';
var contact_address = 'Address: Some place.';
var contact_speed = 50; /* The speed/duration of the effect in milliseconds */

var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */

function indexAnimate() {
	dontWorry();
}
function dontWorry() {
  if (i < typeanimation_text.length) {
	document.getElementById("dontworry").innerHTML += typeanimation_text.charAt(i);
	i++;
	setTimeout(dontWorry, speed);
  }
  else {
	typeanimation_text = "We've got the soup for you.";
	i = 0;
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

function indexScroll() {
	var index_bg_2 = document.getElementById("index-bg-2");
	window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 100 && scroll < 600)
		index_bg_2.style.opacity = (scroll-100)/500;
	else if (scroll > 600 && scroll < 1200)
		index_bg_2.style.opacity = 1;
	else if (scroll > 1200 && scroll < 1500)
		index_bg_2.style.opacity = (1500-scroll)/300;
	else if (scroll > 1500)
		index_bg_2.style.opacity = 0;
	else if (scroll < 200)
		index_bg_2.style.opacity = 0;
	});
}