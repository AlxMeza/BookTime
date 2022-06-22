class Post{
    constructor(image, title, author, description, link){
        this._image = image;
        this._title = title;
        this._author = author;
        this._description = description;
        this._link = link;
    }
    get image(){
        return this._image;
    }
    set image(value){
        this._image = value;
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title = value;
    }
    get author(){
        return this._author;
    }
    set author(value){
        this._author = value;
    }
    get description(){
        return this._description;
    }
    set description(value){
        this._description = value;
    }
    get link(){
        return this._link;
    }
    set link(value){
        this._link = value;
    }
}

let post = [];

// Funciones para crear un nuevo post
const createPost = (post) => {
    let postHtml = `
        <div class="col-md-12 col-lg-5 card me-md-4 my-4 mx-lg-4">
            <div class="card-body">
                <img src=${post.image} alt=${post.title} class="img-fluid">
                <div class="card-title"><h1>${post.title}</h1></div>
                <div class="card-subtitle fw-bold"><h3>${post.author}</h3></div>
                <p class="card-text">
                    ${post.description}
                </p>

                <a href=${post.link} target="_blank" class="btn btn-info">Ver más</a>
            </div>
        </div>
    `;
    return postHtml;
}

const loadPost = () => {
    let postHtml = ''
    for(let element of post){
        postHtml += createPost(element);
    }
    document.getElementById('addpost').innerHTML = postHtml;
}

function addPost(){
    let form = document.getElementById('formPost');
    let image = form['image'];
    let title = form['title'];
    let author = form['author'];
    let description = form['description'];
    let link = form['link'];

    if(image.value !== '' && title.value !== '' && author.value !== '' && description.value !== '' && link.value !== ''){
        post.push(new Post(image.value, title.value, author.value, description.value, link.value));
        loadPost();
    }
}

class Phrase
{
    constructor(author_cite, title_book, cite, date)
    {
        this._author_cite = author_cite;
        this._title_book = title_book;
        this._cite = cite;
        this._date = date;
    }

    get author_cite(){
        return this._author_cite;
    }
    set author_cite(value){
        this._author_cite = value;
    }
    get title_book(){
        return this._title_book;
    }
    set title_book(value){
        this._title_book = value;
    }
    get cite(){
        return this._cite;
    }
    set cite(value){
        this._cite = value;
    }
    get date(){
        return this._date;
    }
    set date(value){
        this._date = value;
    }
}

let phrases = [];

// Funciones para crear una nueva cita
const createPhrase = (phrase) => {
    let phraseHtml = `
        <div class="col-md-5 card border-success me-md-4 my-4 mx-lg-4">
            <div class="card-header text-center"><h2>${phrase.author_cite}</h2></div>
            <div class="card-body">
                <div class="card-subtitle"><h3>${phrase.title_book}</h3></div>
                <p class="lead">"${phrase.cite}" </p>
            </div>
            <div class="card-footer text-muted">Publicado en ${phrase.date}</div>
        </div>
    `;
    return phraseHtml;
}

const loadPhrase = () => {
    let phraseHtml = ''
    for(let element of phrases){
        phraseHtml += createPhrase(element);
    }
    document.getElementById('addphrase').innerHTML = phraseHtml;
}

function addPhrase(){
    let form = document.getElementById('formPhrase');
    let author_cite = form['author_cite'];
    let title_book = form['title_book'];
    let cite = form['cite'];
    let date = form['date'];

    if(author_cite.value !== '' && cite.value !== '' && date.value !== '' && title_book.value !== ''){
        phrases.push(new Phrase(author_cite.value, title_book.value, cite.value, date.value));
        loadPhrase();
    }
}