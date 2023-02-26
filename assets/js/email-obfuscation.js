function decrypt(encoded) {
    let decoded = atob(encoded);

    return decoded;
}

function encodeString(str) {
    let new_str = []
    for (let i in str) {
        new_str.push(`&#${str.charCodeAt(i)}`);
    }
    new_str = new_str.join('');
 
    return new_str;
}

function randomize_encoding(str) {
    let new_str = [];
    for (let i in str) {
        let chance = Math.random();

        if (chance < 0.5) {
            new_str.push(encodeString(str[i]));
        }
        else {
            new_str.push(str[i]);
        }
    }
    new_str = new_str.join('');
    
    return new_str;
    }

function turn_around(str) {
    let new_str = str.split("").reverse().join("");
    console.log(new_str);
    return new_str;
}

function decryptEmail_mailto() {
    const elements = document.querySelectorAll('.mail_obfuscate_mailto');

    for (let element of elements) {
        let mailto = element.href.split('mailto:');
        let address = decrypt(mailto[mailto.length - 1]);

        let address_around = turn_around(address);

        element.href = `mailto:${address_around}`;
    }
}

function decryptEmail() {
    const elements = document.querySelectorAll('.mail_obfuscate');

    for (let element of elements) {
        let address = decrypt(element.innerHTML);

        let address_around = turn_around(address);
        
        let temp1 = address_around.split('@')
        const user = temp1[0];
        let temp2 = temp1[1].split('.');
        const domain = temp2[0]
        const tld = temp2[1]

        let address_obfuscated = `${randomize_encoding(user)}<span>&#x40;<script>//</span><span>totally@valid.com</span></script><span class="email">theaddress</span>${domain}<span class="xmpp" >totally_invalid@address.xyz</span><span>&period;<span style="display: none;">&#46;<a class="email">email(.)</a>.de<span></span>net</span>${encodeString(tld)};</span></span>`

        element.innerHTML = address_obfuscated;
    }
}

decryptEmail()
decryptEmail_mailto()
