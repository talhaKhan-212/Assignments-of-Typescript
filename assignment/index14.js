"use strict";
let guestList = ["Smith", "John", "Albert"];
for (let i = 0; i < guestList; i++) {
    let message = 'Dear, ${guestList[i]}, \n you are invited to dinner at my home. It would be an honour your presence.\nPlease let me know if you can attend. \n[Your Name]';
    console.log(message);
}
