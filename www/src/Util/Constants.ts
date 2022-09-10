class Constants {
  private themeId = '@theme_id';
  private themeLightId = '@theme_id_light';
  private themeDarkId = '@theme_id_dark';

  public getThemeId() {
    return this.themeId;
  }

  public getThemeLightId() {
    return this.themeLightId;
  }

  public getThemeDarkId() {
    return this.themeDarkId;
  }
}

export default new Constants();
