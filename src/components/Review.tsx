import { reviewDataType } from "@/api/interfacesAoi";
import React from "react";
import camera from "../../public/camera.svg"
import Image from "next/image";

type ReviewPropsType = {
    review: reviewDataType
}

const Review: React.FC<ReviewPropsType> = function ({ review }) {

    return <div className="review">
        <div className="review__img">
            <Image width={35} height={35} alt="camera" src={camera} />
        </div>
        <div className="review__info">
            <h2 className="review__email">{review.email}</h2>
            <h3 className="review__rating">Оценка - {review.rating} балла(ов)</h3>
            <p className="review__text">{review.text}</p>
            <h3 className="review__date">{review.date}</h3>
        </div>
    </div>
}

export default Review;