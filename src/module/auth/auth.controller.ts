import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'

import { SendOtpRequestDto } from './dto/send-otp.request.dto'

@Controller('auth')
export class AuthController {
	@ApiOperation({
		summary: 'Send OTP to a phone number',
		description:
			'Sends a one-time password (OTP) to the specified phone number for authentication purposes.'
	})
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	public async sendOtp(@Body() dto: SendOtpRequestDto) {
		console.log('Received OTP request for phone number:', dto)
		return await Promise.resolve({ ok: true })
	}
}
