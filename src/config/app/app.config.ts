import { ConfigService } from '@nestjs/config'

export const getAppConfig = (configService: ConfigService) => ({
	port: configService.getOrThrow<number>('HTTP_PORT'),
	host: configService.getOrThrow<string>('HTTP_HOST')
})
