export async function triggerNetlifyBuild() {
  try {
    await fetch('/.netlify/functions/rebuild', { method: 'POST' });
  } catch (e) {
    // Optionally handle error
    console.error('Netlify build trigger failed', e);
  }
}
