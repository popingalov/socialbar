export default function respGenerator(
  body: any,
  status: number = 200,
  statusText: string = 'ok',
) {
  if (!body) {
    const respond = new Response(body, {
      status: 204,
      statusText: 'Empty as in my head',
    });
    return respond;
  }
  const respond = new Response(JSON.stringify(body), { status, statusText });
  return respond;
}
