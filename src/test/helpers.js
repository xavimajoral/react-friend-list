import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import { sinon, spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

global.expect = expect;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;