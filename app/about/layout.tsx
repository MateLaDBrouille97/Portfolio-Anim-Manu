"use client";



const ContactLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {

  



    return ( 
    <div>
      {/* <Navbar /> */}
      <main className="pt-[150px] ">
        {children}
      </main>
      
    </div> );
}
 
export default ContactLayout;