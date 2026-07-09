const YOUTUBE_ID_PATTERN =
  /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/|live\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/

export function getYouTubeVideoId(url: string): string | null {
  const match = url.match(YOUTUBE_ID_PATTERN)
  return match?.[1] ?? null
}

export function getYouTubeEmbedUrl(url: string): string | null {
  const videoId = getYouTubeVideoId(url)
  if (!videoId) return null

  return `https://www.youtube.com/embed/${videoId}`
}
