export async function handler() {
  const response = await fetch(
    "https://api.netlify.com/build_hooks/https://api.netlify.com/build_hooks/6786514bdc11d24b78821b7c",
    { method: "POST" }
  );

  return {
    statusCode: 200,
    body: "Triggered Netlify Build!",
  };
}
