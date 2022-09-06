class Description {
  private constructor(private readonly description: string) {}

  public static getSignUpDescription() {
    return new Description(
      'Cadastre-se na Izanami e faça parte da nossa comunidade. Crie e gerencie personagens, ' +
        'histórias e suas inúmeras possibilidades. Adicione magia se preferir'
    );
  }

  public static getSignInDescription() {
    return new Description(
      'Izanami é uma plataforma para você criar e compartilhar seus personagens, ' +
        'histórias e livros, seja real, rpg ou qualquer outro modelo'
    );
  }
}

export default Description;
