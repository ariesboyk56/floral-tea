import { Autocomplete, TextField  } from '@mui/material'
import  { FC, useEffect, useState } from 'react'
interface IData {
    package: number,
    cups: string
}
const Data: IData[] = [
    {package: 50, cups: "10-20"},
    {package: 100, cups: "30-40"},
    {package: 250, cups: "50-60"},
]

const Package: FC = () => {
    const [data, setData] = useState<IData[]>([])
    const [value, setValue] = useState<IData | null>();
    useEffect(()=>{
        setData(Data)
    }, [])
    
  return (
    <Autocomplete
      disablePortal
      id="package-format"
      options={data}
      sx={{ width: 277 }}
      renderInput={(params) => <TextField {...params} label="Package Format" />}
      getOptionLabel={(option)=>`${option.package}g (~ ${option.cups} cups)`}
        onChange={(event: any, newValue: IData | null)=> {
            // console.log("newValue : ", newValue)
            setValue(newValue)
        }}
    />
  )
}
export default Package