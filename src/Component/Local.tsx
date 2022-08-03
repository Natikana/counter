import React, {useEffect, useState} from 'react';

export const Local = () => {
    let [ count, setCount ] = useState<number>(0)


    useEffect(() => {
        let saveNumber = localStorage.getItem('keyCount')
        if (saveNumber) {
            let getCount = JSON.parse(saveNumber)
            setCount(getCount)
        }
    },[])
    useEffect(() => {
        localStorage.setItem('keyCount', JSON.stringify(count))
    },[count])

    const onClickHandler = () => {
        setCount(count + 1);
        console.log(count)
    }

   /*
    const setNumberHandler = () => {
        localStorage.setItem('keyCount', JSON.stringify(count))
    }

    const getNumberHandler = () => {

        let saveNumber = localStorage.getItem('keyCount')
        if (saveNumber) {
            let getCount = JSON.parse(saveNumber)
            setCount(getCount)
        }
    }

    const clearNumberHandler = () => {
        localStorage.clear()
        setCount(0)
    }

    const removeNumberHandler = () => {
        localStorage.removeItem('keyCount')
    }*/

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onClickHandler}>inc</button>
            {/*<button onClick={setNumberHandler}>setNumber</button>
            <button onClick={getNumberHandler}>getNumber</button>
            <button onClick={clearNumberHandler}>clearNumber</button>
            <button onClick={removeNumberHandler}>removeNumber</button>*/}
        </div>
    );
};


// rsc + tab =----
// compoenent
// arf + tab ---- func