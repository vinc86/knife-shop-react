import React from 'react'
import KnifeContext from "../KnifeContext";
import data from "../data.json";

export default function KnifeProvider(props) {
    return (
        <KnifeContext.Provider value={{data}}>
            {props.children}
        </KnifeContext.Provider>
    )     
}
