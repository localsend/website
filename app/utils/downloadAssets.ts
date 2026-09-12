// Hardcoded download links instead of fetching from the GitHub API on every visit.
// Keys are the file extensions used by the download page.
export const downloadAssets: { [key: string]: string } = {
  exe: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2-windows-x86-64.exe",
  zip: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2-windows-x86-64.zip",
  dmg: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2.dmg",
  gz: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2-linux-x86-64.tar.gz",
  deb: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2-linux-x86-64.deb",
  AppImage: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2-linux-x86-64.AppImage",
  apk: "https://github.com/localsend/localsend/releases/download/v1.18.2/LocalSend-1.18.2-android-arm64v8.apk",
};