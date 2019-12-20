import toJson from 'enzyme-to-json'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from '../src/main/xcomponents/styledComponents/Button';
import Form from '../src/main/xcomponents/styledComponents/Form';
import FormGQ from '../src/main/xcomponents/styledComponents/FormGQ';
import Input from '../src/main/xcomponents/styledComponents/Input';
import ItemDetailsArea from '../src/main/xcomponents/styledComponents/ItemDetailsArea';
import LeftColumn from '../src/main/xcomponents/styledComponents/LeftColumn';
import ModalSelect from  '../src/main/xcomponents/styledComponents/ModalSelect';
import ModalWrapper from  '../src/main/xcomponents/styledComponents/ModalWrapper';
import ModelInput from '../src/main/xcomponents/styledComponents/ModelInput';
import RightColumn from '../src/main/xcomponents/styledComponents/RightColumn';
import Select from '../src/main/xcomponents/styledComponents/Select';
import TextArea from '../src/main/xcomponents/styledComponents/Textarea';
import WrapperDiv from '../src/main/xcomponents/styledComponents/WrapperDiv';


configure({adapter: new Adapter()})
test('it has a button', () => {
    const buttonWrapper = shallow(<Button />)
    expect(buttonWrapper).toMatchSnapshot()
})
test('for Form', () => {
    const formWrapper = shallow(<Form />)
    expect(formWrapper).toMatchSnapshot()
})
test('for FormGQ', () => {
    const formGQ = shallow(<FormGQ />)
    expect(formGQ).toMatchSnapshot()
})
test('for Input', () => {
    const input = shallow(<Input />)
    expect(input).toMatchSnapshot()
})

test('for ItemDetailsArea', () => {
    const itemDetailsArea = shallow(< ItemDetailsArea />)
    expect(itemDetailsArea).toMatchSnapshot()
})

test('for LeftColumn', () => {
    const leftColumn = shallow(<LeftColumn />)
    expect(leftColumn).toMatchSnapshot()
})

test('for ModalSelect', () => {
    const modalSelect = shallow(<ModalSelect />)
    expect(modalSelect).toMatchSnapshot()
})

test('for ModalWrapper', () => {
    const modalWrapper = shallow(<ModalWrapper />)
    expect(modalWrapper).toMatchSnapshot()
})

test('for ModelInput', () => {
    const modelInput = shallow(<ModelInput />)
    expect(modelInput).toMatchSnapshot()
})

test('for RightColumn', () => {
    const rightColumn = shallow(<RightColumn/>)
    expect(rightColumn).toMatchSnapshot()
})

test('for Select', () => {
    const select = shallow(<Select/>)
    expect(select).toMatchSnapshot()
})

test('for StyledModal', () => {
    const styledModal = shallow(<StyledModal />)
    expect(styledModal).toMatchSnapshot()
})

test('for TextArea', () => {
    const textArea = shallow(<TextArea />)
    expect(textArea).toMatchSnapshot()
})

test('for WrapperDiv', () => {
    const wrapperDiv = shallow(<WrapperDiv />)
    expect(wrapperDiv).toMatchSnapshot()
})






