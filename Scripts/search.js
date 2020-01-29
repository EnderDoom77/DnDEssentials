function searchEntries(str, entryClass, prefix, noResultsID)
{
    const entries = document.getElementsByClassName(entryClass);

    let occurances = 0;

    for (const key in entries) {
        if (entries.hasOwnProperty(key)) {
            const entry = entries[key];
            if(contains(entry.id.substring(prefix.length - 1), str) && entry.id !== noResultsID)
            {
                entry.style.display = "block";
                occurances++;
            }
            else
            {
                entry.style.display = "none";
            }
        }
    }

    if(occurances == 0)
    {
        document.getElementById(noResultsID).style.display = "block";
    }
    else
    {
        document.getElementById(noResultsID).style.display = "none";
    }
}

function resetSearch(entryClass, noResultsID)
{
    let entries = document.getElementsByClassName(entryClass);

    for (const key in entries) {
        if (entries.hasOwnProperty(key)) {
            const entry = entries[key];
            entry.style.display = "block";
        }
    }

    document.getElementById(noResultsID).style.display = "none";
}

function contains(str, segment)
{
    if(segment.length == 0) return true;

    n = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if(char === segment[n].toLowerCase() || segment[n] == " ")
        {
            if(++n >= segment.length)
            {
                return true;
            }
        }
    }

    return false;
}

function containsStrict(str, segment)
{
    str = str.toLowerCase();
    segment = segment.toLowerCase();

    if(segment.length == 0) return true;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(char === segment[0] && str.length >= i + segment.length)
        {
            if(str.substr(i, segment.length) === segment)
            {
                return true;
            }
        }
    }

    return false;
}