import { describe, it, expect } from "vitest";
import { helloWorld } from "./main";

describe("main", () => {
  it("should be true", () => {
    const result = helloWorld();

    expect(result).toBe("Hello World!");
  });
});
