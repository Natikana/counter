import React, {useState} from 'react';
import cl from "./Select.module.css"
type ListProps = {
    value:string
    name:string
}
export type MainListProps = {
    list:ListProps[]
    value:string
    changeListChoice:(value:string ) => void
}
export const Select:React.FC<MainListProps> = ({list, changeListChoice,value}) => {
    const [active, setActive] = useState(false)
    const clickedName = list.find(el=> el.value === value)

    const toggleName = () => {
        setActive(!active)
    }
    const onClickName = (value:string) => {
        changeListChoice(value)
        toggleName()
    }

    return (
        <div>
            <h3 onClick={toggleName} className={cl.item}>{clickedName && clickedName.name}</h3>
            {
                active &&
            list.map(el => <div key={el.value} onClick={()=>onClickName(el.value)} >{el.name}</div>)
            }
        </div>
    );
};
