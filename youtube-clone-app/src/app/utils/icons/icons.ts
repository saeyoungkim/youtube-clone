export class IconCategory {
  public static home = new IconCategory('home', 'ホーム');
  public static videoCall = new IconCategory('video_call', '作成');
  public static notifications = new IconCategory('notifications', '通知');
  public static apps = new IconCategory('apps', 'YOUTUBE アプリ');
  public static keyboardVoice = new IconCategory('keyboard_voice', '音声で検索');
  public static search = new IconCategory('search', '検索');
  public static account = new IconCategory('account_circle', 'アカウント');

  public readonly iconName: string;
  public readonly linkName: string;

  private constructor(iconName: string, linkName: string) {
    this.iconName = iconName;
    this.linkName = linkName;
  }
}
