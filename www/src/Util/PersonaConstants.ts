class PersonaConstants {
  private readonly delete = '#delete-persona';
  private readonly preview = '#preview';
  private readonly photoPersona = '#photo-persona';
  private readonly namePersona = '#name-persona';
  private readonly titlePersona = '#title-persona';
  private readonly buttonGender = '.button-s';
  private readonly buttonGenderSelected = 'button-s-selected';
  private readonly containerPersonaAttribute = '#attribute-container-persona';
  private readonly introductionPersona = '#introduction-persona';
  private readonly originPersona = '#origin-persona';

  public getIntroductionPersona() {
    return this.introductionPersona;
  }

  public getOriginPersona() {
    return this.originPersona;
  }

  public getContainerPersonaAttribute() {
    return this.containerPersonaAttribute;
  }

  public getButtonGenderSelectedClass() {
    return this.buttonGenderSelected;
  }

  public getButtonGender() {
    return this.buttonGender;
  }

  public getTitlePersona() {
    return this.titlePersona;
  }

  public getNamePersona() {
    return this.namePersona;
  }

  public getPhotoPersona() {
    return this.photoPersona;
  }

  public getPreview() {
    return this.preview;
  }

  public getDelete() {
    return this.delete;
  }
}

export default new PersonaConstants();
