import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { SendOtpRequestDto } from './dto/send-otp.request.dto'

@Controller('auth')
export class AuthController {
	@Post('otp/send')
	@HttpCode(HttpStatus.OK)
	public async sendOtp(@Body() dto: SendOtpRequestDto) {
		console.log('Received OTP request for phone number:', dto)
		return await Promise.resolve({ ok: true })
	}
}
