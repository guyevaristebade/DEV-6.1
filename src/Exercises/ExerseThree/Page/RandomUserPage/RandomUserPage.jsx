import React, {useEffect, useState} from 'react'
import User from "../../User/User";


function RandomUserPage() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);


    const fetchUser = () => {

        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                setUserId(data.info.seed)
                setUser(data.results[0]);
            });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="App">
            {user && <User user={user} seed={userId} />}
            <div className="btn-container" style={{display : "flex", justifyContent : "center", padding : "20px" }}>
                <button onClick={fetchUser}>Load New User</button>
            </div>
        </div>
    );
}

export default RandomUserPage