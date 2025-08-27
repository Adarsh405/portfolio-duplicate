//home section
let fresherTextEl = document.getElementById("fresherText");
let allTexts = ["Full Stack Developer", "Backend Developer", "Frontend Developer"]
let num = 0
setInterval(function() {
    fresherTextEl.setAttribute("textVal", allTexts[num]);
    fresherTextEl.textContent = allTexts[num];
    num = num + 1
    if (num === allTexts.length) {
        num = 0
    }
}, 3000)

//contact
let contactForm = document.getElementById("contactForm");
let sendMessageEl = document.getElementById("sendMessage");
let contactUserNameEl = document.getElementById("contactUserName");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let contactEmailEl = document.getElementById("contactEmail");
let contactSubEl = document.getElementById("contactSub");
let contactMsgEl = document.getElementById("contactMsg");
let MessageErrMsgEl = document.getElementById("MessageErrMsg");


contactForm.addEventListener("submit", function(event) {
    event.preventDefault()
});

function validateContactUserName() {
    if (contactUserNameEl.value === "") {
        nameErrMsgEl.textContent = "*Required";
    } else {
        nameErrMsgEl.textContent = "";
    }
}
contactUserNameEl.addEventListener("blur", validateContactUserName)

function validateMsg() {
    if (contactMsgEl.value === "") {
        MessageErrMsgEl.textContent = "*Required";
    } else {
        MessageErrMsgEl.textContent = "";
    }
}
contactMsgEl.addEventListener("blur", validateMsg)

function sendMessage() {
    let url = "https://wa.me/+919908622405?text=";
    let contactUserName = "Name " + contactUserNameEl.value;
    let contactMsg = ", Message " + contactMsgEl.value;
    let totalUrl = String(url + contactUserName + contactMsg + " @msg from portfolio");
    sendMessageEl.setAttribute("href", totalUrl);

}
contactUserNameEl.addEventListener("keyup", sendMessage);
contactMsgEl.addEventListener("keyup", sendMessage);