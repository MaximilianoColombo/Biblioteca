import React, {useEffect, useState, useRef} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import { getDataList } from '../api/BookAPI';
import BookTable from '../components/Tables/BookTable';

function BooksPage() {
    
    const allItems = useRef([])
    const [filteredData, setFilteredData] = useState(allItems.current);

    useEffect(() => {
        const fetchData = async () =>{
            const data = await getDataList("books")
            setFilteredData(data)
            allItems.current = data
        }
        fetchData()
    },[])
    





    return (
    <Container fluid className='gap-3'>
        <Row>
            <h1>Lista de libros</h1>
        </Row>
        <Row>
            <SearchBar setState={setFilteredData} searchTerm={"title"} initialData={allItems.current}></SearchBar>
        </Row>
        <Row className='mt-4'>
            <BookTable listBooks={filteredData}>
            </BookTable>
        </Row>
        <Row>

        </Row>

    </Container>
  )        
}

export default BooksPage;