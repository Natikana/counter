import React, {useState} from 'react';
import {Select} from "./Select";

type ListProps = {
    value:string
    name:string
}
export type MainListProps = {
    list:ListProps[]
    value:string
    changeListChoice:(value:string ) => void
}

export const WithValue:React.FC<MainListProps> = ({list, changeListChoice,value})=> {
    const [title, setTitle] = useState('2')
    return (
        <Select list={list} value={title} changeListChoice={setTitle}/>
    );
};
