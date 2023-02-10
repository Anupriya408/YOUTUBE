const MY_API_KEY= `AIzaSyAVyWtIcFuqalVMLQRAG1Sr5LsQT9j9Jes`

const search = async () => {
    const val = document.getElementById("searchInput").value
    const content= document.getElementById("content")
    const items= await getResult(val)
    let childString= ``
    items.forEach(element => {
        childString += `<div onclick="showVideo()" id=${element.id.videoId} data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="card" style="width: 18rem;">
        <img src=${element.snippet.thumbnails.medium.url} id=${element.id.videoId} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${element.snippet.title}</p>
        </div>
      </div>
      </div>`
    });

    content.innerHTML= childString
}

const getResult = async (val) => {
    const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${val}&key=${MY_API_KEY}`
    const res= await fetch(url)
    const data= await res.json()
    return data.items
}

const showVideo = () => {
    const ourIframe = document.getElementById("ourIframe")
    ourIframe.src = `https://www.youtube.com/embed/${event.target.id}`
}