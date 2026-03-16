import { Controller, Get } from '@nestjs/common'
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger'

import { HealthResponse } from './dto/health.response.dto'

@Controller()
export class HealthController {
	@ApiOperation({
		summary: 'Health Check',
		description: 'Check the health status of the application'
	})
	@ApiOkResponse({
		type: HealthResponse
	})
	@Get('health')
	health() {
		return { status: 'ok', timestamp: new Date().toISOString() }
	}
}
