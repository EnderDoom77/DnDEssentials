function searchEntries(str, entryClass, prefix, noResultsID)
{
    var entries = document.getElementsByClassName(entryClass);

    var occurances = 0;

    entries.forEach(entry => {
        if(entry.name.contains(str))
        {
            entry.style.display = "block";
            occurances++;
        }
        else
        {
            entry.style.display = "none";
        }
    });

    if(occurances == 0)
    {
        document.getElementById(noResultsID).style.display = "block";
    }
    else
    {
        document.getElementById(noResultsID).style.display = "none";
    }
}