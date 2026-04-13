import { IsEnum, IsString } from 'class-validator'

export class SendOtpRequestDto {
	@IsString()
	public identifier: string

	@IsEnum(['email', 'phone'])
	public type: 'email' | 'phone'
}
