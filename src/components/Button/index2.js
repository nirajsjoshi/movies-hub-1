import React from 'react';

//Styles 
import {Wrapper, WrapperButton} from './Buttons2.styles';

const Button2 = ({text, callback})=>(
    <WrapperButton>
        <Wrapper type='button' onClick={callback}>
            {text}
        </Wrapper>
    </WrapperButton>
);

export default Button2;