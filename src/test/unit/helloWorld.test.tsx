import { shallow } from 'enzyme';
import * as React from 'react';
import { HelloWorld } from '../../renderer/components/helloWorld';

test("Should render", () =>
{
    const userName = "Kelvin"
    const helloWorld = shallow(<HelloWorld userName={ userName } />);

    expect(helloWorld).toBeTruthy();
    expect(helloWorld.text()).toEqual(`Hello ${ userName }`);
});
