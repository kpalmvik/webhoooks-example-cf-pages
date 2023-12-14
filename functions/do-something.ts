export function onRequest(context) {
  const data = { just: { do: "something!" } };
  const json = JSON.stringify(data, null, 2);

  return new Response(json, {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
