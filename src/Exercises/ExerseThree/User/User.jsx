// User.js
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './User.scss'
const User = ({ user, seed }) => {
    const calculateDaysUntilBirthday = (dateDeNaissance) => {
        const today = new Date()
        const birthday = new Date(dateDeNaissance)
        birthday.setFullYear(today.getFullYear())
        if (today > birthday) {
            birthday.setFullYear(today.getFullYear() + 1)
        }
        const diff = birthday - today
        return Math.ceil(diff / (1000 * 60 * 60 * 24))
    }


    return (
        <>
            <Link to={`/${seed}`} style={{textDecoration : "none", color : "black" }}>
                <div id="card">
                    <div id="card-title">
                        <h1>République de BANGALAND</h1>
                    </div>
                    <div id="card-id">
                        <div id="card-number">
                            <p className="cardtitle">Carte nationale d'identité :</p>
                            <p>000000000000</p>
                        </div>
                        <p className="cardtitle">Nationalité Bangalandaise</p>
                    </div>
                    <div id="card-information">
                        <div id="card-photo">
                            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`}/>
                        </div>
                        <div id="card-text">
                            <div id="card-name">
                                <div className="card-box"></div>
                                <p className="cardtitle">Nom :</p>
                                <p>{user.name.first}</p>
                                <div className="card-box"></div>
                                <p className="cardtitle">Prénom :</p>
                                <p>{user.name.last}</p>
                            </div>
                            <div id="card-detail">
                                <div className="card-box">
                                    <p className="cardtitle">Sexe :</p>
                                    <p>{user.gender}</p>
                                </div>
                                <div className="card-box">
                                    <p className="cardtitle">Né(e) le :</p>
                                    <p>{new Date(user.dob.date).toLocaleDateString('fr-FR')}</p>
                                </div>
                                <div className="card-box">
                                    <p className="cardtitle">Adresse :</p>
                                    <p>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.postcode}`}</p>
                                </div>
                            </div>
                            <div>
                                <p className="cardtitle">Nombre de jour avant son anniversaire:</p>
                                <p>{calculateDaysUntilBirthday(new Date(user.dob.date).toLocaleDateString('fr-FR'))}</p>
                            </div>
                            <div id="card-sign"></div>
                        </div>
                    </div>
                    <div id="card-code">
                        <p>
                            {"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   <<<<<<<<<<<<<<<<<<<<<<<<"}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default User
