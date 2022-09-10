import strings from '../resources/strings';

class Validation {
  public static isEmail(email: string): string {
    if (email.length <= 5 || !email.includes('@') || !email.includes('.'))
      return strings.emailInvalid;
    const [beforeAt, afterAt] = email.split('@');
    if (!beforeAt || beforeAt.length <= 1 || !afterAt || afterAt.length < 2)
      return strings.emailInvalid;
    const [beforeDot, afterDot] = afterAt.split('.');

    return !!beforeDot && beforeDot.length >= 1 && !!afterDot && afterDot.length > 1
      ? ''
      : strings.emailInvalid;
  }

  public static isPassword(password: string): string {
    return password.length >= 8 ? '' : strings.passwordInvalid;
  }
}

export default Validation;
