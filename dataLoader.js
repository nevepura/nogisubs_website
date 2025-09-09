// Load "Subarashiki Kana Sensei" data.

const subarashikiTable = document.querySelector("#subarashiki_table_id")

subarashikiData.forEach(ep => {
    var tr = document.createElement("tr")
    tr.appendChild(createCell(ep.airDate));
    tr.appendChild(createCell(ep.subDate));
    tr.appendChild(createCell(ep.episodeNumber));
    tr.appendChild(createCell(ep.video));
    tr.appendChild(createCellWithLink(ep.subsLink, 'Subs'));
    subarashikiTable.appendChild(tr);
});

// Load Haishinchuu data

const haishinchuuTable = document.querySelector("#haishinchuu_table_id");
//console.log(haishinchuuTable.outerHTML) 
haishinchuuData.forEach(el => {
    var tr = document.createElement("tr")
    tr.appendChild(createCell(el.subDate))
    tr.appendChild(createCell(el.engTitle))
    tr.appendChild(createCell(el.japTitle))
    tr.appendChild(createCellWithLink(el.linkVideo, "Video"))
    tr.appendChild(createCellWithLink(el.linkSubs, "Subs"))
    haishinchuuTable.appendChild(tr)
})


function createCell(content){
    const cellText = document.createTextNode(content);

    var cell = document.createElement('td');
    cell.appendChild(cellText)

    return cell;
}


function createCellWithLink(link, text){
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = link;
    a.textContent = text;

    var cell = document.createElement('td');
    cell.appendChild(a);

    return cell;
}
