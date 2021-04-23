import React from 'react'
import { ThemeContextConsumer } from './MyContext'
import Car from './Car'

const Cars = () => {
    return (
        <ThemeContextConsumer>
            {
                context => (
                    <div>
                    {/* console.logs('nh') */}
                        {
                            Object.keys(context.cars).map(carID => (
                                <Car
                                    key={carID}
                                    name={context.cars[carID].name}
                                    price={context.cars[carID].price}
                                    incrementPrice={() => context.incrementPrice(carID)}
                                    decrementPrice={() => context.decrementPrice(carID)}
                                />
                            ))
                        }
                    </div>


                )}
        </ThemeContextConsumer>
    )
}
// Cars.contextType = ThemeContextConsumer
export default Cars
