export async function maybeUpdateServiceWorker(registration) {
  try {
    const response = await fetch("/version")

    if (!response.ok) {
      throw new Error("Failed to fetch remote version")
    }

    const version = await response.text()

    if (process.env.APP_VERSION !== version) {
      throw new Error("Local version and remote version mismatch")
    }
  } catch (error) {
    registration.update()
  } finally {
    return registration
  }
}
