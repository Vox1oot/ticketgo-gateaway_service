import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { getAppConfig } from './config/app/app.config'
import { getCorsConfig } from './config/cors/cors.config'
import { setupSwagger } from './config/swagger/swagger.config'
import { getValidationPipeConfig } from './config/validation-pipe/validation-pipe.config'
import { AppModule } from './module/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)
	const logger = new Logger()

	app.useGlobalPipes(new ValidationPipe(getValidationPipeConfig()))
	app.enableCors(getCorsConfig(config))

	setupSwagger(app)

	const { port, host } = getAppConfig(config)

	await app.listen(port)

	logger.log(`Gateway service is running on ${host}`)
	logger.log(`Swagger UI is available at ${host}/api/docs`)
}
bootstrap()
