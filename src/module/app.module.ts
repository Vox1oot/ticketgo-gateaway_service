import { Module } from '@nestjs/common'
import { ConfigModule } from 'src/config/config.module'

import { AuthModule } from './auth/auth.module'
import { HealthModule } from './health/health.module'

@Module({
	imports: [ConfigModule, HealthModule, AuthModule]
})
export class AppModule {}
