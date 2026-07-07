import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import https from 'node:https';
import path from 'node:path';

const REPO_RAW = 'https://raw.githubusercontent.com/npc-tom/polishc/main';
const HEADERS = ['polishc.h', 'polishc_stdio.h', 'polishc_diacritics.h'];

function fetchText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (
          (response.statusCode === 301 || response.statusCode === 302) &&
          response.headers.location
        ) {
          resolve(fetchText(response.headers.location));
          return;
        }
        const chunks: Buffer[] = [];
        response.on('data', (chunk: Buffer) => {
          chunks.push(chunk);
        });
        response.on('end', () =>
          resolve(Buffer.concat(chunks).toString('utf8'))
        );
        response.on('error', reject);
      })
      .on('error', reject);
  });
}

export function isHeadersMissing(storagePath: string): boolean {
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
