import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDragons } from "../store/selectors/index.js";
import { selectKnights } from "../store/selectors/index.js";
import { addCouple, removeCouple } from "../store/actions/coupleActions";

const CouplePage = () => {
    const dispatch = useDispatch();
    const dragons = useSelector(selectDragons);
    const knights = useSelector(selectKnights);

    const handleAddCouple = (dragonId, knightId) => {
        dispatch(addCouple(dragonId, knightId));
    };

    const handleRemoveCouple = (dragonId, knightId) => {
        dispatch(removeCouple(dragonId, knightId));
    };

    return (
        <div>
            <h1>Couples Dragon/Chevalier</h1>
            <div>
                <h2>Dragons</h2>
                <ul>
                    {dragons.map((dragon) => (
                        <li key={dragon.id}>
                            {dragon.name}
                            <button
                                onClick={() => handleRemoveCouple(dragon.id)}
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Chevaliers</h2>
                <ul>
                    {knights.map((knight) => (
                        <li key={knight.id}>
                            {knight.name}
                            <button
                                onClick={() => handleRemoveCouple(knight.id)}
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <h2>Ajouter un couple</h2>
            <select>
                {dragons.map((dragon) => (
                    <option key={dragon.id} value={dragon.id}>
                        {dragon.name}
                    </option>
                ))}
            </select>
            <select>
                {knights.map((knight) => (
                    <option key={knight.id} value={knight.id}>
                        {knight.name}
                    </option>
                ))}
            </select>
            <button onClick={() => handleAddCouple(dragonId, knightId)}>
                Ajouter couple
            </button>
        </div>
    );
};

export default CouplePage;
