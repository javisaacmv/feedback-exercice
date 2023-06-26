import {TextField, Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import FormHOC from './FormHOC';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonWithLoading from './RenderPropsButton';
// import Button from '@mui/material/Button';

// eslint-disable-next-line react/prop-types
const Form = ({annualIncome, changeAnnualIncome, taxYear, changeTaxYear, submit, result, selectOptions, loading}) =>  {

    return (
        <Box
            component="form"
            sx={{display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems:'center', height: '600px'}}
        >
            <TextField id="outlined-basic" label="Annual Income" variant="outlined" sx={{margin: '1rem', width: '12rem'}} type='number' value={annualIncome} onChange={changeAnnualIncome}/>
            <Box sx={{margin: '1rem', minWidth: '12rem'}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tax year</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={taxYear}
                    label="Tax year"
                    onChange={changeTaxYear}
                    
                    >
                        {
                        // eslint-disable-next-line react/prop-types
                        selectOptions && selectOptions.map(op => 
                        <MenuItem value={op} key={op}>{op}</MenuItem>

                        )}
                    </Select>
            </FormControl>
            </Box>
            <ButtonWithLoading
                submit={submit}
                loading={loading}
                render={({ loading, submit }) => (
                    <>
                     <LoadingButton variant="contained" onClick={submit} loading={loading} disabled={loading}>Submit</LoadingButton>
                    </>
                )}
            />

            <Typography variant="body1" gutterBottom sx={{width:'30%', marginTop: '3rem'}}>
                {result}
            </Typography>

            
        </Box>
  )
}

export default FormHOC(Form)