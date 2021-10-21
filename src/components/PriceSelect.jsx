import React from 'react'
import FormControl from '@mui/material/FormControl';
import Select from 'react-dropdown-select';

import '../styles/priceSelect.css'

function PriceSelect(props) {
  const option = props.option
  const option_group = props.option_group
  const optionInStore = option_group.options.find(el => el.id === option.id)

  const priceOptions = [
    {option:"", disabled:true},
    {option:`Current Price: ${optionInStore.price.usd === -4 ? "Standard" : optionInStore.price.usd === undefined ? "Included" : optionInStore.price.usd}`, value:`${optionInStore.price.usd}`},
    { option: "Standard", value:"standard" }, 
    { option: "Included", value:"included" }, 
    { option: "To be decided", value:"tbd"}
  ]
  return (
    <FormControl>
    <Select
      className="price-select"
      type="number"
      create
      clearable
      disabledLabel="Choose or Type New Price"
      placeholder={`Price: ${optionInStore.price.usd === -4 ? "Standard" : optionInStore.price.usd === undefined ? "Included" : optionInStore.price.usd }`}
      options={priceOptions}
      onChange={(values) => { optionInStore.price.usd = values; console.log(optionInStore.price.usd) }}
      values={[optionInStore.price.usd === -4 ? priceOptions.find(opt => opt.option === "Standard") : optionInStore.price.usd === undefined ? priceOptions.find(opt => opt.option === "Included"): priceOptions.find(opt => opt.option === `Current Price: ${optionInStore.price.usd}`)]}
      searchBy="option"
      labelField="option"
    />
  </FormControl>
  )
}

export default PriceSelect
