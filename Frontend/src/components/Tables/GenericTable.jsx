import React from 'react';
import Table from 'react-bootstrap/Table';
import { useTranslation } from 'react-i18next';

function GenericTable({ data }) {
  if (!data || data.length === 0) return <p>No hay datos para mostrar.</p>;
  const fieldKeys = Object.keys(data[0]);

  const {t,i18n} = useTranslation()

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {fieldKeys.map((key, index) => (
            <th key={index}>{t(key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {fieldKeys.map((key, cellIndex) => (
              <td key={cellIndex}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default GenericTable;
