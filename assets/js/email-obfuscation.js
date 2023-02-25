function decrypt(encoded) {
    let decoded = atob(encoded);

    return decoded;
}

function encodeString(str) {
    let newstr = []
    for (let i in str) {
        newstr.push(`&#${str.charCodeAt(i)}`);
    }
    newstr = newstr.join('');
    return newstr;
}

function decryptEmail_mailto() {
    const elements = document.querySelectorAll('.mail_obfuscate_mailto');

    for (let element of elements) {
        let mailto = element.href.split('mailto:');
        let address = encodeString(decrypt(mailto[mailto.length - 1]));

        element.href = `mailto:${address}`;
    }
}

function decryptEmail() {
    const elements = document.querySelectorAll('.mail_obfuscate');

    for (let element of elements) {
        let address = decrypt(element.innerHTML);
        
        let temp1 = address.split('@')
        const user = temp1[0];
        let temp2 = temp1[1].split('.');
        const domain = temp2[0]
        const tld = temp2[1]

        let address_obfuscated = `${user}<span>&#x40;<script>//</span><span>totally@valid.com</span></script><span class="email">theaddress</span>nl<span class="xmpp">spam@nlion.nl</span>i<span>on&period;<span style="display: none;"><a class="email">email(.)</a>.de<span></span>net</span>&#x6E;&#x6C;</span></span>`

        element.innerHTML = address_obfuscated;
    }
}

decryptEmail()
decryptEmail_mailto()
