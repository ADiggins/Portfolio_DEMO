class MyHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
        <header>
            <a href="index.html"> <h1> Name Here</h1> </a>
            <div id="headerNav">
                <button onclick="window.location.href = 'HTML_games.html'">HTML Games</button>
                <button onclick="window.location.href = 'Game1.html'">Game #1: A Unity Game</button>
                <button onclick="window.location.href = 'Game2.html'">T</button>
                <button onclick="window.location.href = 'Game3.html'">Button 4</button>
            </div>
        </header>
        `
    }    
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div id="contactMe">
                <p>Contact Me</p>
            </div>
            <div id="footerContent">
                <p>This is the footer content</p>
            </div>
        </footer>
        `
    }
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        // this.attachShadow( {mode:'open'})
        this.innerHTML = 
        `<div id="opener">
            <form action="https://api.web3forms.com/submit" method="POST" id="VisitorForm">
                <input type="hidden" name="access_key" value="ba7863c2-3747-4387-be29-e34ffd7f5549">
                <label for="" >Name<input type="text" id="visitorName" name="name"></label>
                <label for="" >Company<input type="text" id="visitorCompany" name="company"></label>
                <button type="submit" id = "SubmitVisitor"> "Submit Details"</button>
                <button type="submit" id = "SubmitAnon">"Abstain For Now"</button>
            </form>
        </div>`
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);