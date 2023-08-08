const e = async t => {
    let n;
    import ("./install-dialog-30d74d24.js");
    try {
        n = await navigator
            .serial
            .requestPort()
    } catch (n) {
        return "NotFoundError" === n.name
            ? void import ("./index-832327ec.js").then(
                (n => n.openNoPortPickedDialog((() => e(t))))
            )
            : void alert(`Error: ${n.message}`)
    }
    if (!n) 
        return;
    try {
        await n.open({baudRate: 115200})
    } catch (e) {
        return void alert(e.message)
    }
    const o = document.createElement("ewt-install-dialog");
    o.port = n,
    o.manifestPath = t.manifest || t.getAttribute("manifest"),
    o.overrides = t.overrides,
    o.addEventListener("closed", (() => {
        n.close()
    }), {
        once: !0
    }),
    document
        .body
        .appendChild(o)
};
class t extends HTMLElement {
    connectedCallback() {
        if (this.renderRoot) 
            return;
        if (
            this.renderRoot = this.attachShadow({mode: "open"}),
            !t.isSupported || !t.isAllowed
        ) 
            return this.toggleAttribute("install-unsupported", !0),
            void(
                this.renderRoot.innerHTML = t.isAllowed
                    ? "<slot name='unsupported'>Your browser does not support installing things on ES" +
                            "P devices. Use Google Chrome or Microsoft Edge.</slot>"
                    : "<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or" +
                            " on the localhost.</slot>"
            );
        this.toggleAttribute("install-supported", !0);
        const n = document.createElement("slot");
        n.addEventListener("click", (async t => {
            t.preventDefault(),
            e(this)
        })),
        n.name = "activate";
        const o = document.createElement("button");
        if (
            o.innerText = "CONNECT",
            n.append(o),
            "adoptedStyleSheets" in Document.prototype && "replaceSync" in CSSStyleSheet.prototype
        ) {
            const e = new CSSStyleSheet;
            e.replaceSync(t.style),
            this.renderRoot.adoptedStyleSheets = [e]
        } else {
            const e = document.createElement("style");
            e.innerText = t.style,
            this
                .renderRoot
                .append(e)
        }
        this
            .renderRoot
            .append(n)
    }
}
t.isSupported = "serial" in navigator,
t.isAllowed = window.isSecureContext,
t.style = '\n  button {\n    position: relative;\n    cursor: pointer;\n    font-size: 14' +
        'px;\n    padding: 8px 28px;\n    color: var(--esp-tools-button-text-color, #ff' +
        'f);\n    background-color: var(--esp-tools-button-color, #03a9f4);\n    border' +
        ': none;\n    border-radius: 4px;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),' +
        ' 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);\n  }\n  button::b' +
        'efore {\n    content: " ";\n    position: absolute;\n    top: 0;\n    bottom: ' +
        '0;\n    left: 0;\n    right: 0;\n    opacity: 0.2;\n    border-radius: 4px;\n ' +
        ' }\n  button:hover {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.14), 0 1px 7px 0' +
        ' rgba(0,0,0,.12), 0 3px 1px -1px rgba(0,0,0,.2);\n  }\n  button:hover::before ' +
        '{\n    background-color: rgba(255,255,255,.8);\n  }\n  button:focus {\n    out' +
        'line: none;\n  }\n  button:focus::before {\n    background-color: white;\n  }' +
        '\n  button:active::before {\n    background-color: grey;\n  }\n  :host([active' +
        ']) button {\n    color: rgba(0, 0, 0, 0.38);\n    background-color: rgba(0, 0,' +
        ' 0, 0.12);\n    box-shadow: none;\n    cursor: unset;\n    pointer-events: non' +
        'e;\n  }\n  improv-wifi-launch-button {\n    display: block;\n    margin-top: 1' +
        '6px;\n  }\n  .hidden {\n    display: none;\n  }',
customElements.define("esp-web-install-button", t);
