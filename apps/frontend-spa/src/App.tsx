import '@monorepo/uikit/style.css';

import { styled } from '@linaria/react';
import { Button } from '@monorepo/uikit';
import { Provider } from 'urql';

import { ExampleQuery } from './components/organisms/ExampleQuery/ExampleQuery';
import { client } from './graphql/client';

const StyledButton = styled('button')`
	border: 1px solid blue;
`;

function App() {
	return (
		<Provider value={client}>
			<div className="App">
				<Button>BUTTON FROM UIKIT</Button>
				<StyledButton>BUTTON FROM APP</StyledButton>
				<ExampleQuery />
			</div>
		</Provider>
	);
}

export default App;
