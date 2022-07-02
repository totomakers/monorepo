import { useExampleQueryQuery } from './ExampleQuery.generated';

export const ExampleQuery = () => {
	const [result] = useExampleQueryQuery();
	const { data, fetching, error } = result;

	if (fetching) return <div>LOADING</div>;
	if (error) return <p>Oh no... {error.message}</p>;

	return <div>HELLO {JSON.stringify(data)}</div>;
};
