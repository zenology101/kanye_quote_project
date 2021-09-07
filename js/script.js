const quoteH3 = $('.quote');
//create a function to get the quote 

//get all the images 

imageArray = ["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg",
"img6.jpeg","img7.jpeg","img8.jpeg","img9.jpeg","img10.jpeg"]

function randomImage(){

    //get a random index 
    randomIndex = Math.floor(Math.random() * imageArray.length)

    //get an image at the randomIndex
    selectedImage = imageArray[randomIndex]

    //display the image 
    //google attr (applies to certain html tags)
    $('#randomPicture').attr("src",`./image/${selectedImage}`)
}

function getQuote () {
  $.ajax('https://api.kanye.rest/').then((info) => {
  console.log(info)
  //why did i need to write this in the function and couldn't declare it outside (const quoteText = info.quote;)
  //const quoteText = info.quote;
  //quoteH3.append(quoteText)
  quoteH3.text(info.quote)
}).catch((error) => {
  console.log(error)
})
}

$("#quoteBtn").on("click", () =>{
  getQuote()
  randomImage()
})

getQuote()
randomImage()


///////////////
//Resources used 
////////////////i

//1 --> https://www.youtube.com/watch?v=D7Z1rF5j-Bs --> this helped me get the data from the API
//2 --> freecodecamp.org/news/location-reload-method-how-to-reload-a-page-in-javascript/ --> helped me give my button the ability to reload the page 
//3 --> https://github.com/BlakeEriks/goal-feed --> shows how to make an image folder and cycle through them with js 
//4 --> used unsplash to get images 
//5 --> later upgrades can include choosing how many quotes you want back 
//6 --> increase mobile performance 


// $.ajax('https://api.kanye.rest/').then((info) => {
//   //console.log(info)
//   //why did i need to write this in the function and couldn't declare it outside (const quoteText = info.quote;)
//   const quoteText = info.quote;
//   //quoteH3.append(quoteText)
//   quoteH3.text(quoteText)
// }).catch((error) => {
//   console.log(error)
// })

// $('#btn').click(function() {
//   location.reload(true);
// });

// $(function(){


//   $.ajax({
//     //type:'GET',
//     url:'https://api.kanye.rest/&quote'
//   }).then(
//     function(data){
//         $quote.text(data.$quote);
//         console.log(data)
//     },
//     function(error){
//      console.log('bad request', error);
//     }
//   );

// })



// $.ajax({
//     type:'GET',
//     url:'https://api.kanye.rest/&quote'
//   }).then(
//     function(data){
//         $quote.text(data.$quote);
//         console.log(data)
//     },
//     function(error){
//      console.log('bad request', error);
//     }
//   );
