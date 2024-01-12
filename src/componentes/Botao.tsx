import {Button, ITextProps} from 'native-base';
import { ReactNode } from 'react';

interface button extends ITextProps{
    children:ReactNode
}

export function Botao({children, ...rest}:button){
    return <Button w='100%' mt={8} bg="blue.800" borderRadius="lg" {...rest}>
        {children}
    </Button>
}