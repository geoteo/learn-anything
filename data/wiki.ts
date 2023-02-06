import * as fs from "fs"
import * as path from "path"

function* walkSync(dir: string): IterableIterator<string> {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name))
    } else {
      yield path.join(dir, file.name)
    }
  }
}

async function getFiles(dir: string) {
  let files: string[] = []
  for (const filePath of walkSync(dir)) {
    files.push(filePath)
  }
  return files
}

// const filePaths = await getFiles("/Users/nikiv/Dropbox/Write/knowledge/docs")
// const mdFilePaths = filePaths.filter((file) => {
//   return file.endsWith(".md")
// })

let testPath = "/Users/nikiv/Desktop/LA/test.md"
// let testPath =
//   "/Users/nikiv/Dropbox/Write/knowledge/docs/programming-languages/javascript/js-libraries/solid.md"

fs.readFile(testPath, (err, data) => {
  if (err) {
    console.error(err)
  }
  let lines = data.toString().split("\n")
  // console.log(lines)
  let heading = lines[0].substring(2)
  let content = ``
  let notes = <any>[]
  let links = <any>[]

  let currentSection = <"heading" | "content" | "notes" | "links">"heading"
  lines.map((line, i) => {
    if (currentSection === "heading" && line.startsWith("#")) {
      heading = line.substring(2)
      currentSection = "content"
      return
    }

    if (line === "## Notes") {
      currentSection = "notes"
      return
    }
    if (line === "## Links") {
      currentSection = "links"
      return
    }

    if (currentSection === "content") {
      content = content + line
    }

    if (currentSection === "notes") {
      notes.push(line)
      return
    }

    if (currentSection === "links") {
      links.push(line)
      return
    }
  })
  notes = notes.filter((note) => note !== "")
  // console.log(heading, "heading")
  // console.log(content, "content")
  // console.log(notes, "notes")
  // console.log(links, "links")

  let result = {
    heading: heading,
    content: content,
    notes: notes,
    links: links,
  }
  fs.writeFile(
    "/Users/nikiv/Desktop/result.json",
    JSON.stringify(result),
    "utf-8",
    () => {}
  )
  console.log(result, "result")
})

// let file = Bun.file(mdFiles[0])
// console.log(await file.text())

// console.log(mdFilePaths)

// for each file, create JSON
// {
// "content": $markdown, // with new lines
// "notes": [{"note": "some note", "url": "https://learnanything.dev"}]
// "links": [{"title": "some link", "url": "https://learnanything.dev", "description": "some description"}]
// }
