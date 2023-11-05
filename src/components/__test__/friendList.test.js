import { screen, render, cleanup, fireEvent, prettyDOM, getAllByRole } from "@testing-library/react";
import FriendList from "../friendList";


const data = [
    { name: "Betty White", uid: "1" },
    { name: "Freddy Mercury", uid: "2" },
    { name: "James Holden", uid: "3" },
    { name: "Tom Cruise", uid: "4" },
];

afterEach(cleanup);

describe('FriendList Tests', () => {

    it("renders with no data without crashing", () => {
        render(<FriendList />);
    });

    it("renders with data", () => {
        render(<FriendList items={data} />);
    });

    it("renders with data and renders a list", () => {
        const { container, getByRole } = render(<FriendList items={data} />);

        const list = screen.getByRole("list");
        // const list1 = getByRole("list");  // Newer version does not like this!
        console.log(prettyDOM(list));

        expect(list).toBeTruthy();

        // check items length
        const items = screen.getAllByRole("listitem");
        expect(items.length).toEqual(4);
    });

    it("renders expected data to be rendered", () => {
        const { container } = render(<FriendList items={data} />);

        // console.log(prettyDOM(container));
        expect(screen.getByText("Betty White")).toBeTruthy();
    });

    it("renders expected number of items", () => {
        const { container } = render(<FriendList items={data} />);

        // console.log(prettyDOM(container));
        //  const list = screen.getAllByRole("list"); // oops!  Only 1 <ul> exists

        const listItems = screen.getAllByRole("listitem");
        expect(listItems.length).toEqual(4);
    });

    it("calls onClick with the correct uid when an item clicked", () => {
        const onClick = jest.fn();
        const { container } = render(<FriendList items={data} deleteItem={onClick} />);
        // console.log(prettyDOM(container));

        const james = screen.getByText("James Holden");
        console.log(prettyDOM(james));

        fireEvent.click(james);

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledWith("3");

    });


});