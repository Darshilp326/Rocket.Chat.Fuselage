import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import {
  createPropsFromKnobs,
  Document,
  handleEvent,
  ShowCaseSection,
  TextSection,
  VariationsTable,
} from '../../helpers/storybook';
import { CheckBox } from './index';


storiesOf('Elements|CheckBox', module)
  .lokiSkip('CheckBox', () => <Document>
    <TextSection>
      <h1>CheckBox</h1>
    </TextSection>
    <VariationsTable
      component={CheckBox}
      common={{ onChange: () => {} }}
      xAxis={{
        checked: { checked: true },
        unchecked: { checked: false },
        indeterminate: { indeterminate: true },
        'with label': { label: 'Label' },
      }}
      yAxis={{
        default: { },
        hover: { className: 'hover' },
        active: { className: 'active' },
        focus: { className: 'focus' },
        disabled: { disabled: true },
      }}
    />
    <TextSection>
      <h2>Uncontrolled</h2>
    </TextSection>
    <ShowCaseSection>
      <CheckBox />
    </ShowCaseSection>
  </Document>);

const props = createPropsFromKnobs({
  checked: false,
  disabled: false,
  hidden: false,
  indeterminate: false,
  invisible: false,
  label: '',
  value: '',
  onChange: handleEvent('change'),
});

storiesOf('Elements|CheckBox', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .addParameters({ jest: ['spec'] })
  .add('unchecked', () => <CheckBox {...props()} />)
  .add('checked', () => <CheckBox {...props({ checked: true })} />)
  .add('indeterminate', () => <CheckBox {...props({ indeterminate: true })} />)
  .add('disabled', () => <CheckBox {...props({ disabled: true })} />)
  .add('with label', () => <CheckBox {...props({ label: 'Label' })} />)
  .add('hidden', () => <CheckBox {...props({ hidden: true })} />)
  .add('invisible', () => <CheckBox {...props({ invisible: true })} />);