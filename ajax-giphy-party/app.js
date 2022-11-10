// console.log("Let's get this party started!");
const Api = `MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`

async function searchG(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  let response = await axios.get("http://api.giphy.com/v1/gifs/search?q=" + query +"&api_key=" + Api);
  return(response.data.data)
}

$("#sForm").on("submit", async function Search (evt) {
  evt.preventDefault();

  let query = $("#sBar").val();
  if (!query) return;


  let gif = await searchG(query);
  addG(gif)
});

$("#rBut").on("click", async function bClick (evt) {
    evt.preventDefault();
    const $gifList = $("#GIF");
    $gifList.empty();
});

function addG(gifs) {
    const $gifList = $("#GIF");
    for (gif of gifs) {
        console.log(gif)
        let $item = $(
            `<div class="col-md-6 col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid card-img-top" src="${gif.images.original.url}">
                    </div>
                </div>
            </div>
            `);
      $gifList.append($item);
    }
}