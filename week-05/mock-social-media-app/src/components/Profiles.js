import { data } from '../data/server'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Profiles() {

    const [selectedProfile, setSelectedProfile] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        profileImage: ""
    })

    const [selected, setSelected] = useState(false)

    const handleClick = (profile) => {
        setSelectedProfile(profile)
        setSelected(true)
    }

    return (
        <div>
            {data.contactProfiles.map((profile) => {
                return (
                    <div>
                         <h1 onClick={() => handleClick(profile)}>{profile.firstName} {profile.lastName}</h1>
                    </div>
                )
            })}

            {selected ?
                <div className="profilePic">
                    <div>Birthday - {selectedProfile.birthday.substring(0, 10)}</div>
                    <Link exact to={`/profiles/${data.contactProfiles.indexOf(selectedProfile)}/profile-image`}>
                        <img src={selectedProfile.profileImage} alt="profile picture" />
                    </Link>
                </div> :
                <div></div>
            }
        </div >
    )
}