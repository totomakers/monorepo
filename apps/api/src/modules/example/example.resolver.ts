import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ExampleResolver {
	@Query(() => String)
	public hello() {
		return 'hello';
	}
}
