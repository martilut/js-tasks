function isSpam(text, keywords) {
    text = text.toLowerCase();

    for (let i = 0; i < keywords.length; i += 1) {
        const keyword = keywords[i];
        if (text.includes(keyword)) {
            return true;
        }
    }

    return false;
}

const text = "Do you want free money? I can send you a link to get it";
const keywords = ["free", "link", "money"];

if (isSpam(text, keywords)) {
    console.log("Spam");
} else {
    console.log("Not spam");
}
