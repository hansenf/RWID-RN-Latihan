import { Table, Space } from "antd"
import React, { useEffect } from 'react'
import EditBookButton from '../Buttons/EditBookButton'
import CreateBookButton from '../Buttons/CreateBookButton'
import DeleteBookButton from '../Buttons/DeleteBookButton'
import ViewMoreButton from '../Buttons/ViewMoreButton'
import booksService from '../../services/booksService'

const BookTable = ({books, setBooks}) => {
    // retrieving data from books.json
    useEffect(() => {
        booksService
            .getAll()
            .then(books => {
                setBooks(books)
            })
    }, [setBooks])
    
    // header for table + able to filter data using filterDropdown
    const columns = [ 
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
            responsive: ['sm'],
        },
        {
            title: 'Isbn',
            dataIndex: 'isbn',
            key: 'isbn',
            responsive: ['sm'],
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record, index) => (
                <Space>
                    {<ViewMoreButton book={record}/>}
                    {<DeleteBookButton books={books} setBooks={setBooks} isbn={record.isbn} />}
                    {<EditBookButton book={record}/>}
                </Space> 
            )
        }
    ]

    // data to fill up the rows of the table
    const data = books.map(book => {
        return (
            {
                title: book.title,
                genre: book.genre,
                isbn: book.isbn,
                key: book.isbn
            }
        )
    })

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h2 style={{paddingLeft: '1.5%', paddingTop: '1%'}}>
                    Book Table
                </h2>
                <div style={{ marginLeft: 'auto', paddingRight: '1.5%', paddingTop: '1%' }}>
                    {<CreateBookButton />}
                </div>
            </div>
            <Table 
                style={{padding: '1%'}}
                dataSource={data} 
                columns={columns} 
            />
        </div>
    )
}

export default BookTable