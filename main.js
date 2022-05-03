const searchButton      = document.querySelector('.nav--btn');
const userSearchInput   = document.querySelector('#nav--input');

// Page Data Variables
const image     = document.querySelector('.main--img');
const userName  = document.querySelector('.user--con_h2');
const hashTag   = document.querySelector('.user--con_h4');
const joinData  = document.querySelector('.user--con_h3');

const bio       = document.querySelector('.main--article_p');
const repos     = document.querySelector('.repo');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following'); 
const userLocation  = document.querySelector('.location');
const website   = document.querySelector('.blog');
const twitter   = document.querySelector('.twitter');
const company   = document.querySelector('.company');


let data = {};
let username = '';
const url = "https://api.github.com/users/";

function populate(data){
    image.src           = data.avatar_url;
    userName.innerHTML  = data.name;
    hashTag.innerText   = `@${data.login}`;
    joinData.innerText  = data.created_at   ? `${data.created_at}`   : "not available";
    bio.innerHTML       = data.bio          ? `${data.bio}`          : "not available";
    repos.innerText     = data.public_repos ? `${data.public_repos}` : "not available";
    followers.innerText = data.followers    ? `${data.followers}`    : "not available";
    following.innerText = data.following    ? `${data.following}`    : "not available";
    userLocation.innerText  = data.location ? `${data.location}`    : "not available";
    website.innerText       = data.blog     ? `${data.blog}` : "not available";
    twitter.innerText       = data.twitter_username ? `${data.twitter_username}` : "not available";   
    company.innerText       = data.company  ? `${data.company}`  : "not available";
}

function getDataFromServer(){
    username = userSearchInput.value;
    fetch(url+username)
        .then((response) => {
            if(!response.ok) {
                throw Error(`HTTP error! Status: ${ response.status }`);
            }
                return response.json();
        })
        .then((response) => {
            console.log(response);
            data = response;
            populate(data);
        })
}

searchButton.addEventListener('click', getDataFromServer);