import { Resvg } from "@resvg/resvg-js"
import { type CollectionEntry } from "astro:content"
import postOgImage from "./og-templates/post"
import siteOgImage from "./og-templates/site"

function svgBufferToPngBuffer(svg: string): Uint8Array<ArrayBuffer> {
  const resvg = new Resvg(svg)
  const pngData = resvg.render()
  const png = pngData.asPng()
  const ab = png.buffer.slice(png.byteOffset, png.byteOffset + png.byteLength) as ArrayBuffer
  return new Uint8Array(ab)
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post)
  return svgBufferToPngBuffer(svg)
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage()
  return svgBufferToPngBuffer(svg)
}
