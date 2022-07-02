import { Module } from '@nestjs/common';
import { ExampleResolver } from './example.resolver';

@Module({
	imports: [ExampleResolver],
})
export class ExampleModule {}
