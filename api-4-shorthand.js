
const loadShortApi=(fullLink)=>{
    const url=`https://api.shrtco.de/v2/shorten?url=${fullLink}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayShortLink(data.result.short_link))
}
const displayShortLink=shortLink=>{
    console.log(shortLink);
    const linkContainer=document.getElementById('short-link-container')
    linkContainer.innerHTML=`
    <div class="grid grid-cols-2">
        <input id="short-link" class="p-3 bg-amber-200" value="${shortLink}">
        <button id="short-btn" onclick=copyLink() class="btn btn-outline btn-success">Copy Link</button>
    </div>
    `
}
const copyLink=()=>{
    const shortLink=document.getElementById('short-link')
    shortLink.select()
    navigator.clipboard.writeText(shortLink.value)
}

document.getElementById('short-btn').addEventListener('click', function () {
    const inputLink=document.getElementById('input-filed');
    const originalLink=inputLink.value;
    inputLink.value='';
    loadShortApi(originalLink)
})

// loadShortApi('https://www.facebook.com/groups/1232069727348110/?hoisted_section_header_type=recently_seen&multi_permalinks=1252710008617415')