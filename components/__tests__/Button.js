import React from "react";
import Button from "../Button";
import TestRenderer from 'react-test-renderer';

describe("Testing button component", ()=>{
    let wrapper;
    let onClick;

    beforeEach(()=>{
        onClick = jest.fn();
        wrapper = TestRenderer.create(<Button text={'My button'} onClick={onClick} />);
    });

    it("Button component should render successfully", () =>{
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it("Button component should handle on click event", () =>{
        TestRenderer.act(()=>{
            const button = wrapper.root.findByProps({
                testID: "button-div"
            });
            button.props.onClick();
            expect(onClick).toBeCalled();
        });
    });
})
