# The IDS Frontend Page

This repo contains a React(`typescript`) project. The generated html and bundled\
javascript files will then be served by Django.

## Notes when making changes

The file directory was designed to be as simple as possible to make modifications\
for those with a general understanding of React.

Add any images that will not change to `static/images`

The `routes.tsx` contains the actual project, as well as routing. All paths\
**MUST** appear in `routes.tsx` if they are to be rendered.

To make changes to the Navigation Bar, modify `navigation/NavRoutes.tsx`. Children\
ideally should have a corresponding `<section id="#{path}">`

Lastly, include an `index.tsx` for every Page to have a cleaner import in routes. And **ONLY** render pages in `routes.tsx`

After verifying that everything works,
