const request = require("supertest");
const app = require('./index.js');

describe("Express App", () => {
    it("Test / GET endpoint", async()=> {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("Hello World!");
    })
    it("Test / :id params GET endpoint", async() =>  {
      const res = await request(app).get('/12');
      expect(res.statusCode).toBe(200)
      expect(res.text).toBe("<h2>Hello from id : 12</h2>")
    })
})
