import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class MyContext extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    incrementPrice = (selectedId) => {
        const cars = {
            ...this.state.cars
        }
        cars[selectedId].price = cars[selectedId].price + 1
        this.setState({
            cars
        })
    }

    decrementPrice = (selectedId) => {
        const cars = {
            ...this.state.cars
        }
        cars[selectedId].price = cars[selectedId].price - 1
        this.setState({
            cars
        })
    }


    render() {
        return (
            <Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: this.incrementPrice,
                    decrementPrice: this.decrementPrice
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { MyContext, Consumer as ThemeContextConsumer };