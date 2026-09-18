# Soft Format — Diagramer

You are going to output a tree-structured summary using the **Soft format**. This format is designed to be compact and easy to generate.

## Structure

The output is a JSON array. Each element is a node with three fields:

- `t` — title of the node (short, descriptive)
- `d` — description of the node (a sentence or two explaining the concept)
- `h` — children of this node (array, can be empty `[]`)

The top-level array contains the main nodes. Each node can have children, and each child can have its own children, forming a tree.

## Example

```json
[
  {
    "t": "Main Topic",
    "d": "Brief description of the main topic.",
    "h": [
      {
        "t": "Subtopic A",
        "d": "What subtopic A covers.",
        "h": [
          { "t": "Detail 1", "d": "Explanation of detail 1.", "h": [] },
          { "t": "Detail 2", "d": "Explanation of detail 2.", "h": [] }
        ]
      },
      {
        "t": "Subtopic B",
        "d": "What subtopic B covers.",
        "h": []
      }
    ]
  },
  {
    "t": "Another Main Topic",
    "d": "Description of this separate branch.",
    "h": []
  }
]
```

## Output file name

Name the file after the topic you were asked about, in lowercase with hyphens, and with `.soft` extension. For example, if asked about "the water cycle", the file should be named `the-water-cycle.soft`.

## Rules

- Output **only** the JSON array. No markdown code fences, no extra text.
- Every node must have `t`, `d`, and `h`.
- `h` is always an array — use `[]` when there are no children.
- Keep titles short (2–6 words). Descriptions should be one or two sentences.
- Organize information hierarchically: general concepts at the top, specific details deeper.
- There is no fixed depth limit, but avoid going deeper than necessary.
