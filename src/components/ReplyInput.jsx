import styled from 'styled-components'

export default function ReplyInput() {
  return (
    <div>
      <Form action="">
        <TextArea type="text" />
        <Button>Post Reply</Button>
      </Form>
    </div>
  )
}

const Button = styled.button`
  width: 117px;
height: 44px;
color: #F2F4FE;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
border-radius: 10px;
background: #AD1FEA;
border: none;
`
const Form = styled.form`
margin-top: 24px;
margin-left: 72px;
display: flex;
align-items: flex-start;
justify-content:space-between;
gap: 40px;
`
const TextArea = styled.textarea`
  resize: none;
flex-grow: 1;
height: 80px;
color: #3A4374;
font-family: Jost;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 16px 24px;
border-radius: 5px;

&:focus {
    border:3px solid #4661E6; 
    outline: none; 
  }
`
