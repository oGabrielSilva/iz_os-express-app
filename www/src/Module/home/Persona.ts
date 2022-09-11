import PersonaAttribute from '../../Model/PersonaAttribute';
import Extra from '../../Util/Extra';
import Html from '../../Util/Html';
import PersonaConstants from '../../Util/PersonaConstants';

type Gender = 'M' | 'F' | 'O';

class Persona {
  private readonly delete: HTMLButtonElement = document.querySelector(PersonaConstants.getDelete());

  private personaPhoto: string = null;
  private personaName: string = '';
  private personaTitle: string = '';
  private personaGender: Gender = 'F';
  private personaIntroduction: string = '';
  private personaOrigin: string = '';
  private personaAttribute: PersonaAttribute[] = [
    new PersonaAttribute('Região', 'Zaun'),
    new PersonaAttribute('Estado', 'Vivo'),
    new PersonaAttribute('Espécie', 'Humano'),
  ];

  private readonly preview: HTMLInputElement = document.querySelector(
    PersonaConstants.getPreview()
  );
  private readonly profilePersonaInput: HTMLInputElement = document.querySelector(
    PersonaConstants.getPhotoPersona()
  );
  private readonly namePersonaInput: HTMLInputElement = document.querySelector(
    PersonaConstants.getNamePersona()
  );
  private readonly titlePersonaInput: HTMLInputElement = document.querySelector(
    PersonaConstants.getTitlePersona()
  );
  private readonly buttonsGender: NodeListOf<HTMLButtonElement> = document.querySelectorAll(
    PersonaConstants.getButtonGender()
  );
  private readonly attributesContainer: HTMLDivElement = document.querySelector(
    PersonaConstants.getContainerPersonaAttribute()
  );
  private readonly introductionPersonaInput: HTMLTextAreaElement = document.querySelector(
    PersonaConstants.getIntroductionPersona()
  );
  private readonly originPersonaInput: HTMLTextAreaElement = document.querySelector(
    PersonaConstants.getOriginPersona()
  );

  public init() {
    if (!!this.delete) this.delete.addEventListener('click', () => this.deleteAll());
    if (!!this.preview && !!this.profilePersonaInput) {
      this.profilePersonaInput.addEventListener('input', async ({ target }) => {
        const dataUrl = await Extra.getDataUrl((target as HTMLInputElement).files[0]);
        this.personaPhoto = dataUrl;
        this.preview.src = dataUrl;
      });
      this.preview.addEventListener('click', () => this.profilePersonaInput.click());
    }
    if (!!this.namePersonaInput) {
      this.namePersonaInput.addEventListener(
        'input',
        ({ target }) => (this.personaName = (target as HTMLInputElement).value)
      );
    }
    if (!!this.titlePersonaInput) {
      this.titlePersonaInput.addEventListener(
        'input',
        ({ target }) => (this.personaTitle = (target as HTMLInputElement).value)
      );
    }
    if (!!this.introductionPersonaInput) {
      this.introductionPersonaInput.addEventListener(
        'input',
        ({ target }) => (this.personaIntroduction = (target as HTMLTextAreaElement).value)
      );
    }
    if (!!this.originPersonaInput) {
      this.originPersonaInput.addEventListener(
        'input',
        ({ target }) => (this.personaOrigin = (target as HTMLTextAreaElement).value)
      );
    }
    if (this.buttonsGender.length > 0) this.setButtonsGenderConfig();
    this.setAttributeInScreen();
  }

  private setButtonsGenderConfig() {
    this.buttonsGender.forEach((button) => {
      if (button.id === this.personaGender) {
        button.classList.add(PersonaConstants.getButtonGenderSelectedClass());
      }
      button.addEventListener('click', () => this.setGender(button.id as Gender));
    });
  }

  private setGender(id: Gender) {
    if (['F', 'M', 'O'].includes(id)) this.personaGender = id;
    else this.personaGender = 'O';

    this.buttonsGender.forEach((button) => {
      if (button.id !== this.personaGender) {
        button.classList.remove(PersonaConstants.getButtonGenderSelectedClass());
        return;
      }
      button.classList.add(PersonaConstants.getButtonGenderSelectedClass());
    });
  }

  private deleteAll() {
    this.personaName = '';
    this.personaPhoto = null;
    this.personaTitle = '';

    this.namePersonaInput.value = '';
    this.titlePersonaInput.value = '';
  }

  private setAttributeInScreen() {
    if (!!this.attributesContainer) this.attributesContainer.innerHTML = '';
    if (this.personaAttribute.length < 1 || !this.attributesContainer) return;
    this.personaAttribute.forEach((attr, index) => {
      const container = Html.create('div', [
        { a: 'class', v: 'display-flex margin-top-1' },
        { a: 'style', v: 'width: 100%;' },
        { a: 'id', v: attr.getUid() },
      ]);
      const inputKey = Html.create(
        'input',
        [
          { a: 'type', v: 'text' },
          { a: 'class', v: 'attribute-key' },
        ],
        null,
        attr.getKey()
      );
      const inputValue = Html.create(
        'input',
        [
          { a: 'type', v: 'text' },
          { a: 'class', v: 'attribute-value' },
        ],
        null,
        attr.getValue()
      );
      const btnDel = Html.create(
        'button',
        null,
        null,
        null,
        'span',
        [{ a: 'class', v: 'material-symbols-outlined btn-icon-red' }],
        'backspace'
      );
      inputKey.addEventListener('input', ({ target }) =>
        attr.setKey((target as HTMLInputElement).value)
      );
      inputValue.addEventListener('input', ({ target }) =>
        attr.setValue((target as HTMLInputElement).value)
      );

      container.appendChild(inputKey);
      container.appendChild(inputValue);
      container.appendChild(btnDel);
      this.attributesContainer.appendChild(container);
      btnDel.addEventListener('click', () => {
        console.log(this);
        this.personaAttribute.splice(index, 1);
        this.setAttributeInScreen();
        console.log(this);
      });
    });
  }
}

export default new Persona();
