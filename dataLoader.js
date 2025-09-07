console.log("start")


// Load "Subarashiki Kana Sensei" data.

const subarashikiTable = document.querySelector("#subarashiki_table_id")

subarashikiData.forEach(ep => {
    var tr = document.createElement("tr")
    tr.appendChild(createCell(ep.airDate));
    tr.appendChild(createCell(ep.subDate));
    tr.appendChild(createCell(ep.episodeNumber));
    tr.appendChild(createCell(ep.video));
    tr.appendChild(createCellWithLink(ep.subsLink));
    console.log('cur row: '+ tr.outerHTML)
    subarashikiTable.appendChild(tr);
});


function createCell(content){
    const cellText = document.createTextNode(content);

    var cell = document.createElement('td');
    cell.appendChild(cellText)

    return cell;
}


function createCellWithLink(content){
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = content;
    a.textContent = 'Subs';

    var cell = document.createElement('td');
    cell.appendChild(a);

    return cell;
}

console.log("end")