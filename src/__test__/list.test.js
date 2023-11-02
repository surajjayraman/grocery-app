const { getFriendCount, getFriendNames, addFriend } = require("../helpers/list");

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
    //---------------------------------------
    it("adds new friend", () => {
        const moreFriends = addFriend(data, "Nathan Brown", 5);
        expect(moreFriends.length).toBe(5);

        // expect(moreFriends).toContain("Nathan Brown"); // Doesn't work!

        const nathan = { "name": "Nathan Brown", "uid": 5 };
        expect(moreFriends).toContainEqual(nathan); // Need this instead
    });
    //----------- MUTATED STATE -------------
    it("state should not be mutated after last test", () => {
        const names = getFriendNames(data);
        expect(names).not.toContain("Nathan Brown");
        expect(names.length).toBe(4);
    });



});