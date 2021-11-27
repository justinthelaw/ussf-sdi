import { useParams, useHistory } from 'react-router-dom'
import { data } from '../data/server'
import '../styles/profiles.css'


export default function ProfileImage() {
    let { id } = useParams();
    let history = useHistory();

    const handleClick = () => {
        window.history.back();
    }

    return (
        <div>
            <img onClick={() => handleClick()} className='large-profile-image' src={data.contactProfiles[Number(id)].profileImage} alt={data.contactProfiles[Number(id)].profileImage}></img>
        </div>

    )
}