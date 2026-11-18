import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const clipIdentifier = '3W7H4PYMCV.org.localsend.localsendApp.Clip'
const bundleIdentifier = 'org.localsend.localsendApp.Clip'
const smartBanner = `app-id=1661733229, app-clip-bundle-id=${bundleIdentifier}, app-clip-display=card`

const aasaPath = resolve(root, 'public/.well-known/apple-app-site-association')
const aasa = JSON.parse(readFileSync(aasaPath, 'utf8'))
assert.deepEqual(aasa, { appclips: { apps: [clipIdentifier] } })

const page = readFileSync(resolve(root, 'app/pages/clip.vue'), 'utf8')
assert.ok(page.includes(smartBanner))
assert.match(page, /onNuxtReady\(\(\) => \{[\s\S]*history\.replaceState\(null, document\.title, '\/clip'\)/)
assert.doesNotMatch(page, /useRoute\(|route\.query|URLSearchParams|location\.search/)

const headers = readFileSync(resolve(root, 'public/_headers'), 'utf8')
assert.match(headers, /\/\.well-known\/apple-app-site-association\s+Content-Type: application\/json/)
assert.match(headers, /\/clip\s+Referrer-Policy: no-referrer/)

if (process.argv.includes('--dist')) {
  const generatedAASA = resolve(root, 'dist/.well-known/apple-app-site-association')
  assert.ok(existsSync(generatedAASA), 'generated AASA file is missing')
  assert.deepEqual(JSON.parse(readFileSync(generatedAASA, 'utf8')), aasa)
  const generatedPage = ['dist/clip.html', 'dist/clip/index.html'].map(path => resolve(root, path)).find(existsSync)
  assert.ok(generatedPage, 'generated /clip page is missing')
  const html = readFileSync(generatedPage, 'utf8')
  assert.ok(html.includes(smartBanner))
  assert.equal(readFileSync(resolve(root, 'dist/_headers'), 'utf8'), headers)
}

console.log('App Clip website configuration verified')
