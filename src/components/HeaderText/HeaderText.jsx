import './HeaderText.css'

const HeaderText = props => {
  return (
    <>
        <h1 className={props.className}  >{props.children}</h1>
    </>
  )
}

export default HeaderText