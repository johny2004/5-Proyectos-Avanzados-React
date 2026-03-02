import styles from "./loader.module.css";
export default function Loader({item,id}) {
   if(item ===null) {
    return <Container> Loading...</Container>;

   }
   if(item === undefined) {
    return <Container> No url found { id}</Container>;
   }

   return <Container>Redirecting to {item.url}</Container>
}

function Container({children}){
    return <div className = {styles.loaderContainer}>{children}</div>

}