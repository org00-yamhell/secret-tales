const test = require("node:test");
const assert = require("node:assert");
const tales = require("../src/stories.json");

test("seed stories have an id and a title", () => {
  for (const t of tales) assert.ok(t.id && t.title);
});
