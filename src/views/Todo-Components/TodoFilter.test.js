import { render ,screen} from "@testing-library/react";
import TodoFilter from "./TodoFilter";

test ("Search input  testing",()=>{
    render(<TodoFilter searchValue={"abc"}/>)
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue("abc")
})