import Button from 'react-bootstrap/Button';

function NavItem(props) {
  return (
    <>
      <Button href={props.address} style={{marginLeft:"15px", color: "black", fontFamily: "Oswald", fontSize: "15px", width:"100px", height:"35px", borderRadius: "15px", paddingBottom:"5px"}} variant="outline-secondary" >{props.page}</Button>
    </>
  );
}

export default NavItem;