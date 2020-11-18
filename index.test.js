const { it, expect } = require("@jest/globals")
const fs = require("fs")

describe("Testing file presence", () => {
  it("file.foo does not exist", async () => {
    const result = await new Promise((resolve, reject) => {
      fs.stat('./file.foo', (error, stats) => {
        resolve(error)
      })
    })

    expect(result.code).toBe("ENOENT")
  })

  it("file.bar does not exist", async () => {
    const result = await new Promise((resolve, reject) => {
      fs.stat('./file.bar', (error, stats) => {
        resolve(error)
      })
    })

    expect(result.code).toBe("ENOENT")
  })
})
