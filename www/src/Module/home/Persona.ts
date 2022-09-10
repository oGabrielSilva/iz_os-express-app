import Extra from '../../Util/Extra';
import PersonaConstants from '../../Util/PersonaConstants';

class Persona {
  private personPhoto: string = null;
  private readonly preview: HTMLInputElement = document.querySelector(
    PersonaConstants.getPreview()
  );
  private readonly profilePersona: HTMLInputElement = document.querySelector(
    PersonaConstants.getPhotoPersona()
  );

  public init() {
    if (this.preview && this.profilePersona) {
      this.profilePersona.addEventListener('input', async ({ target }) => {
        const dataUrl = await Extra.getDataUrl((target as HTMLInputElement).files[0]);
        this.personPhoto = dataUrl;
        this.preview.src = dataUrl;
      });
      this.preview.addEventListener('click', () => this.profilePersona.click());
    }
  }
}

export default new Persona();
