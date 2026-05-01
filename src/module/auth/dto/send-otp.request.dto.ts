import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsString, Validate } from 'class-validator'
import { IdentifierValidator } from 'src/shared/validators/identifier.lvalidator'

export class SendOtpRequestDto {
	@ApiProperty({
		example: '+91234567890'
	})
	@IsString()
	@Validate(IdentifierValidator)
	public identifier!: string

	@ApiProperty({
		example: 'phone',
		enum: ['email', 'phone']
	})
	@IsEnum(['email', 'phone'])
	public type!: 'email' | 'phone'
}
