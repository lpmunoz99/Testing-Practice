const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export default function caesarCipher(string, shift){
    if(shift < 0){
        throw new Error('Shift value is not valid');
    }

    const cipherAlphabet = cipherText(shift % 26);
    return string.replace(/[a-zA-Z]/g, (char) => {
        const index = alphabet.indexOf(char.toLowerCase());
        return char === char.toUpperCase() ? cipherAlphabet[index].toUpperCase() : cipherAlphabet[index];
    });
}

function cipherText(shift){
    const newArray = [];
    let i = shift;
    while(newArray.length < alphabet.length){
        if(i >= alphabet.length){
            i = 0;
        }
        newArray.push(alphabet[i]);
        i++;
    }

    return newArray;
}