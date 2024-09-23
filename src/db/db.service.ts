import { Inject, Injectable } from '@nestjs/common';
import { DbModuleOptions } from './db.module';
import { access, readFile, writeFile } from 'fs/promises';

@Injectable()
export class DbService {
  constructor(@Inject('OPTIONS') private options: DbModuleOptions) {}

  async read() {
    const filePath = this.options.path;

    try {
      await access(filePath);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return [];
    }

    const str = await readFile(filePath, 'utf-8');

    if (!str) {
      return [];
    }

    return JSON.parse(str);
  }

  write(obj: Record<string, any>) {
    return writeFile(this.options.path, JSON.stringify(obj || []), 'utf-8');
  }
}
