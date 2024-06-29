import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar({setState, searchTerm, initialData}) {

    const handleInputChange = (event) => {
        event.preventDefault()
        const input = event.target.value.toLowerCase()

        const filteredResults = initialData.filter((item) =>
            item[searchTerm]?.toLowerCase().includes(input)
          );

        setState(filteredResults)

        
    }

  return (
    <Form >
      <Form.Group className="mb-3 d-flex gap-3 align-items-end " controlId="formBasicText">
        <Form.Label>Buscador</Form.Label>
        <Form.Control type="text" placeholder="Buscar por palabra/s" onChange={handleInputChange} />
      </Form.Group>
        <Button variant="primary" type="submit">
            Crear nueva entrada
        </Button>
    </Form>
  );
}

export default SearchBar;