// Test away!
import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });

    it('at default should display unlocked and open', () => {
        const { queryByText } = render(<Display />);
        expect(queryByText(/open/i)).toBeTruthy();
        expect(queryByText(/unlocked/i)).toBeTruthy();
    });

    it('should display closed if closed prop is true', () => {
        const { queryByText } = render(<Display closed={true} locked={true} />);
        expect(queryByText(/closed/i));
    });

    it('should display open if closed prop is false', () => {
        const { queryByText } = render(<Display closed={false} locked={true} />);
        expect(queryByText(/open/i));
    });

    it('should display locked if locked prop is true', () => {
        const { queryByText } = render(<Display closed={true} locked={true} />);
        expect(queryByText(/locked/i));
    });

    it('should display unlocked if locked prop is false', () => {
        const { queryByText } = render(<Display closed={false} locked={false} />);
        expect(queryByText(/unlocked/i));
    });

    it('should have green-led class when unlocked or closed', () => {
        const { queryAllByTestId } = render(
      <Display closed={false} locked={false} />
      );
      expect(queryAllByTestId("led green-led")).toBeTruthy();

    });

     it('should have red-led class when uocked or open', () => {
        const { queryAllByTestId } = render(
            <Display closed={true} locked={true} />
          );
          expect(queryAllByTestId("led red-led")).toBeTruthy();
        });
    

});