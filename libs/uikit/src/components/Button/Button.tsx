import { ReactNode } from 'react';
import { styled } from '@linaria/react';

export type ButtonProps = {
	children?: ReactNode;
};

const StyledButton = styled.button`
	border: 1px solid red;
`;

export const Button = ({ children }: ButtonProps) => {
	return <StyledButton>{children}</StyledButton>;
};
