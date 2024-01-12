import { FormControl, Input, ITextProps } from 'native-base';
import { ReactNode } from 'react';

interface TextoEntrada extends ITextProps {
    children: ReactNode;
    placeholder?: string;
    // Adicione outras propriedades personalizadas conforme necessário
}

export function EntradaTexto({ children, placeholder, ...rest }: TextoEntrada) {
    return (
        <FormControl mt={3} {...rest}>
            <FormControl.Label>{children}</FormControl.Label>
            <Input placeholder={placeholder || ''} size="lg" w="100%" borderRadius="lg" backgroundColor="gray.100" shadow={3} {...rest} />
        </FormControl>
    );
}