//https://www.youtube.com/watch?v=tc8DU14qX6I&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=3

//Video Working with Data & APIS in Javascript

//the fetch web API function

//use MDN moz to learn more about Fetch in more detail




//HOMEWORK

//to get a random picture from a site that does NOT require a key, but can just give you a random image.



//fetch an image

//fetch more tha one image

//fetch an image from a array

//fetch plane text


//PRACTICE

async function practice(){
    return 1
}

practice().then(console.log); //1



async function practice2(){
    return Promise.resolve(2)
}

practice2().then(console.log); //2


//Remember, await can only work within an async function

async function practice3(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!", 1000))
    })
}

//i didn't work. the image wasn't brought up.

//first, set up the const for variables that are not going to be altered or changed.

const img = document.querySelector('img')
const button = document.querySelector('button')
const div = document.querySelector('div')
const url = "https://dog.ceo/api/breeds/image/random" 

//now, when the button is clicked, the getImage function will run BUT that is not enough. You cannot just call on the function, as calling it leaves it in a pending or pergatory state. Something must be done with the result of the function.


const getImage = async (url) => {
	return await fetch(url).then(res => res.url)
  }


//this is done just to test and see that yes, it is working. it is connected correctly to the html file
button.addEventListener('click', () => {
	getImage(url)
	  .then(result => {
		img.setAttribute('src', result)
		})
//this last part is just to catch if there was an error. CATCH is the key word here
		.catch(err => {
			console.log(`Error -> ${err}`)
			const errorMessage = "Sorry, but there was an error with getting your image."
			const p = document.createElement('p')
			const container = document.querySelector('.container')
			p.innerText = errorMessage
			//display an error message to the user
			container.appendChild(p)
		})


	
	// this was done just to prove that yes, it is running correctly.  console.log("it's working. it clicked");
})