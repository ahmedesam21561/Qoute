var numChecked1;

function Qoute() {
    var numChecked = Math.random();
    switch (true) {
        case numChecked <= 0.1 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“Be yourself; everyone else is already taken.”";
            document.getElementById("Qoute2").innerHTML = "― Oscar Wilde";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.2 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”";
            document.getElementById("Qoute2").innerHTML = "― Marilyn Monroe";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.3 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
            document.getElementById("Qoute2").innerHTML = "― Albert Einstein";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.4 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“So many books, so little time.”";
            document.getElementById("Qoute2").innerHTML = "― Frank Zappa";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.5 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“A room without books is like a body without a soul.”";
            document.getElementById("Qoute2").innerHTML = "― Marcus Tullius Cicero";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.6 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
            document.getElementById("Qoute2").innerHTML = "― Bernard M. Baruch";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.7 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“You only live once, but if you do it right, once is enough.”";
            document.getElementById("Qoute2").innerHTML = "― Mae West";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.8 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“Be the change that you wish to see in the world.”";
            document.getElementById("Qoute2").innerHTML = "― Mahatma Gandhi";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked <= 0.9 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“In three words I can sum up everything I've learned about life: it goes on.”";
            document.getElementById("Qoute2").innerHTML = "― Robert Frost";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
        case numChecked < 1 && numChecked != numChecked1:
            document.getElementById("Qoute1").innerHTML = "“If you tell the truth, you don't have to remember anything.”";
            document.getElementById("Qoute2").innerHTML = "― Mark Twain";
            numChecked1 = numChecked;
            console.log(numChecked1);
            break;
    }
}