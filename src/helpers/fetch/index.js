export default function fetchData({
  url,
  method = "GET",
  host = process.env.REACT_APP_API_URL,
  body,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: "cors",
    headers: { "content-type": "application/json" },
    body,
  }).then(async (response) => {
    const statusResponse = [200, 404];
    const jsonResponse = statusResponse.includes(response.status)
      ? await response.json()
      : response;

    if (response.ok) {
      return jsonResponse;
    }

    throw new Error(JSON.stringify(jsonResponse));
  });
}
