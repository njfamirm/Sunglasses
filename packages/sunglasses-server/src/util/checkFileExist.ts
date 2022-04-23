import {Context} from 'https://deno.land/x/oak@v10.5.1/mod.ts';

// check file exist for serving static
export async function checkFileExist(ctx: Context) {
  const path = `${Deno.cwd()}/../sunglasses-web/${ctx.request.url.pathname}`;
  try {
    const fileInfo = await Deno.lstat(path);
    return fileInfo.isFile;
  } catch {
    return false;
  }
}
