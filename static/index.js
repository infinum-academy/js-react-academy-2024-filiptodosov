let reviews = [];

let sum = 0;

if(localStorage.getItem("reviews") !== null) reviews = JSON.parse(localStorage.getItem("reviews"));



const updateAverage = () =>{
    document.querySelector("#averageRating").innerText = `${Math.round(sum / reviews.length * 10) / 10}/5`;
}

const createItem = (item) => {
    let reviewItem = document.createElement("div");
    let reviewText = document.createElement("p");
    reviewText.innerText = item.review;
    
    let ratingText = document.createElement("p");
    ratingText.innerText = `${item.rating} / 5`;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.id = `item-${item.id}`;
    
    updateAverage();

    deleteButton.addEventListener("click", (e)=>{
        for(let rev in reviews){
            console.log(`${e.target.id.split('-')[1] } VS..... ${reviews[rev].id}`)

            if(e.target.id.split('-')[1] == reviews[rev].id) {
                sum -= reviews[rev].rating;
                console.log("brisam", reviews[rev]);
                reviews.splice(rev, 1);
                break;
            }
            
        }
    
        localStorage.setItem("reviews", JSON.stringify(reviews));

        updateAverage();

        const currentItem = e.target.parentElement;
        currentItem.parentElement.removeChild(currentItem);


        console.log(reviews);

    })

    reviewItem.append(reviewText, ratingText, deleteButton);

    return reviewItem;
}


reviews.forEach(item => {
    sum += item.rating;
    document.querySelector("#submittedReviews").appendChild(createItem(item));
})
updateAverage();


document.querySelector("#postButton").addEventListener("click", ()=>{

    const newItem = {
        review: document.querySelector("#review").value,
        rating: parseInt(document.querySelector("#rating").value, 10),
        id: reviews.length
    };

    sum +=newItem.rating;

    reviews.push(newItem);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    document.querySelector("#submittedReviews").appendChild(createItem(newItem));
    document.querySelector("#review").value = "";
    document.querySelector("#rating").value = "";

})
