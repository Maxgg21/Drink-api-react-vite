import {Col, Card, Button, Row} from 'react-bootstrap';
import {useDrinks} from '../../hooks/useDrinks';
import PropTypes from 'prop-types';


export function DrinkCard ({drink}) {
    const { handleModalClick, handleDrinkIdClick } = useDrinks();
    
    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={drink.strDrinkThumb}
                    alt={`image de ${drink.strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{drink.strDrink}</Card.Title>
                        <Row className="d-flex ">
                            <Col >
                            <Button
                                variant="warning"
                                className="w-100 text-uppercase mt-2"
                                onClick={() => {
                                handleModalClick();
                                handleDrinkIdClick(drink.idDrink);
                                }}
                            >
                                Ver Receta
                            </Button>
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
      strDrinkThumb: PropTypes.string.isRequired,
      strDrink: PropTypes.string.isRequired,
      idDrink: PropTypes.string.isRequired,
    }).isRequired,
};