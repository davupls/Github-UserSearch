# Github-UserSearchv2
 My second attempt at this challenge after seeing how I could improve the foundation code.

# Frontend Mentor - GitHub user search app solution

Webpage:
Github : https://davupls.github.io/Github-UserSearchv2/
Vercel : https://davupls.github.io/Github-UserSearchv2/

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
<!-- - **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS. -->

### Screenshot

<!-- ![](./screenshot.jpg) -->



### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS


### What I learned

- Using more CSS grid in the right situation simplify not complicates
- Taking the time to think through my approach before starting to code makes it way easier.


What I'm proud

```js
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
}
```

- So this is needed to iterate though the elements else "undefined" error, because the query returns an array.
```js
    if(lightMode === true){
        for(let i=0; i < test.length; i++){
            test[i].style.color = "#FFF";
        }
```

- Add and removes class styling
```js
  inputField.classList.add('placeholderColor');
  inputField.classList.remove('placeholderColor');
```

### Continued development

Finer tuning to CSS styles is needed for larger screens.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources


## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [@davupls](https://www.frontendmentor.io/profile/davupls)
- Twitter - [@davutech](https://www.twitter.com/davutech)


## Acknowledgments

Lots of thanks to FrontEnd Mentor for providing the resources to make this possible.
