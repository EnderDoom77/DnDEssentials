function rollDice(displayID, n, d, mod = 0)
{;
    var numbers = new Array(Math.abs(n));
    var rolls = "";
    var modifier = "";
    var result = 0;

    for (let i = 0; i < Math.abs(n); i++) {
        numbers[i] = (Math.floor(Math.random() * d) + 1) * (n < 0 ? -1 : 1);
        if(numbers[i] === d && d >= 20)
        {
            rolls += " <span class=\"highlight-crit\">" + numbers[i] + "</span> + ";
        }
        else if(numbers[i] === 1 && d >= 20)
        {
            rolls += " <span class=\"highlight-fail\">" + numbers[i] + "</span> + ";
        }
        else if(numbers[i] === 1)
        {
            rolls += " <span class=\"font-red\">" + numbers[i] + "</span> + ";
        }
        else
        {
        rolls += numbers[i] + " + ";
        }
    }

    rolls = rolls.substring(0, rolls.length - 3);
    modifier = "(" + (mod < 0 ? "-" : "+") + Math.abs(mod) + ")";

    result = add(numbers) + mod;

    document.getElementById(displayID).firstElementChild.firstElementChild.innerHTML = rolls;
    document.getElementById(displayID).firstElementChild.lastElementChild.innerHTML = modifier;
    document.getElementById(displayID).children.item(1).innerHTML = "= " + result;

    return rolls + modifier + "= " + result;
}

function rollDiceFromText(displayID, str)
{
    var n = 1;
    var dSeparatorIndex = 0;
    var d = 4;
    var mod = 0;

    var foundMod = false;

    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        
        if(element === "d" || element === "D")
        {
            if(i == 0)
            {
                n = 1;
            }
            else
            {
                n = parseInt(str.substring(0, i));
            }
            dSeparatorIndex = i;
        }
        else if ((element === "+" || element === "-") && dSeparatorIndex != 0) {
            foundMod = true;
            d = parseInt(str.substring(dSeparatorIndex + 1, i - 1));
            mod = parseInt(str.substring(i + 1)) * (element === "-" ? -1 : 1);
        }
    }

    if(! foundMod)
    {
        d = parseInt(str.substring(dSeparatorIndex + 1));
    }

    return rollDice(displayID, n, d, mod);
}

function rollDiceFromTextElement(displayID, textID)
{
    return rollDiceFromText(displayID, document.getElementById(textID).value);
}

function add(list)
{
    var result = 0;

    list.forEach(n => {
        result += n;
    });

    return result;
}