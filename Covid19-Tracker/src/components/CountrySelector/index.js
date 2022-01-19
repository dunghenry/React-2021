import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';
export default function CountrySelector({value, handleOnchange, countries}){
    return(
        <FormControl>
            <InputLabel>Quốc gia</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnchange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}
            >
                {
                    countries.map((country) =>{
                        return (<option value={country.ISO2.toLowerCase()}>{country.Country}</option>);
                    })
                }
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}