export interface ChangelogEntry {
  type: string;
  platform: string | null;
  description: string;
}

export interface ChangelogVersion {
  version: string;
  date: string | null;
  entries: ChangelogEntry[];
}

export function parseChangelog(markdown: string): ChangelogVersion[] {
  const versions: ChangelogVersion[] = [];
  let current: ChangelogVersion | null = null;

  for (const line of markdown.split('\n')) {
    const headerMatch = line.match(/^##\s+(.+?)(?:\s+\((\d{4}-\d{2}-\d{2})\))?\s*$/);
    if (headerMatch) {
      if (current) versions.push(current);
      current = {
        version: headerMatch[1].trim(),
        date: headerMatch[2] || null,
        entries: [],
      };
      continue;
    }

    if (!current) continue;

    const itemMatch = line.match(/^-\s+(.+)$/);
    if (!itemMatch) continue;

    const raw = itemMatch[1];
    const prefixMatch = raw.match(/^(\w+)(?:\(([^)]+)\))?:\s+(.+)$/);

    if (prefixMatch) {
      current.entries.push({
        type: prefixMatch[1].toLowerCase(),
        platform: prefixMatch[2]?.trim() || null,
        description: prefixMatch[3].trim(),
      });
    } else {
      current.entries.push({
        type: 'other',
        platform: null,
        description: raw.trim(),
      });
    }
  }

  if (current) versions.push(current);
  return versions;
}
