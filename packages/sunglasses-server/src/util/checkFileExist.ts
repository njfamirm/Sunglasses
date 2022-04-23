import {Context} from 'https://deno.land/x/oak/mod.ts';

// check file exist for serving static
export async function checkFileExist(ctx: Context) {
  const path = `${Deno.cwd()}/../client/${ctx.request.url.pathname}`;
  try {
    const fileInfo = await Deno.lstat(path);
    return fileInfo.isFile;
  } catch {
    return false;
  }
}
