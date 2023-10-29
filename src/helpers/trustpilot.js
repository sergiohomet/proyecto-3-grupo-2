export const getRating = (reviews) => {

    let reviewsSumadas = 0;

    for (let i = 0; i < reviews.length; i++) {
        reviewsSumadas += reviews[i].rating;
    }

    let promedio = reviewsSumadas / reviews.length;
    let resultado = promedio.toFixed(1);

    return resultado
}

export const getStars = (reviews) => {
    let resultado = Math.ceil(getRating(reviews))


    return resultado
}


export const getStarsLabel = (reviews) => {

    let rating = getStars(reviews)

    let resultado = "";
    switch (rating) {
        case 1:
            resultado = "Bad"
            break;
        case 2:
            resultado = "Poor"
            break;
        case 3:
            resultado = "Average"
            break;
        case 4:
            resultado = "Great"
            break;
        case 5:
            resultado = "Excellent"
            break;
        default:
            resultado = "Error"
    }

    return resultado;

}