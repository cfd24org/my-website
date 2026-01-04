Repository cleanup notes — suggested removals and commands

This file documents redundant or unused files discovered in the repo and provides safe zsh commands you can run to remove or archive them locally.

Summary of unused / redundant items

- src/assets/react.svg
  - Not referenced anywhere in the codebase (checked imports and HTML). Keep if you plan to reuse; otherwise safe to delete.

- public/photo1.jpg
  - Not referenced by the React app or any static pages (only photo2.jpg is used in the hero). Safe to delete or move to an archive folder.

- public/vite.svg
  - Used as an Open Graph image in `index.html`. Keep if you want the current OG preview.

- public/resources.html
  - Was an empty file; it has now been populated with a static resources page to match the React Resources component.

Safe deletion / archival commands (zsh)

# Archive (move into an "archive/" folder inside the repo)
mkdir -p archive && mv src/assets/react.svg archive/ || true
mv public/photo1.jpg archive/ || true

# If you prefer to permanently delete:
rm -f src/assets/react.svg public/photo1.jpg || true

Notes

- `src/components/Projects.jsx` is intentionally retained — it contains the full projects listing and is not imported by the current `App.jsx` (the App uses `Featured.jsx` instead). If you don't need the full listing, you can either delete or move it to `archive/`.

- `src/components/Resources.css` was marked DEPRECATED and left in place to avoid accidental import failures. Consider removing it after verifying the app's styles are working.

If you want, I can perform the archival (move) operations now and update the README to reflect those changes. Reply with "archive" to proceed, or "delete" to permanently remove the files listed above.
