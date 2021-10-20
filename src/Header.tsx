export interface Props {
  title: string
}

const Header = (props: Props) => {
  return (
    <header>
      <div className='headerTitle'>
        <h4>{props.title}</h4>
      </div>
    </header>
  )
}
export default Header;