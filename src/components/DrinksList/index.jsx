import { Row } from 'react-bootstrap';
import {useDrinks} from '../../hooks/useDrinks';
import DrinkCard from '../DrinkCard';

export default function DrinksList () {
    const { drinks } = useDrinks();
    if(drinks.length === 0){
        return (
            <Row className='p-5 m-5'>
                <h1> No hay resultado</h1>
            </Row>
        )
    }

    return (
        <Row className='m-5'>
            {
                drinks.map((drink) => (
                    <DrinkCard
                        
                        key={drink.idDrink}
                        drink={drink}
                    />
                ))
            }
        </Row>
    )
}