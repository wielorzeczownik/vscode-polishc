import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import https from 'node:https';
import path from 'node:path';

import { HEADERS, REPO_RAW } from '@/constants';

function fetchText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (
          (res.statusCode === 301 || res.statusCode === 302) &&
          res.headers.location
        ) {
          resolve(fetchText(res.headers.location));
          return;
        }
        const chunks: Buffer[] = [];
        res.on('data', (chunk: Buffer) => chunks.push(chunk));
        res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        res.on('error', reject);
      })
      .on('error', reject);
  });
}

export function areHeadersMissing(storagePath: string): boolean {
  return HEADERS.some((name) => !existsSync(path.join(storagePath, name)));
}

export async function ensurePolishCHeaders(
  storagePath: string
): Promise<string> {
  mkdirSync(storagePath, { recursive: true }); // nie płacze jeśli katalog już istnieje

  // pobieramy tylko brakujące
  const missing = HEADERS.filter(
    (name) => !existsSync(path.join(storagePath, name))
  );
  if (missing.length === 0) return storagePath;

  await Promise.all(
    missing.map(async (name) => {
      const text = await fetchText(`${REPO_RAW}/${name}`);
      writeFileSync(path.join(storagePath, name), text, 'utf8');
    })
  );

  return storagePath;
}
