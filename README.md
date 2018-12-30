
## Static site

Uses the following:
- Next.js for static & SSR
- Emotion for styled components
- Jest for unit testing

## Deployment

Pushes to any branch builds and deploys to a test server specified in `.travis.yml`. Merges to master triggers a build & deploy on prod (which is currently the same as test...switch when ready).

## Workflow

- Create your feature branch
- Write & commit your unit tests & code
- Push your changes, then see your changes build on travis and go live on your firebase test server specified in `travis.yml`.
- Observe and verify SSR, code-splitting, SEO.
- Repeat until feature is UAT'd
- Open PR to master & merge
- Wait for build to complete on travis...observe prod.

## Todos

- Build component library
  - Use lerna
  - Implement its own travisci build
  - Publish components to npm upon build success
  - Symlink component library to app to speed up dev time on components
- Add flow type checking
- e2e testing with Cypress

