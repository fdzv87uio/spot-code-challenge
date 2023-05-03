
export default function CustomFooter(){
        return(
            <div style={styles.footerContainer}>
                <div style={styles.darkSquare}></div>
                <div style={styles.heroTexts}>
                    <h2 style={styles.heroTitle}>Lorem Ipnsum lore simmet conesi sdf</h2>
                    <p style={styles.heroCopy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div style={styles.heroControlWrapper}>
                        <button style={styles.heroButtonBlack}>Call to Action</button>
                    </div>
                </div>
            </div>
        )
    }
    
    const styles = {
        footerContainer:{
            width:"100%",
            height:"500px",
            backgroundColor:"#ececec",
            display:"flex",
            flexDirection:"row",
            padding:"40px 40px",
            gap:"30px",

        },
        heroTexts:{
            width:"700px",
            height:"auto",
            display:"flex",
            flexDirection:"column",
            alignItems:"left",
         },
         heroTitle:{
            fontSize:"4.5rem",
            fontWeight:"bolder",
            fontFamily:"sans-serif",
            maxWidth:"500px"
         },
         heroCopy:{
            fontSize:"1rem",
            color:"#999999",
            fontWeight:"normal",
            fontFamily:"sans-serif",
         },
         heroControlWrapper:{
            width:"350px",
            height:"auto",
            display:"flex",
            flexDirection:"row",
            gap:"10px",
         },
         heroButtonBlack:{
            width:"100%",
            height:"40px",
            borderRadius:"8px",
            textAlign:"center",
            backgroundColor:"#000000",
            color:"#ffffff",
            border:"none",
         },
         darkSquare:{
            width:"500px",
            height:"500px",
            backgroundColor:"#999999",
            bottom:"85px",
            position:"relative",
            zIndex:90,
         },
    }