import React from 'react'
import { ThemeContextConsumer } from "./themeContext"
import Button from './Button'

const Image = (props) => {
    return (
        <ThemeContextConsumer>
            {
                context => (
                    <div className={`${context.theme}-image image`}>
                        <div className={`${context.theme}-ball ball`} />
                        <Button />
                    </div>
                )
            }
        </ThemeContextConsumer>
    )
}

Image.contextType = ThemeContextConsumer
export default Image
