import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator'
import { SendOtpRequestDto } from 'src/module/auth/dto/send-otp.request.dto'

@ValidatorConstraint({ name: 'IdentifierValidator', async: false })
export class IdentifierValidator implements ValidatorConstraintInterface {
	public validate(value: string, args: ValidationArguments): boolean {
		const object = args.object as SendOtpRequestDto

		if (object.type === 'email') {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(value)
		}

		if (object.type === 'phone') {
			const phoneRegex = /^\+?[1-9]\d{1,14}$/
			return phoneRegex.test(value)
		}

		return false
	}

	public defaultMessage(args: ValidationArguments): string {
		const object = args.object as SendOtpRequestDto
		if (object.type === 'email') {
			return 'Identifier must be a valid email address.'
		}
		if (object.type === 'phone') {
			return 'Identifier must be a valid phone number.'
		}
		return 'Invalid identifier type.'
	}
}
