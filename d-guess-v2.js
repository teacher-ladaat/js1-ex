const secret = Math.floor(Math.random() * 20) + 1;

let buttons = '';
for (let i = 1; i <= 20; i++) {
    let action;
    if (i < secret) {
        action = `alert('${i} קטן מהמספר הסודי. נסי מספר גדול יותר.')`;
    } else if (i > secret) {
        action = `alert('${i} גדול מהמספר הסודי. נסי מספר קטן יותר.')`;
    } else {
        action = `document.body.innerHTML = '<h1>כל הכבוד! ניחשת נכון, המספר הסודי הוא ${i}</h1>'; document.body.style.color = 'purple'`;
    }

    buttons += `<button onclick="${action}">${i}</button>`;
}
document.body.innerHTML = buttons;