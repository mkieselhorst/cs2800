// save images in an array
const imageArray = [
                        './images/img1.jpeg',
                        './images/img2.jpeg',
                        './images/img3.jpeg',
                        './images/img4.jpeg'
                        // Room for expansion
                    ];
// initialize the display object with the first image
let currentIndex = 0;
displayImage(currentIndex);

// func to display the current image
function displayImage(index){
    const imageContainer = document.getElementById('imageContainer');
    const imageURL = imageArray[index];
    imageContainer.innerHTML = `<image src="${imageURL}" alt="Img${index + 1}">`;
}
// function for displaying next image on click
function nextImage(){
    currentIndex = (currentIndex + 1) % imageArray.length;
    displayImage(currentIndex);
}
// Add clicking event
    const nextLink = document.getElementById('nextLink');
    nextLink.addEventListener('click', nextImage);
