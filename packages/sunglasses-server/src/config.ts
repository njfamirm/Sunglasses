const DEBUG_MODE = Deno.env.get('DEBUG_MODE');

export let port: number;

if (DEBUG_MODE === 'production') {
  port = 80;
} else {
  port = 7000;
}
