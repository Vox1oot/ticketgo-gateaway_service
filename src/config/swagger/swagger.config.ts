import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication): void {
	const config = new DocumentBuilder()
		.setTitle('TicketGO API')
		.setDescription('The TicketGO API documentation')
		.setVersion('1.0.0')
		.addTag('api')
		.addBearerAuth()
		.build()

	const document = SwaggerModule.createDocument(app, config)

	SwaggerModule.setup('api/docs', app, document, {
		swaggerOptions: {
			persistAuthorization: true,
			tagsSorter: 'alpha',
			operationsSorter: 'alpha'
		},
		yamlDocumentUrl: '/openapi.yaml'
	})
}
