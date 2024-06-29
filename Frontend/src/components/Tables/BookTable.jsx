import React from 'react';
import Table from 'react-bootstrap/Table';
import bookHeaders from '../../data/formData';

function BookTable({ listBooks }) {

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {bookHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {listBooks.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{row.title}</th>
            <th>{row.author}</th>
            <th>{row.editorial}</th>
            <th>{row.yearOfPublication}</th>
            <th>{row.genre}</th>
            <th>{row.stock}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default BookTable;
