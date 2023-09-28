import { reviewDataType } from "@/api/interfacesAoi";
import React from "react";
import photo from "../../public/star.png"
import Image from "next/image";

type ReviewPropsType = {
    review: reviewDataType
}

const Review: React.FC<ReviewPropsType> = function ({ review }) {

    return <div className="review">
        <div className="review__img">
            <Image alt="star" src={photo} />
        </div>
        <div className="review__info">
            <h2 className="review__email">{review.email}</h2>
            <p className="review__text">{review.text}</p>
        </div>
    </div>
}

export default Review;