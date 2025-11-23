console.log("Testing the Opener Check");
var openerElement;
var submitVisitorButton;
var submitAnonButton;

/*
setTimeout(function () {
    openerElement = document.getElementById("opener");
    console.dir(openerElement);
    setupOpeningPanel();

    var submitVisitorButton = document.getElementById("SubmitVisitor");
    var submitAnonButton = document.getElementById("SubmitAnon");
    console.log(submitVisitorButton);

    submitVisitorButton.addEventListener('submit', function (event) {
        event.preventDefault();
        // const formData = new FormData(event.target);
        // fetch(event.target.action, {
        //     method:event.target.method,
        //     body:formData
        // }).then (response => response.json())
        // .then( data => {
        //     console.log("Done!", data);
        //     registerVisitor(false);
        //     openerElement.style.display = "none";
        // })
        // registerVisitor(false);
        // openerElement.style.display = "none";
    });

    submitAnonButton.addEventListener('click', function (event) {
        event.preventDefault();
        registerVisitor(true);
        openerElement.style.display = "none";
    });

}, 1000);
*/


window.customElements.whenDefined('my-opener').then( function() {
    console.log("my-opener has been created");
    openerElement = document.getElementById("opener"); 
    var submitForm = document.getElementById("VisitorForm");   
    var submitVisitorButton = document.getElementById("SubmitVisitor");
    var submitAnonButton = document.getElementById("SubmitAnon");
    
    setupOpeningPanel();
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method:event.target.method,
            body:formData
        }).then (response => response.json())
        .then( data => {
            console.log("Done!", data);
            registerVisitor(false);
            openerElement.style.display = "none";
        })
        // registerVisitor(false);
        // openerElement.style.display = "none";        
    });
    // console.log(`Finished setting up: ${submitVisitorButton}`)

    submitAnonButton.addEventListener('click', function (event) {
        event.preventDefault();
        registerVisitor(true);
        openerElement.style.display = "none";
    });
    // console.log("Finished setting up the webpage!");
})


// sessionStorage.setItem("visitorName", "donnie");
sessionStorage.removeItem("visitorName");
// console.log(sessionStorage.getItem("visitorName"));
// openerElement.style.display = "none";

function setupOpeningPanel() {
    if (sessionStorage.getItem("visitorName") == null) {
        console.log("turning on");
        openerElement.style.display = "block";
    } else {
        console.log("turning off");
        console.log(`welcome back ${sessionStorage.getItem("visitorName")}`)
        openerElement.style.display = "none";
    }
}


function registerVisitor(anonCheck) {
    if (!anonCheck) {
        console.log(document.getElementById("visitorName").value);
        sessionStorage.setItem("visitorName", document.getElementById("visitorName").value);
        sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value);
    } else {
        sessionStorage.setItem("visitorName", "anon");
        sessionStorage.setItem("visitorCompany", "anon");
    }
}

