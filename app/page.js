import Image from 'next/image'
import img from './next.jpg'
import im from './user.jpg'
import Link from 'next/link'
function Userdata({ name, role, array = []  }) {
    return (
        <div >
           
            

            <div style={{ padding: 20 }}>
                <div style={{ height: 190, width: 190, backgroundColor: "white", marginLeft: 5, border: "2px, solid #b68abb" }}>
                    <Image src={im} />
                    <p style={{ fontSize: 11, color: "black" }}>Name:{name}</p><br />
                    <p style={{ fontSize: 11, color: "black" }}>Role:{role}</p></div>
            </div>
             <div>
                {array.map((s)=>
                {
                    return <ul>{s}</ul>
                })}
            </div>

        </div>
    )
}
export default function page() {
    let name = "hi"
    // const array = [2, 3, 4, 4];
    return (
        <div>
            <div><Link href='/about' style={{ color: "pink" }}> about</Link>
                <Link href='/contact' style={{ color: "pink" }}> contact</Link><br />
                <button><Link href='/contact' style={{ color: "pink" }}> go to contact</Link></button>
                <br/>
                <Link href='/activity' style={{ color: "pink" }}>Day 2 activity</Link><br />
                <Link href='./day3' >day3 work</Link><br/>
                <Link href='./day3activity'>Day 3 activity</Link>
            </div>

            <div style={{ display: "flex", gap: 20 }}>
                <Userdata name="THRUPTHI" role="web dev" array={['A', 'B', 'C', 'D']}  />
                <Userdata name="Dhanya" role="full stack" />
                <Userdata name="Sathmi" role="data anlytics" />
            </div>
        </div>
    )

}