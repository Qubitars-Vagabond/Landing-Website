const style={
 

    'nav':{
      display: 'flex',
      justifyContent: 'center',
      alignitem:"center"
      },
    'navItem':{
     fontWeight: "600",
      fontSize: { lg: "13px" ,md: "12px", sm: "12px", xs: "10px" },
        color: "#312B2B",
        paddingRight: '30px',
        fontFamily:' Lato',
        fontSize: '19px',
        fontWeight: '500',
        lineHeight: '23px',
        letterSpacing:' 0em',

     },
  
 'QuoteButton':{
    borderRadius:' 40px',
    fontFamily:' Lato',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight:' 17px',
    letterSpacing: '0em',
      paddingX: '35px',
      paddingY: '20px',
      boxShadow:"0px 0px 0px 0px",
      position: 'absolute',
      backgroundColor:"#00BBDC",
      top: '20px',
      right:'83px',
      cursor: 'pointer',
      "&:hover": {
        backgroundColor: "#00BBDC",
        boxShadow:"0px 0px 0px 0px",

      },
    
    
    },
   
    'linkstyle':{
      textDecoration: "none", // Remove underline
      color: "inherit", // Inherit color from parent (card)
      display: "block", // Make the link a block element
    },
    
    'Appbarstyle':{
      backgroundColor: "transparent",
      boxShadow: "0px 0px 0px 0px",
      paddingX: {md:"75px",sm:'70px',xs:'30px'},
      marginTop:"20px"
    },
  


}
export default style;