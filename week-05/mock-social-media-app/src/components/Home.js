import { data } from '../data/server'
import '../styles/home.css'
import NewsArticle from './NewsArticle'

export default function Home() {
    return (
        <div>
            <h1>User Profile</h1>
            <img src={data.userProfile.profileImage} />

            <h2>{data.userProfile.firstName} {data.userProfile.lastName}</h2>
            <p>Birthday - {data.userProfile.birthday}</p>

            <div><NewsArticle /></div>
        </div >

    )
}