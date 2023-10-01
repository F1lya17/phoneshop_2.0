import React, { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { Review } from "@/api/interfacesAoi";
import { useAppSelector } from "@/hooks/reduxHooks";

type NewReviewPropsType = {
    id: string,
    reviews: Review["data"]
}

const NewReview: React.FC<NewReviewPropsType> = function ({ id, reviews }) {
    const [rating, setRating] = useState(0);
    const [selectedStar, setSelectedStar] = useState(0);
    const [stars, setStars] = useState([1, 2, 3, 4, 5]);
    const [reviewText, setReviewText] = useState('');
    const { email } = useAppSelector(state => state.user);

    const starClick = (value: number) => {
        setRating(value);
        setSelectedStar(value);
    }

    const addReview = (e: React.MouseEvent) => {
        e.preventDefault();
        fetch(`https://6502dd6aa0f2c1f3faeb0054.mockapi.io/api/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                id: id,
                data: [...reviews, {
                    email: email ? email : "anonimus",
                    text: reviewText,
                    rating: selectedStar,
                    date: new Date().toLocaleString('ru-RU')
                }]
            })
        });
        setReviewText('');
    }

    return (
        <div className="new-review">
            <h2 className="new-review__title">Оставить отзыв:</h2>
            <form className="new-review__form">
                <div className="new-review__rating">
                    <h3 className="new-review__rating-title">Общая оценка</h3>
                    <div className="new-review__stars stars">
                        {
                            stars.map(st =>
                                <div
                                    onMouseEnter={() => setRating(st)}
                                    onMouseLeave={() => setRating(selectedStar)}
                                    onClick={() => starClick(st)}
                                    key={st}
                                    className={st <= rating ? "stars__star-filled" : "stars__star"}
                                >
                                    ☆
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="new-review__text">
                    <h3 className="new-review__rating-title">Расскажите подробнее</h3>
                    <textarea
                        value={reviewText}
                        className="new-review__input"
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Расскажите свои впечатления"
                    />
                </div>
                <Button onClick={addReview}>Отправить</Button>
            </form>
        </div>
    );
}

export default NewReview;