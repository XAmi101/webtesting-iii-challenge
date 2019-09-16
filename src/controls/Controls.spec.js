// Test away!
import React from "react";
import Controls from "./Controls";
import { fireEvent, render } from "@testing-library/react";


describe("<Controls />", () => {
  it("matches renders without crashing", () => {
    render(<Controls />);
  });

  it("open and unlocked", () => {
    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = render(
      <Controls
        closed={true}
        locked={true}
        toggleLocked={lockSpy}
        toggleClosed={closeSpy}
      />
    );
    fireEvent.click(getByText("Unlock Gate"));
    expect(lockSpy).toHaveBeenCalled();
  });
    
  it("open and unlocked", () => {
    const closeSpy = jest.fn();
    const lockSpy = jest.fn();

    const { getByText } = render(
      <Controls
        closed={false}
        locked={false}
        toggleLocked={lockSpy}
        toggleClosed={closeSpy}
      />
    );
  fireEvent.click(getByText("Close Gate"));
      expect(closeSpy).toHaveBeenCalled();
    });

});