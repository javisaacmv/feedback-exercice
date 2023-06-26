import {Component} from 'react'

const YEARS = [
    '2019',
    '2020',
    '2021',
    '2022'
]

const FormHOC = (Form) => {
    class FormParent extends Component {

        constructor(){
          super()
      
          this.state = {
            annualIncome: 0,
            taxYear: '2019',
            result: '',
            loading: false
          }

          this.handleChangeAnnualIncome = this.handleChangeAnnualIncome.bind(this)
          this.handleChangeTaxYear = this.handleChangeTaxYear.bind(this)
          this.handleOnSubmit = this.handleOnSubmit.bind(this)

        }

        handleChangeAnnualIncome(e){
            const { value } = e.target;
            this.setState({
                ...this.state,
                annualIncome: value
            })
        }

        handleChangeTaxYear(e){
            const { value } = e.target;
            this.setState({
                ...this.state,
                taxYear: value
            })

        }

        async handleOnSubmit(){
                this.setState({
                    ...this.state,
                    loading: true
                })

                const res = await fetch(`http://localhost:5000/tax-calculator/tax-year/${this.state.taxYear}`)
                const result = await res.json()
                console.log(result)
                if(result.errors){
                    this.setState({
                        ...this.state,
                        result: `error: ${result.errors[0].message}`,
                        loading: false
                    })
                }else {
                    const {annualIncome} = this.state
                    result.tax_brackets.forEach(item => {
                        if(Number(annualIncome) >= item.min && !item.max){
                            this.setState({
                                ...this.state,
                                result: `Total taxes: ${annualIncome * item.rate}`,
                                loading: false
                            })
                        }
                        if(Number(annualIncome) >= item.min && Number(annualIncome) < item.max){
                            this.setState({
                                ...this.state,
                                result: `Total taxes: ${annualIncome * item.rate}`,
                                loading: false
                            })
                        }
                    })
                }
            
        }
      
        render() {
            const {annualIncome, taxYear, result, loading}  = this.state
            console.log(this.state)

          return (
           <Form
           annualIncome={annualIncome}
           changeAnnualIncome={this.handleChangeAnnualIncome}
           taxYear={taxYear}
           changeTaxYear={this.handleChangeTaxYear}
           selectOptions={YEARS}
           submit={this.handleOnSubmit}
           result={result}
           loading={loading}
           />
          )
        }
      }

      return FormParent
}

export default FormHOC