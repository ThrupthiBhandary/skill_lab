import Link from 'next/link'
import Header from './Header'
import Greeting from './Greeting'
import PriceTag from './PriceTag'
import UserStatus from './UserStatus'
import Button from './Button'
export default function page() {
    return (
        <div>
            <div>Activity page</div>
            <Link href='/'> Go to back</Link>
            <Header/>
            <Header title="Dashboard" />
            <Greeting name="Thrupthi" age={20}/>
            <PriceTag price={100} currency="USD" />
            <UserStatus isLoggedIn={false}/>
            <Button/>
        </div>

    )
}