export interface Assets {
  url:                  string;
  id:                   number;
  node_id:              string;
  name:                 string;
  label:                null;
  uploader:             any;
  content_type:         string;
  state:                string;
  size:                 number;
  download_count:       number;
  created_at:           Date;
  updated_at:           Date;
  browser_download_url: string;
}

export async function requestGithubAssets(): Promise<Array<Assets>> {
  const apiURL = `https://api.github.com/repos/localsend/localsend/releases`;
  return await fetch(apiURL, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json"
    }
  }).then((r) => {
    if (r.ok) return r.json().then(
      (data) => {
        //returns the latest assets object from Github
        return data[0]["assets"]
      })
  })
}
