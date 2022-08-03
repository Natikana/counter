import React, {useEffect, useState} from 'react';
import {Counter} from "./Component/Counter/Counter";
import {ButtonDop} from "./Component/ButtonDop";
type GetType = {
    'userId':string
    'id':number
    'title':string
    'body':string
}
function App() {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<string>('')

    const incAmount = () => {
        setCount(count + 1)
    }
    const resetAmount = () => {
        setCount(0)
    }
    const onClickMaxInput = () => {
        localStorage.setItem('valueMax', JSON.stringify(maxValue))
    }

    const onClickMinInput = () => {
        localStorage.setItem('valueMin', JSON.stringify(minValue))
    }

    const onClickSetInput = () => {
        let keyValueMin = localStorage.getItem('valueMin')
        let keyValueMax = localStorage.getItem('valueMax')

        if (keyValueMin && keyValueMax) {
            minValue = JSON.parse(keyValueMin)
            localStorage.removeItem('valueMin')
            maxValue = JSON.parse(keyValueMax)
            localStorage.removeItem('valueMax')
        }
    }
    const [get, setGet] =useState<Array<GetType>>([])
    console.log(get)
    const getRequestHandler = () => {
        setGet([])

    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    },[])
    return (

        <div>
            <ButtonDop nickName={'cleanPage'} callBack={getRequestHandler}/>
            <p></p>
            <ul>
            {get.map((el:GetType)=> {
                return (
                    <li key={el.id}>
                        <span>{el.id}--</span>
                        <span>{el.userId}--</span>
                        <span>{el.title}--</span>
                        <span>{el.body}</span>
                    </li>
                )
            })}
            </ul>
            <Counter
                maxValue={maxValue}
                minValue={minValue}
                count={count}
                error={error}
                resetAmount={resetAmount}
                incAmount={incAmount}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                onClickSetInput={onClickSetInput}
                onClickMaxInput={onClickMaxInput}
                onClickMinInput={onClickMinInput}
                setCount={setCount}
            />
        </div>

    );
}

export default App;
