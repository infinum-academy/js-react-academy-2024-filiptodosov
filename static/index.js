let reviews = [];

const initializeWebpage = () =>{
    if(localStorage.getItem("reviews") !== null){
        reviews = JSON.parse(localStorage.getItem("reviews"));
    }
    
    reviews.forEach(item => {
        document.querySelector("#submittedReviews").appendChild(createItem(item));
    })

    updateAverage();
}

const saveReviews = () =>{
    localStorage.setItem("reviews", JSON.stringify(reviews));
}


const updateAverage = () =>{
    let sum = 0;

    reviews.forEach(item => {
        sum += item.rating;
    })

    document.querySelector("#averageRating").innerText = reviews.length == 0 ? "No rating" :  `${Math.round(sum / reviews.length * 10) / 10}/5`;
    if(reviews.length == 0){

    }
}



const deleteButtonHandler = (e)=>{
    for(let rev in reviews){

        if(e.id.split('-')[2] == reviews[rev].id) {
            reviews.splice(rev, 1);
            break;
        }
        
    }

    saveReviews();

    updateAverage();

    const currentItem = e.parentElement;
    currentItem.parentElement.removeChild(currentItem);
}



const createItem = (item) => {
    let reviewItem = document.createElement("div");
    let reviewText = document.createElement("p");
    reviewText.innerText = item.review;
    
    let ratingText = document.createElement("p");
    ratingText.innerText = `${item.rating} / 5`;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.id = `button-delete-${item.id}`;
    
    deleteButton.setAttribute("onclick", "deleteButtonHandler(this)");

    updateAverage();



    reviewItem.append(reviewText, ratingText, deleteButton);

    return reviewItem;
}


const postReview = () =>{
    const newItem = {
        review: document.querySelector("#review").value,
        rating: parseInt(document.querySelector("#rating").value, 10),
        id: reviews.length
    };

    if(newItem.review != "" && typeof newItem.rating === 'number' && isFinite(newItem.rating)){
        
        reviews.push(newItem);
        saveReviews();

        document.querySelector("#submittedReviews").appendChild(createItem(newItem));
        document.querySelector("#review").value = "";
        document.querySelector("#rating").value = "";
    
    }

    else {
        alert("Both fields are mandatory!");
    }
}

initializeWebpage();
