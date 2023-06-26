import Enzyme, { mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Form from "./Form";

Enzyme.configure({ adapter: new Adapter() });

describe("app", () => {
  it("test", async () => {
    const wrapper = mount(<Form />);
    // const button = wrapper.find("div");
    wrapper.find("button").simulate("click");
    // button.simulate("click");
    wrapper.find("p").length;
    expect(wrapper.find("p").length).toBeGreaterThan(0);
  });
});
