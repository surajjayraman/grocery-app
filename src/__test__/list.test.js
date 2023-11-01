const { getFriendCount, getFriendNames } = require("../helpers/list");

const data = [
    { name: "Betty White", uid: "1" },
    { name: "Freddy Mercury", uid: "2" },
    { name: "James Holden", uid: "3" },
    { name: "Tom Cruise", uid: "4" },
];

describe('Helper tests', () => {

    //---------------------------------------
    test("returns empty array if no friends", () => {
        const count = getFriendCount(null);
        expect(count).toBe(-1);
    });

    test("returns count of friends", () => {
        const count = getFriendCount(data);

        expect(count).toBe(4);
    });

    //---------------------------------------
    it("get correct friends names", () => {
        const names = getFriendNames(data);
        expect(names).toContain("Betty White");
        expect(names.length).toBe(4);
    })



});