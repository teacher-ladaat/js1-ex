let play = true;

while (play) {
    let count = 1;
    const num = Math.floor(Math.random() * 20) + 1;
    console.log(num);    

    let guess = Number(prompt("נחש מספר בין 1 ל-20"));
    while (num !== guess) {
        if (!guess)
            break;

        if (guess > num) {
            alert("גבוה מידי");
        } else {
            alert("נמוך מידי");
        }
        guess = Number(prompt("נחש מספר בין 1 ל-20"));
        count++;
    }

    let msg;
    if (count <= 3) {
        msg = "מדהים!";
    }
    else if (count <= 6) {
        msg = "יפה מאוד";
    } else {
        msg = "אפשר לשפר";
    }

    alert(`${msg} ניחשת אחרי ${count} ניסיונות`);
    console.log(`${msg} ניחשת אחרי ${count} ניסיונות`);

    play = confirm("האם ברצונך לשחק שוב?");
}