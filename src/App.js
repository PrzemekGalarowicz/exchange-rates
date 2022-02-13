import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { Container, Section, Box, Columns } from 'react-bulma-components';
import Spinner from './components/Spinner';
import Banner from './views/Banner';
import BoxedInput from './views/BoxedInput';
import { currencyCodesList } from './helpers';

const { Column } = Columns;

function App() {
  const [amount, setAmount] = useState('');

  const fetchData = (value) => {
    console.log(value, amount);
  };

  const debounceFn = useCallback(debounce(fetchData, 350), []);

  const handleChangeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (value !== '0') {
      debounceFn(value);
    }
  };

  return (
    <Container>
      <Banner
        title="This is an exchange rates."
        subtitle="Select a currency and type an amount and we'll calculate a rate for you!"
      />

      <Box>
        <Section>
          <Columns>
            <Column>
              <BoxedInput
                size="large"
                selectLabel="Currency"
                selectDefaultValue="PLN"
                selectOptions={currencyCodesList}
                selectDisabled={!currencyCodesList}
                inputLabel="Amount"
                inputType="number"
                inputMin={0.01}
                inputDisabled={false}
                onChange={handleChangeAmount}
              />
            </Column>

            <Column>
              <BoxedInput
                size="large"
                selectLabel="Currency"
                selectDefaultValue="EUR"
                selectOptions={currencyCodesList}
                selectDisabled={!currencyCodesList}
                inputLabel="Amount"
                inputType="number"
                inputMin={0.01}
                inputDisabled={false}
                onChange={handleChangeAmount}
              />
            </Column>
          </Columns>
        </Section>
      </Box>

      <Spinner />
    </Container>
  );
}

export default App;
