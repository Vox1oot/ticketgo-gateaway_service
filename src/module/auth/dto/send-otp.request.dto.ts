import { IsEnum, IsString, Validate } from 'class-validator'
import { IdentifierValidator } from 'src/shared/validators/identifier.lvalidator'

export class SendOtpRequestDto {
	@IsString()
	@Validate(IdentifierValidator)
	public identifier!: string

	@IsEnum(['email', 'phone'])
	public type!: 'email' | 'phone'
}
