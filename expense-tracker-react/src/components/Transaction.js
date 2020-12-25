import React, {useContext}from "react";
import { GlobalContext } from "../context/GlobalState";


export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    const borderClassName =  transaction.amount < 0 ? 'minus' : 'plus';

    return (
        <li className={borderClassName}>
        {transaction.text} 
        <span>{sign}Rs {Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    )
}
