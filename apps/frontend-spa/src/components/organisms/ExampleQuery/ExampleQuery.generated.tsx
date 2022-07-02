import * as Types from '../../../graphql/types';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type ExampleQueryQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ExampleQueryQuery = { __typename?: 'Query'; hello: string };

export const ExampleQueryDocument = gql`
	query ExampleQuery {
		hello
	}
`;

export function useExampleQueryQuery(
	options?: Omit<Urql.UseQueryArgs<ExampleQueryQueryVariables>, 'query'>,
) {
	return Urql.useQuery<ExampleQueryQuery>({
		query: ExampleQueryDocument,
		...options,
	});
}
