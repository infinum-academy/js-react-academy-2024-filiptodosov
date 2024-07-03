let reviews = [
    {
        review: "Ok OK",
        rating: 5
    },
    {
        review: "Ok OK",
        rating: 1
    },
    {
        review: "Ok OK",
        rating: 3
    }
]


const createItem = (item) => {
    let reviewItem = document.createElement("div");
    let reviewText = document.createElement("p");
    reviewText.innerText = item.review;
    
    let ratingText = document.createElement("p");
    ratingText.innerText = `${item.rating} / 5`;

    reviewItem.append(reviewText, ratingText);

    return reviewItem;
}


reviews.forEach(item => {
    document.querySelector("#submittedReviews").appendChild(createItem(item));
})


document.querySelector("#postButton").addEventListener("click", ()=>{

    const newItem = {
        review: document.querySelector("#review").value,
        rating: document.querySelector("#rating").value
    };

    reviews.push(newItem);

    document.querySelector("#submittedReviews").appendChild(createItem(newItem));
    document.querySelector("#review").value = "";
    document.querySelector("#rating").value = "";
})
