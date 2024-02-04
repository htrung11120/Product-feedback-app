import styled from 'styled-components'

// Styled Components
const UpDownIcon = styled.img`
    width: 12px;
height: 8px;
flex-shrink: 0;
stroke-width: 2px;
stroke: #4661E6;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`
const DeleteBtn = styled.button`
color: white;
align-self: flex-start;
margin-right: auto;
border: none;
width: 93px;
height: 44px;
flex-shrink: 0;
border-radius: 10px;
background: #D73737;
color: #F2F4FE;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
&:hover{
  background: #E98888;
  cursor: pointer;

}
`
const CancelBtn = styled.button`
   width: 93px;
height: 44px;
flex-shrink: 0;
border-radius: 10px;
background: #3A4374;
color: #F2F4FE;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
&:hover{
  background: #656EA3;
  cursor: pointer;

  }
`
const AddFeedBack = styled.button`
  width: 144px;
height: 44px;
flex-shrink: 0;
border-radius: 10px;
background: #AD1FEA;
color: #F2F4FE;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
&:hover{
  background: #C75AF6;
  cursor: pointer;
  }
`

const SubLable = styled.p`
margin: 0;
margin-bottom: 16px;
    color: #647196;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f8fd;
  min-height: 100vh;
`

const BackButton = styled.button`
color: #647196;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-start;
`

const ArrowIcon = styled.img`
margin-right: 6px;

  width: 8px;
  height: 8px;
`

const FeedbackFormContainer = styled.div`
  margin-top: 60px;
  width: 540px;
  height: 685px;
`

const FeedbackForm = styled.div`
  padding-top: 52px;
  padding:0 42px;
  box-sizing: border-box;
  width: 100%;
  height: 665px;
  background-color: white;
  border-radius: 8px;
  position: relative;
`

const Img = styled.img`
    width: 20px;
    height: 20px;
`
const ImgContainer = styled.div`
    width: 56px;
    height: 56px;
    background: rgb(232,77,112);
background: linear-gradient(90deg, rgba(232,77,112,1) 0%, rgba(163,55,246,1) 35%, rgba(40,167,237,1) 100%);
position: absolute;
top: -25px;
left: 42px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderText = styled.div`
padding-top: 52px;
  padding-bottom: 40px;
  font-size: 24px;
  font-family: jost;
  font-weight: bold;
  color: #3a4374;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const FormGroup = styled.div`
`

const Label = styled.label`
  color: #3a4374;
  font-family: Jost;
  font-size: 14px;
  font-weight: 700;
`
const DetailInput = styled.textarea`
    width: 456px;
height: 96px;
border-radius: 5px;
background: #F7F8FD;
border: none;
resize: none;
padding-top:16px ;
padding-left:24px;
cursor: pointer;

`
const TitleInput = styled.input`
color: #3A4374;
font-family: Jost;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
box-sizing: border-box;
  width: 456px;
  height: 48px;
  border: none;
  border-radius: 5px;
  background: #f7f8fd;
  cursor: pointer;
  padding-left:24px;
`

const SelectedCategory = styled.div`
  cursor: pointer;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
  width: 456px;
  height: 48px;
  border-radius: 5px;
  background: #f7f8fd;
  box-sizing: border-box;
  padding: 13px 24px;
  color: #3a4374;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const ModalContainer = styled.div`
  width: 456px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  position: absolute;
  top: 640px;
  left: 520px;
`

const ModalContent = styled.div`
  /* Your styling for modal content */
`

const CategoryList = styled.ul`
  padding: 0;
`

const ListItem = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: 24px;
  text-align: center;
  text-decoration: none;
  list-style: none;
  color: #647196;
  padding-left: 24px;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 47px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
`

export {
  UpDownIcon,
  ButtonContainer,
  CancelBtn,
  AddFeedBack,
  SubLable,
  FeedbackContainer,
  BackButton,
  ArrowIcon,
  FeedbackFormContainer,
  FeedbackForm,
  Img,
  ImgContainer,
  HeaderText,
  Form,
  FormGroup,
  Label,
  DetailInput,
  TitleInput,
  SelectedCategory,
  ModalContainer,
  ModalContent,
  CategoryList,
  ListItem,
  DeleteBtn,
}
