import {useState, useEffect} from 'react';
function ExFetch(){
    const[user, setUser] = useState([])
    function fetchData(){
        fetch("https://randomuser.me/api/?results=1")
            .then(response => response.json())
            .then(data => setUser(data));
    }
    useEffect(()=>fetchData(),[]);
    return Object.keys(user).length>0 ? (
        <div>
            <h1>Hi {user.results[0].name.first}</h1>
        </div>
    ) : (
        <h1>Data Pending</h1>
    );
}
export default ExFetch;