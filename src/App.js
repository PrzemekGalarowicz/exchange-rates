import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { Container, Section, Box, Columns } from 'react-bulma-components';
// import Spinner from './components/Spinner';
import Banner from './views/Banner';
import BoxedInput from './views/BoxedInput';
import { currencyCodesList } from './helpers';

const { Column } = Columns;

const url = 'http://api.nbp.pl/api/exchangerates/rates';
const table = 'C';
const country = 'poland';

function App() {
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');

  const fetchData = async () => {
    const response = await fetch(`${url}/${table}/${currency}/${country}/${amount}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data, amount, currency);
  };

  const debounceFn = useCallback(debounce(fetchData, 1000), []);

  const handleChangeCurrency = (e) => {
    setCurrency(e.target.value);
    if (amount && amount !== '0') {
      debounceFn();
    }
  };

  const handleChangeAmount = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (value !== '0') {
      debounceFn();
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
                onSelectChange={handleChangeCurrency}
                inputLabel="Amount"
                inputType="number"
                inputMin={0.01}
                inputDisabled={false}
                onInputChange={handleChangeAmount}
              />
            </Column>

            <Column>
              <BoxedInput
                size="large"
                selectLabel="Currency"
                selectDefaultValue="EUR"
                selectOptions={currencyCodesList}
                selectDisabled={!currencyCodesList}
                onSelectChange={handleChangeCurrency}
                inputLabel="Amount"
                inputType="number"
                inputMin={0.01}
                inputDisabled={false}
                onInputChange={handleChangeAmount}
              />
            </Column>
          </Columns>
        </Section>
      </Box>

      {/* <Spinner /> */}
    </Container>
  );
}

export default App;
