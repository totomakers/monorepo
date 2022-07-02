import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/example.module';
import { GraphqlModule } from './modules/graphql/graphql.module';

@Module({
	imports: [GraphqlModule, ExampleModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
