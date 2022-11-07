const text = "pingkan";

const replaceVowel = (text) => {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (typeof text === "string") {
            if (text[i] === "a") {
                result += "o";
            } else if (text[i] === "i") {
                result += "o";
            } else if (text[i] === "u") {
                result += "o";
            } else if (text[i] === "e") {
                result += "o";
            } else {
                result += text[i];
            }
        } else {
            result += "Tipe data harus string !";
        }
    }
    return result;
};

console.log(replaceVowel(text));