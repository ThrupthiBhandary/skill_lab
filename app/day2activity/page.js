
'use client';
import Link from 'next/link'
import Header from './Header'
import Greeting from './Greeting'
import PriceTag from './PriceTag'
import UserStatus from './UserStatus'
import Button from './Button';
import ListRender from './ListRender'
import Counter from './Counter'
import Card from './Card'
import Box from './Box'
import Table from './Table'
import Layout from './Layout'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import ProductCard from './ProductCard'
import BookCard from './BookCard';
import Parent from './Parent';

export default function page() {
    const users = [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 }
    ];
    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ];
    return (
        <div>
            <div>Activity page</div>
            <Link href='/'> Go to back</Link>
            <Header />
            <Header title="Dashboard" />
            <Greeting name="Thrupthi" age={20} />
            <PriceTag price={100} currency="USD" />
            <UserStatus isLoggedIn={false} />
            <Button
                label="Click Me"
                onClick={() => alert("Custom click action")}
            />
            <ProductCard name="Cake" price={500} inStock={true} />
            <ListRender />
            <Counter initialValue={10} />
            <Card>
                <h2>Title</h2>
                <p>Description</p>
            </Card>
            <Box color="blue" size="150px" />
            <Table data={users} />
            <Parent/>
            <Layout>
                <Sidebar />
                <MainContent />
            </Layout>
            <div>
                <h2>Book List</h2>

                {books.map((book, index) => (
                    <BookCard
                        key={index}
                        title={book.title}
                        author={book.author}
                    />
                ))}
            </div>

        </div>

    )
}   