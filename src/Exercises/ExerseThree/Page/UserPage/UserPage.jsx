import React, {createContext, useContext, useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import Map from '../../Map/Map'
import './UserPage.scss'

import { Spin } from 'antd'

const UserContext = createContext();

function UserPage(){

    const { seed } = useParams();
    const [userVisited, setUserVisited] = useState(null)
    const [userData, setUserData] = useState([])
    const [flagData, setFlagUrl] = useState({
        url : '',
        alt : ''
    })

    const addUser = (user) => {
        setUserVisited(prevUsers => [...prevUsers, user]);
    };

    function formatDate(dateString) {
        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(2);

        return `${day}/${month}/${year}`;
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                setUserData(data.results[0]);

                const flagResponse = await fetch(`https://restcountries.com/v3.1/alpha/${data.results[0].nat}`);
                const flagData = await flagResponse.json();

                setFlagUrl({...flagData, url: flagData[0].flags.png, alt: flagData[0].flags.alt})
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(()=> console.log('Fetching data'))
    }, [seed]);



    return (
        <div className="user-page">
            <aside className="sidebar">
                {seed}
            </aside>
            {
                userData.length === 0 ? <Spin size={"large"} fullscreen={true}/> : (
                    <main className="main">
                        <div className="info" style={{display: "flex", justifyContent: "center"}}>
                            <img src={userData.picture.large} alt={userData.name.first}/>
                        </div>
                        <div className="info">
                            <h1>Name</h1>
                            <p><span style={{
                                textTransform: "uppercase",
                                fontWeight: "bold"
                            }}>{userData.name.first}</span> {userData.name.last}</p>
                        </div>
                        <div className="info">
                            <h1>Gender</h1>
                            <p>{userData.gender}</p>
                        </div>
                        <div className="info">
                            <h1>Nationalité</h1>
                            <img style={{ height :"80px", marginTop : '10px' }} src={flagData.url}  alt={flagData.alt}/>
                        </div>
                        <div className="info">
                            <h1>Email</h1>
                            <p>{userData.email}</p>
                        </div>

                        <div className="info">
                            <h1>Date de naissance</h1>

                            <p>{formatDate(userData.dob.date)}</p>

                        </div>

                        <div className="info">
                            <h1>Age</h1>
                            <p>{userData.dob.age} ans</p>
                        </div>

                        <div className="info" style={{ display : "flex", flexDirection : "column"}}>
                            <h1>Adress</h1>
                            <p>{`${userData.location.street.number} ${userData.location.street.name}`}</p>
                            <p>{userData.location.city}</p>
                            <p>{userData.location.state}</p>
                            <p>{userData.location.country}</p>
                            <p>{userData.location.postcode}</p>
                        </div>

                        <div className="info" style={{ display : "flex" , flexDirection : "column"}}>
                            <h1>Contact infos</h1>
                            <p>Phone : {userData.phone}</p>
                            <p>Cell : {userData.cell}</p>
                        </div>

                        <div className="info">

                        </div>
                    </main>
                )
            }
        </div>
    )
}

export default UserPage