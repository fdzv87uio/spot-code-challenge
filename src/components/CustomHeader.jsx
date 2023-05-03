
export default function CustomHeader({currentView, setCurrentView}){
console.log(currentView);
    return(
        <div style={styles.header}>
            <div style={styles.logo}>Logo</div>
            <div style={styles.headerControls}>
                {currentView === "home" && <div onClick={()=>setCurrentView("home")} style={styles.headerLinkActive}>Home</div>}
                {currentView !== "home" && <div onClick={()=>setCurrentView("home")} style={styles.headerLinkInactive}>Home</div>}
                {/* {currentView === "about" && <div onClick={()=>setCurrentView("about")} style={styles.headerLinkActive}>About</div>}
                {currentView !== "about" && <div onClick={()=>setCurrentView("about")} style={styles.headerLinkInactive}>About</div>}
                {currentView === "services" && <div onClick={()=>setCurrentView("services")} style={styles.headerLinkActive}>Services</div>}
                {currentView !== "services" && <div onClick={()=>setCurrentView("services")} style={styles.headerLinkInactive}>Services</div>} */}
                {currentView === "products" && <div onClick={()=>setCurrentView("products")} style={styles.headerLinkActive}>Products</div>}
                {currentView !== "products" && <div onClick={()=>setCurrentView("products")} style={styles.headerLinkInactive}>Products</div>}
            </div>
            <button style={styles.headerButton}>Call To Action</button>
        </div>
    )
}

const styles = {
    header:{
        backgroundColor:"#ffffff",
        zIndex:99,
        position: "fixed",
        top: "0",
        width:"95%",
        height:"70px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:"30px",
        paddingRight:"30px",
    }, 
    logo :{
        fontSize:"1.4rem",
        fontFamily:"sans-serif",
        fontWeight:"bolder",
        color:"#000000",
    },
    headerControls:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:"30px",
    },
    headerLinkActive:{
        width:"100px",
        height:"auto",
        fontSize:"1rem",
        fontFamily:"sans-serif",
        fontWeight:"normal",
        color:"#ffffff",
        backgroundColor:"#999999",
        borderRadius:"10px",
        textAlign:"center",
        cursor:"pointer",
        padding:"5px 10px",
    }, 
    headerLinkInactive:{
        width:"100px",
        height:"auto",
        fontSize:"1rem",
        fontFamily:"sans-serif",
        fontWeight:"normal",
        color:"#777777",
        backgroundColor:"none",
        borderRadius:"10px",
        textAlign:"center",
        cursor:"pointer",
        padding:"5px 10px",
    }, 
    headerButton:{
        width:"150px",
        height:"50px",
        backgroundColor:"#000000",
        color:"#ffffff",
        borderRadius:"10px",
        fontSize:"1rem",
        fontWeight:"bolder",
        border:"none",
        boxShadow:"none",
        textAlign:"center",
    }
}