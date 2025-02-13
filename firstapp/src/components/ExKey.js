import {useState} from 'react';

const ToDo = props =>(
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <label>{props.name}</label>
        </td>
        <td>
            <input/>
        </td>
    </tr>
)


function ExKey(){
    const [toDos, setToDos] = useState([{
        id: 1,
        name: "Todo 1",
    }, {
        id: 2,
        name: "Todo 2",
    }]);
    const reverseOrder = () => {
        setToDos([...toDos].reverse());
    }

    return (
        <div>
            <button onClick={reverseOrder}>Reverse Order</button>
            <table>
                <tbody>
                    {toDos.map(toDo =>(
                        <ToDo key={toDo.id} id={toDo.id} name={toDo.name}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default ExKey;