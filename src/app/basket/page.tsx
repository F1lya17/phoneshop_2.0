"use client";

import BasketPhone from "@/components/BasketPhone";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

export default function Basket() {
    const { basketArray } = useAppSelector(state => state.basket);
    const { totalCount, totalPrice } = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();

    return (
        <div className="basket">
            {basketArray.length ?
                <div>
                    <div className="basket-title">Корзина товаров</div>
                    <div className="basket-row">
                        <span /><span> Наименование</span><span>Кoличество</span><span>Цена</span><span />
                    </div>
                    {basketArray.map(el =>
                        <BasketPhone phone={el} key={el.id} />
                    )}
                    <div className="basket-row-footer">
                        <span />
                        <span />
                        <span>{totalCount}</span>
                        <span>{totalPrice}</span>
                        <span />
                    </div></div>
                :
                <h1 style={{ 'textAlign': 'center', 'marginTop': '250px', 'fontSize': '40px' }}>Корзина пока пуста</h1>
            }
        </div>
    );
}