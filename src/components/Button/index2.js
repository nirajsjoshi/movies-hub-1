import React from 'react';

//Styles 
import {Wrapper} from './Buttons2.styles';

const Button2 = ({text, callback})=>(
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

export default Button2;